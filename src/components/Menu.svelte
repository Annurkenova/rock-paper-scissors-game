<script lang="ts">
import user from "../../public/images/user-icon.png"
</script>

<section class="menu">
    <label class="menu-container">
        <input type="radio" class="menu-button">
            <img src={user} alt="user-icon" class="user-icon"/>
           <span class="menu-text">Play Online</span>
           <span class="waiting-number">0  waiting  </span>

    </label>     
</section>

<style>
   .user-icon{
    width: 10vw;
    height: 10vh;
    }
 .menu-button{
    display: flex;
    justify-content: space-between;
    align-items: center;
 }
 .menu{
    display: flex;
    justify-content: space-between;
    align-items: center;

 }

</style>
