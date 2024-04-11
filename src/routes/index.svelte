
<script lang="ts">
// @ts-nocheck
import io from "socket.io-client";
  
    import { onMount, onDestroy } from 'svelte';
    import { createEventDispatcher } from 'svelte';

    export let selectedItem: string;
    export let username: string;

    const dispatch = createEventDispatcher();

    let ws: WebSocket;

    onMount(() => {
        // Establish WebSocket connection
        let socket = io.connect(`http://localhost:3030`);

        socket.onopen = () => {
            // When WebSocket connection is open, send the username to the server
            socket.send(JSON.stringify({ type: 'username', username }));
        };

        socket.onmessage = (event) => {
            // Handle incoming messages from the server if needed
            const message = JSON.parse(event.data);
            // You can dispatch events here if you need to handle incoming messages
        };
    });

    onDestroy(() => {
        // Close WebSocket connection when the component is destroyed
        socket.close();
    });
</script>

