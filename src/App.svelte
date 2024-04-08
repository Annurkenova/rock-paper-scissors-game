<script lang="ts">
    import { onMount } from 'svelte';
    import FirstStep from "./components/firstStep.svelte";
    import SecondStep from "./components/secondStep.svelte";
    import ThirdStep from "./components/thirdStep.svelte";
	import Footer from './components/Footer.svelte';
    import Rules from './components/Rules.svelte';
	import Header from './components/Header.svelte';
	
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    let isMobile = !mediaQuery.matches; 
    function mediaQueryHandler(event: MediaQueryListEvent) {
        isMobile = !event.matches;
    }

    onMount(() => {
        mediaQuery.addEventListener('change', mediaQueryHandler);
    });

    let showRules = false;
    let step: number = 1;
    let selectedItem: string;

    function handleSetPage(event: CustomEvent) {
        const data = event.detail;
        step = data.page; 
        selectedItem = data.move; 
    } 

    function handleRulesOpen() {
        showRules = true;
    }

    function handleRulesClosed(event: CustomEvent) {
        step = event.detail.page;
        showRules = false;
    }
</script>

{#if isMobile}

<main class="app">

    {#if !showRules} 
    <Header/>

        {#if step === 1}
            <FirstStep on:setpage={handleSetPage}/>
        {:else if step === 2}
            <SecondStep selectedItem={selectedItem} />
        {:else if step === 3}
            <ThirdStep selectedItem={selectedItem} on:setpage={(data) => step = data.detail.page} />
        {/if}
        <Footer on:openRules={handleRulesOpen}/>
        {/if} 
        {#if showRules}
        <div class="rules-page">
            <Rules step={step} on:setpage={handleRulesClosed} on:closeRules={handleRulesClosed} />
        </div> 
    {/if}
   
</main>

{:else}
<main class="app-desktop " >
    <span class="background {showRules ? 'blurred' : ''}">
        <Header/>
        <div class="desktop-content ">
        {#if step === 1}
        <FirstStep on:setpage={handleSetPage}/>
        {:else if step === 2}
            <SecondStep selectedItem={selectedItem} />
        {:else if step === 3}
            <ThirdStep selectedItem={selectedItem} on:setpage={(data) => step = data.detail.page} />
        {/if}
        <Footer on:openRules={handleRulesOpen}/>
    </div>
    </span>
    {#if showRules}
        <div class="rules-page">
            <Rules step={step} on:setpage={handleRulesClosed} on:closeRules={handleRulesClosed} />
        </div> 
    {/if}
</main>
{/if}


<style>

.app {
    padding: 2rem;
    background: radial-gradient(134.00% 134.00% at 50% 0%, rgb(31, 55, 87), rgb(19, 21, 55) 100%);
    height: 100vh;
 }


 .desktop-content {
    display: flex;
    flex-direction: column;
    align-items: center;
 }

 @media only screen and (min-width: 1024px) {

    .rules-page {
        width: 400px;
        height: 415px;
        position: fixed;
        top: 50%;
        left: 50%;
        border-radius: 8px;
        transform: translate(-50%, -50%);
        z-index: 100; 
        overflow-y: auto;
        display: flex;
    }
        .app-desktop {
            padding:3rem 8rem;
            background: radial-gradient(134.00% 134.00% at 50% 0%, rgb(31, 55, 87), rgb(19, 21, 55) 100%);
            height: 200vh;

        }
        .blurred:not(.rules-page) {
            filter: brightness(80%);
    }
 }
</style>
