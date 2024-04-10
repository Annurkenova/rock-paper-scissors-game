<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { Stomp, Client } from '@stomp/stompjs';
  import SockJS from 'sockjs-client';
  let messages = [];    
  export let selectedItem;
  let messageList;
  let stompClient = null;
  export let username;
  let connectingElement;
  let playerElement;

  // Store to keep track of connection status
  const isConnected = writable(false);

  function connect(event) {
    if (username) {
      const socket = new SockJS("http://localhost:8080/ws");
      stompClient = Stomp.over(socket);

      // Set up event listeners for connection status
      stompClient.onConnect = () => {
        isConnected.set(true);
        onConnected();
      };
      stompClient.onDisconnect = () => {
        isConnected.set(false);
        onError(new Error('Disconnected'));
      };

      stompClient.activate(); // Connect to the server
    }

    if (event) event.preventDefault();
  }

  function onConnected() {
    if (stompClient) {
      stompClient.subscribe('/topic/public', onMessageReceived);
      stompClient.subscribe('/user/queue/msg', onMessageReceived);
      stompClient.send("/app/play.addUser", {}, JSON.stringify({ sender: username, type: 'JOIN' }));
      connectingElement.classList.add('hidden');
      playerElement.innerText = 'Player: ' + username;
      playerElement.classList.remove('hidden');
    }
  }

  function onError(error) {
    connectingElement.textContent = 'Could not connect to WebSocket server. Please refresh this page to try again!';
    connectingElement.style.color = 'red';
  }

  // Modify your other functions accordingly

</script>
