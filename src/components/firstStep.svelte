<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
export let selectedItem;
import io from 'socket.io-client';
  export let username:string;
  let socket = io(`http://localhost:3030`);


function selectMove(selectedItem: string) {
    // Dispatch the move to the parent component
    dispatch("setpage", { page: 3, selectedItem, computerItem: null });

    // Send the selected item to the server via WebSocket
    socket.emit('picked', { player: username, picked: selectedItem })
}
 
</script>
<div class="game-content">
<section class="first-step">
  <div class="game-bg"></div>
  <div class="line1">
  <label for="paper" class="hand paper">
    <input 
    type="radio" 
    id="paper" 
    name="move" 
    value="paper"
    on:change={() => selectMove("paper")} />
    <img src="./public/images/Paper.png" alt="Paper" class="image" />
  </label>
  <label for="scissors" class="hand scissors">
    <input 
    type="radio" 
    id="scissors" 
    name="move" 
    value="scissors" 
    on:change={() => selectMove("scissors")}
    />
    <img src="./public/images/Scissors.png" alt="Scissors" class="image" />
  </label>
  </div>
  <div class="line2">
  <label for="rock" class="hand rock">
    <input
      type="radio"
      id="rock"
      name="move"
      value="rock"
      on:change={() => selectMove("rock")}
    />
    <img src="./public/images/Rock.png" alt="Rock" class="image" />
  </label>
  </div>
</section>
</div>
<style>
.game-content{
display: flex;
margin-top: -5rem;
position: relative;

}
.game-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("/public/images/triangle.png");
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-position: center;
        mask-image: radial-gradient(circle, transparent 0%, black 40%);
    }

    .line1 {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding-top: 10rem;
    }

    .line2 {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center; 
    }

  .first-step {
    display: grid;
    grid-template-rows: 2fr 3fr;
    margin: 0;
    width: 100%;
    height: 100vh;
    justify-content: center;
    margin-top: 0rem;
    position: relative;
 
  }

  .scissors {
    margin-left: 20px;
  }

  .paper {
    margin-right: 20px;
  }

  .first-step .hand {
    cursor: pointer;
    transition: all 0.25s;
  }

  .first-step .hand:hover {
    transform: translate3d(0px, -8px, 0px);
  }

  .first-step input[type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .first-step .image {
    cursor: pointer;
  }
</style>
