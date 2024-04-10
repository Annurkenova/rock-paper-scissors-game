<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import FirstStep from "./components/firstStep.svelte";
    import SecondStep from "./components/secondStep.svelte";
    import ThirdStep from "./components/thirdStep.svelte";
    import Menu from './components/Menu.svelte';
    import Footer from './components/Footer.svelte';
    import Rules from './components/Rules.svelte';
	import Header from './components/Header.svelte';
    import WebSocket from "./routes/index.svelte"
    
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
    let selectedItem:string;
    let username: string;
    let score: number = 0;
    let computerItem: string|null;
    function handleUpdateScore(event: CustomEvent) {
        const change = event.detail.change;
        score += change; // Update the score based on the change
    }
    function handleSetPage(event: CustomEvent) {
        const data = event.detail;
        step = data.page; 
        selectedItem = data.selectedItem; 
   
    } 
function handlePlayAgain(event:CustomEvent){
    const data = event.detail;
    computerItem = data.computerItem;
}
    function handleRulesOpen() {
        showRules = true;
    }

    function handleRulesClosed(event: CustomEvent) {
        step = event.detail.page;
        showRules = false;
    }

    // Функция для перехода с Menu на FirstStep после сохранения имени
    function handleUsernameSaved() {
        step = 2; // Устанавливаем шаг на FirstStep
    }

    // Обработчик для события playersReady, запускаемого из компонента Menu.svelte
    function handlePlayersReady() {
        step = 2; // Устанавливаем шаг на SecondStep после того, как два игрока подключились
    }
</script>

<WebSocket selectedItem={selectedItem} username={username}/>

{#if isMobile}
    <main class="app">
        {#if !showRules} 
        <Header score={score}/>
            {#if step === 1}
                <Menu on:playersReady={handlePlayersReady} username={username}/>  
            {:else if step === 2}
                <FirstStep on:setpage={handleSetPage} bind:selectedItem={selectedItem}  on:playersReady={handlePlayersReady}/> 
                {:else if step === 3}
                <SecondStep selectedItem={selectedItem} bind:computerItem={computerItem} on:setpage={handleSetPage} /> <!-- Перемещаем SecondStep на третье место -->
            {:else if step === 4}
                <ThirdStep  bind:computerItem={computerItem} selectedItem={selectedItem} 
                on:playagain={handlePlayAgain}
                on:setpage={handleSetPage} on:updateScore={handleUpdateScore}/> <!-- Перемещаем ThirdStep на четвертое место -->
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
    <span class="background {showRules ? 'blurred' : 'not-blurred'}">
        <Header score={score}/>
        <div class="desktop-content ">
     
        {#if step === 1}
            <Menu on:usernameSaved={handleUsernameSaved} on:playersReady={handlePlayersReady}/> <!-- Показываем Menu.svelte и передаем обработчик сохранения имени -->
        {:else if step === 2}
            <FirstStep bind:selectedItem={selectedItem} on:setpage={handleSetPage}/> <!-- Перемещаем FirstStep на второе место -->
        {:else if step === 3}
            <SecondStep bind:selectedItem={selectedItem} bind:computerItem={computerItem} on:setpage={handleSetPage} /> <!-- Перемещаем SecondStep на третье место -->
        {:else if step === 4}
            <ThirdStep     on:playagain={handlePlayAgain} computerItem={computerItem} selectedItem={selectedItem} on:setpage={handleSetPage} on:updateScore={handleUpdateScore} /> <!-- Перемещаем ThirdStep на четвертое место -->
        {/if}
        <Footer on:openRules={handleRulesOpen}/>
    </div>
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
    height: 100%;
 }

 .desktop-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding:3rem 8rem;
            background: radial-gradient(134.00% 134.00% at 50% 0%, rgb(31, 55, 87), rgb(19, 21, 55) 100%);
            height: 200vh;
        }
        /* .blurred:not(.rules-page) {
            filter: brightness(80%) !important; 
    } */
    
 }
</style>
