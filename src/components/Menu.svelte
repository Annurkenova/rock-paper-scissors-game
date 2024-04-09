<script lang="ts">
   import { createEventDispatcher } from 'svelte';
  
   let username = ""; // Переменная для хранения имени пользователя
   let playersCount = 0; // Переменная для хранения количества игроков
   const dispatch = createEventDispatcher();

   // Функция для обработки ввода имени пользователя
   function handleUsernameInput(event: Event) {
       const inputEvent = event as InputEvent;
       username = (inputEvent.target as HTMLInputElement).value;
   }

   // Функция для сохранения имени пользователя
   function saveUsername() {
       // Проверяем, было ли уже сохранено имя
       if (!username.trim()) {
           alert("Please enter your name!");
           return;
       }

       // В этой функции не будем увеличивать счетчик игроков, чтобы он не изменялся при вводе имени
   }

   // Функция для обработки нажатия на кнопку PLAY ONLINE
   function handlePlayersReady() {
       // Увеличиваем счетчик игроков только если количество игроков меньше 2
       if (playersCount < 2) {
           playersCount++;
       }

       // Проверяем, достигло ли количество игроков 2
       if (playersCount === 2) {
           // Отправляем событие playersReady только если количество игроков равно 2
           dispatch('playersReady');
       }
   }

   // Функция для обработки нажатия на кнопку PLAY COMPUTER
   function handlePlayComputer() {
       // Отправляем событие playWithComputer, чтобы начать игру с компьютером
       dispatch('playWithComputer');
   }
</script>

<section class="menu">
   <label class="menu-container">
       <!-- Используем input для ввода имени пользователя -->
       <input type="text" placeholder="Enter your name" value={username} on:input={handleUsernameInput} class="username-input">
       <!-- Кнопка для сохранения имени пользователя -->
       <button on:click={saveUsername}>Save</button>
       <!-- Остальной код меню -->
       <div class="playOnline">
           <!-- Заменим просто текст кнопки на кнопку -->
           <img src="./public/images/icon-online.png" alt="Online"/>
           <button on:click={handlePlayersReady} class="play-online-button">PLAY ONLINE</button>
           <!-- Отображаем количество ожидающих игроков -->
           <span class="waiting-number">{playersCount} waiting </span>
       </div>
       <div class="withComputer">
           <img src="./public/images/icon-comp.png" alt="Computer">
           <!-- Добавляем обработчик нажатия на кнопку PLAY COMPUTER -->
           <button on:click={handlePlayComputer} class="play-computer-button">PLAY COMPUTER</button>
       </div>
   </label>     
</section>

<style>

.username-input {
    width: 10vw;
    margin-bottom: 20px;
    }

 button{

 }
 .menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
 }

 .playOnline {
   display: flex;
   margin-bottom: 20px;
   align-items: center; /* Чтобы изображение и текст были выровнены вертикально */
 }

 .play-online-button, .play-computer-button {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background-color: transparent;
    transition:all 0.15s;
}

.play-online-button:hover, .play-computer-button:hover {
   color: #0056b3;
}

.menu-text {
   font-family: Barlow Semi Condensed;
   font-size: 16px;
   font-weight: 600;
   color: white;
   margin-right: 20px;
}

.waiting-number {
   font-family: Barlow Semi Condensed;
   font-size: 16px;
   font-weight: 600;
   color: white;
}

.playOnline img{
   margin-right: 20px;
    width: 10vw;
    }

 .withComputer {
   display: flex;

 }

 .withComputer img {
   margin-right: 20px;
   width: 10vw;
   height: 10vw;
 }

</style>
