<script lang="ts">
   import { createEventDispatcher } from 'svelte';

   const dispatch = createEventDispatcher();

   function openRules() {
       dispatch('openRules');
   }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<footer class="footer-container" on:click={openRules}>
   <button class="footer-button">
      <span class="footer-text">RULES</span>
   </button>
</footer>



<style>
   .footer-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 52px;
      border: 1px solid rgb(255, 255, 255);
      border-radius: 8px;
      padding: 11px 35px;
      margin-left: 95px;
      margin-right: 95px;
   }
  
   .footer-text {
      color: rgb(255, 255, 255);
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 2.5px;
   }
  
   .footer-button {
      display: inline;
      color: inherit; 
      background-color: inherit; 
      border: none; 
      padding: 0; 
      cursor: pointer;
   }
   @media only screen and (min-width: 1024px) {
 
      .footer-container {
            position: fixed;
            bottom: 40px;
            right: 40px;
            border: 1px solid rgb(255, 255, 255);
            border-radius: 8px;
            padding: 11px 35px;
            cursor: pointer;
        }
  
     
   }
   
  </style>