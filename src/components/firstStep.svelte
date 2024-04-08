<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function selectMove(move: string) {
    dispatch("setpage", { page: 2, move });
  }
</script>

<section class="first-step">
  <label for="paper" class="hand paper">
    <input type="radio" id="paper" name="move" value="paper"
      on:change={() => selectMove("paper")} />
    <img src="./public/images/Paper.png" alt="Paper" class="image" />
  </label>
  <label for="scissors" class="hand scissors">
    <input type="radio" id="scissors" name="move" value="scissors" on:change={() => selectMove("scissors")}
    />
    <img src="./public/images/Scissors.png" alt="Scissors" class="image" />
  </label>
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
</section>

<style>
  .first-step {
    background-image: url("/public/images/triangle.png");
    background-repeat: no-repeat;
    width: 476px;
    height: 430px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 100px;
    background-position: center;
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
