<script lang="ts">
	import { createEventDispatcher } from "svelte";
    export let selectedItem:string;
    const dispatch = createEventDispatcher();
   
    function selectMove(move:string) {
    dispatch('setpage', { page: 4, move }); 
    }
</script>

<div class="contest">

        <div class="userhand">
            <h3>YOU PICKED</h3>
            <div class="handImageContainer">
                <img src="./public/images/Paper.png" alt="ChooseImage"/>
            </div>
            <div class="referee">
                <div class="decision"><h2>YOU WIN</h2></div>
                <div class="newGame">PLAY AGAIN</div>
            </div>
            <div class="rivalhand">
                <h3>THE HOUSE PICKED</h3>
                <div class="handImageContainer">
                    <img src="./public/images/Rock.png" alt="ChooseImageRival"/>
                </div>
            </div>
        </div>
    </div>


<style>
    .contest {
        width: 900px;
        display: flex;
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
   