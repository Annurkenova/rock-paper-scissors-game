<script lang="ts">
  export let score: number;
  export let username: string='';
  console.log("Username:", username);
</script>

<header class="header-container">
  <section class="header-container-logo">
    <p class="item-name">ROCK</p>
    <p class="item-name">PAPER</p>
    <p class="item-name">SCISSORS</p>
  </section>
  <div class="header-container-score">
    <p class="score-text">{username} SCORE</p>
    <p class="score-number">{score}</p>
  </div>
</header>

<style>
  .header-container {
    border: 3px solid rgba(255, 255, 255, 0.29);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
  }
  .header-container-logo {
    display: flex;
    flex-direction: column;
  }
  .header-container-score {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 23px;
    border-radius: 4px;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    background: linear-gradient(
      0deg,
      rgb(243, 243, 243),
      rgb(255, 255, 255) 100%
    );
  }
  .item-name {
    color: rgb(255, 255, 255);
    font-size: 21px;
    font-weight: 700;
    line-height: 16px;
  }
  .score-text {
    color: rgb(42, 69, 194);
    font-size: 10px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 1.56px;
  }
  .score-number {
    color: rgb(86, 84, 104);
    font-size: 40px;
    font-weight: 700;
    line-height: 40px;
  }
  @media only screen and (min-width: 1024px) {
    .header-container {
      padding: 18px 24px;
      border-radius: 15px;
    }
    .header-container-score {
      padding: 16px 47px 15px 48px;
      border-radius: 8px;
      gap: 7px;
    }
    .item-name {
      font-size: 40px;
      line-height: 32px;
    }
    .score-text {
      font-size: 17px;
    }
    .score-number {
      font-size: 55px;
    }
  }
</style>
