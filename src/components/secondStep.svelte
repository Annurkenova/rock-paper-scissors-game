<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { onMount } from "svelte";

    export let selectedItem:  string;
    const dispatch = createEventDispatcher();
    export let computerItem: string | null = null;
    let gameResult: string | null = null;

    // Simulating delay to demonstrate loading
    onMount(() => {
    
        setTimeout(()=>{
            dispatch("setpage", { page: 4,selectedItem});
        },5000)
        // Assume the server sends the image URL through WebSocket after a delay
        setTimeout(() => {
            // Randomly select an item for the computer's hand
            const items = ['rock', 'paper', 'scissors'];
            const randomIndex = Math.floor(Math.random() * items.length);
            computerItem = items[randomIndex];
        }, 3000); // Adjust the delay as needed
       
    });
   
 
</script>

<div class="contest">
    <div class="userhand">
        <h3>YOU PICKED</h3>
        <div class="handImageContainer">
            <!-- Use a conditional statement to display the selected image -->
            {#if selectedItem === 'paper'}
                <img src="./public/images/Paper.png" alt="Paper"/>
            {:else if selectedItem === 'scissors'}
                <img src="./public/images/Scissors.png" alt="Scissors"/>
            {:else if selectedItem === 'rock'}
                <img src="./public/images/Rock.png" alt="Rock"/>
            {/if}
        </div>
    </div>
    <div class="rivalhand">
        <h3>THE HOUSE PICKED</h3>
        <div class="handImageContainer">
            <!-- Display a loading indicator until the server item is received -->
            {#if computerItem === null}
                <div>Loading...</div>
            {:else}
                <!-- Display the server item when it is received -->
                <img src="{`./public/images/${computerItem.charAt(0).toUpperCase()}${computerItem.slice(1)}.png`}" alt="House's Pick"/>
            {/if}
        </div>
    </div>
    
</div>
<style>

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
        align-items: flex-start;
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

.referee {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.referee h2 {
    font-size: 45px;
}

.newGame {
    background-color: white;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    color: rgb(59, 66, 98);
    cursor: pointer;
    transition:all 0.15s;
}

.newGame:hover {
    color: rgb(219, 46, 77);
    font-family: Barlow Semi Condensed;
    font-size: 16px;
    font-weight: 600;
}
</style>
