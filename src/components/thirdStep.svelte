<script lang="ts">
	import { createEventDispatcher } from "svelte";
    export let selectedItem:string;
    const dispatch = createEventDispatcher();
   
    function selectMove(move:string) {
    dispatch('setpage', { page: 1, move }); 
    }
</script>

<section class="third-step">
    <p>Selected Item: {selectedItem}</p>
 </section>
