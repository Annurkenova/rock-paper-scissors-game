<script lang="ts">
    import { createEventDispatcher, onDestroy } from "svelte";
    import { onMount } from "svelte";
    import io, { Socket } from 'socket.io-client';

    interface Player {
        name: string;
        picked: string;
        socketId:number|string;
    }

    const dispatch = createEventDispatcher();
 export let selectedItem: string;
    export let rivalSelectedItem: string | null = null;

    let socket: Socket;

    onMount(() => {
        socket = io('http://localhost:3030');
        socket.on('result', (result): void => {
            if (result && result.playerOne && result.playerTwo) {
                // Determine the user's player based on the socket.id
                const userPlayer: Player = result.playerOne.socketId === socket.id ? result.playerOne : result.playerTwo;

                // Check if selectedItem is already set
                if (!selectedItem) {
                    selectedItem = userPlayer.picked;
                }
                
                // Update the rival's selection based on the received result
                if (userPlayer.socketId !== socket.id) {
                    rivalSelectedItem = userPlayer.picked;
                }
                
                dispatch("setpage", { page: 4, selectedItem, rivalSelectedItem });
            } else {
                console.error('Invalid result format:', result);
            }
        });
    
        return () => {
            if (socket) {
                socket.disconnect();
            }
        };

        onDestroy(() => {
            if (socket) {
                socket.disconnect();
            }
        });
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
        <h3>THE RIVAL PICKED</h3>
        <div class="handImageContainer">
            <!-- Display the rival's selection -->
            {#if rivalSelectedItem !== null}
                {#if rivalSelectedItem === 'paper'}
                    <img src="./public/images/Paper.png" alt="Paper"/>
                {:else if rivalSelectedItem === 'scissors'}
                    <img src="./public/images/Scissors.png" alt="Scissors"/>
                {:else if rivalSelectedItem === 'rock'}
                    <img src="./public/images/Rock.png" alt="Rock"/>
                {/if}
            {:else}
                <div>Loading...</div>
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
