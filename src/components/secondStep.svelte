<script lang="ts">
	import { createEventDispatcher } from "svelte";
    export let selectedItem:string;
    const dispatch = createEventDispatcher();
   
    function selectMove(move:string) {
    dispatch('setpage', { page: 3, move }); 
    }
</script>

<div class="contest">
    <p>{selectedItem} </p>
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

.newGame {
    color: white;
}

.contest .handImageContainer {
    display:flex;
    justify-content: center;
}
   </style>
   