<script lang="ts">

import { onMount } from 'svelte';
import { writable } from 'svelte/store';

const socket: WebSocket = new WebSocket("ws://localhost:8080");
let messages: string[] = [];
console.log('change')

socket.onopen = function (event) {
  console.log("open", event);
};

socket.onerror = function (event) {
  console.error('Error:', event);
};

socket.onmessage = function (event) {
  console.log('', event.data);
  messages = [...messages, event.data]
};

//onMount(() => {
    //const unsubscribe = messages.subscribe(value => {
      //messageList = value;
    //});

    //return unsubscribe;
  //});

//socket.close();
</script>
<ul>
  {#each messages as message}
    <li>{message}</li>
  {/each}
</ul>
