<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    export let selectedItem: string | null;
    export let computerItem: string | null;

    const dispatch = createEventDispatcher();

    let gameResult: string | null = null;
    function playAgain(){
        gameResult = null; 
        selectedItem=null;
        computerItem=null;
        dispatch("setpage", { page: 2 });
        dispatch("playagain",{selectedItem:null,rivalSelectedItem:null,computerItem:null})
    }
    onMount(() => {
        gameResult = null;
        determineGameResult();
    });

    function determineGameResult() {
        if (selectedItem === computerItem) {
            gameResult = "You're equal!";
        } else if (
            (selectedItem === 'rock' && computerItem === 'scissors') ||
            (selectedItem === 'paper' && computerItem === 'rock') ||
            (selectedItem === 'scissors' && computerItem === 'paper')
        ) {
            gameResult = "You win!";
            dispatch('updateScore', { change: 1 });
            document.querySelector('.userhand .handImageContainer')?.classList.add('win');
        } else {
            gameResult = "You lose!";
            dispatch('updateScore', { change: -1 });
            document.querySelector('.rivalhand .handImageContainer')?.classList.add('win');
        }
    }
</script>

<div class="contest">
            <div class="userhand">
                <h3 class="user-text">YOU PICKED</h3>
                <div class="handImageContainer">
                    
                    {#if selectedItem === 'paper'}
                    <img src="./public/images/Paper.png" alt="Paper"/>
                {:else if selectedItem === 'scissors'}
                    <img src="./public/images/Scissors.png" alt="Scissors"/>
                {:else if selectedItem === 'rock'}
                    <img src="./public/images/Rock.png" alt="Rock"/>
                {/if}
                </div>
            </div>
            <div class="result">
                {#if gameResult !== null}
                    <p class="game-result">{gameResult}</p>
                {/if}
                <button class="btn-play-again" on:click={playAgain}>PLAY AGAIN</button>
            </div>
    <div class="rivalhand">
        <h3 class="comp-text">THE HOUSE PICKED</h3>
        <div class="handImageContainer">
            {#if computerItem !== ""}
                <img src={`./public/images/${computerItem?.charAt(0).toUpperCase()}${computerItem?.slice(1)}.png`} alt="Computer's Pick"/>
            {/if}
        </div>
    </div>
</div>



<style>

    .btn-play-again{
        padding: 15px 62px;
        color: rgb(59, 66, 98);
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 2.5px;
        margin-top: 1rem;
        border-radius: 8px;
        box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
        background: linear-gradient(0.00deg, rgb(243, 243, 243),rgb(255, 255, 255) 100%);
    }
    .result{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        margin-left: 3rem;
        margin-right: 3rem;
    }
.game-result{
    color: rgb(255, 255, 255);
    font-size: 56px;
    font-weight: 700;
    line-height: 67px;
    text-align: center;
    
}
.userhand{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .rivalhand{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    .contest {

        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 50px;
    }
  
    .contest img {
    width: 275px;
    height: 275px;
}


.contest > div {
    flex: 1;
}

.contest h2 {
    color: white;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 50px;
    text-align: center;
}

.contest h3 {
    color: white;
    padding-bottom: 4rem;
}

.contest .handImageContainer {
    display:flex;
    justify-content: center;
}

@media only screen and (max-width: 1023px) {
  
    .contest {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
       
    }  
      
.contest img {
    display: flex;
        justify-content: space-between;
        align-items: center;}

        .userhand{
        display: flex;
        align-items: flex-start;
        text-align: center;
        justify-content: space-between;
    }
   
    .rivalhand{
        align-items: flex-end;
        margin-top: -43rem;

    }

        .result {
        grid-column: 1 / span 2; /* Span both columns */
        text-align: center; /* Center the content */
        margin-top: 20px; /* Add space between hands and result */
    }
   .user-text{
    margin-left: 4rem;
   }
   .comp-text{
    margin-right: 2rem;
}
    
}
</style>
