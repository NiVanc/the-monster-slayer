new Vue({
  el: "#app",
  data: {
    activeGame: false,
    playerHealth: 100,
    monsterHealth: 100,
    turns: []
  },
  methods: {
    startGame() {
      this.activeGame = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    // Asks the player if he wants to start a new game when the game ended
    startNewGame() {
      if (confirm("Do you want to play another round?")) {
        this.startGame();
      } else {
        this.activeGame = false;
      }
    },
    attack() {
      // Player attacks and we check if the monster has health left
      let damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift("Player hits monster for " + damage);
      if (this.checkEndGame()) {
        return;
      }
      this.monsterAttack();
    },
    specialAttack() {
      // Player special attacks and we check if the monster has health left
      let damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      this.turns.unshift(
        "Player hits monster with a special attack for " + damage
      );
      if (this.checkEndGame()) {
        return;
      }
      this.monsterAttack();
    },
    heal() {
      this.playerHealth <= 90
        ? (this.playerHealth += 20)
        : (this.playerHealth = 100);
      this.turns.unshift("Player heals for 10");
      this.monsterAttack();
    },
    giveUp() {
      this.startNewGame();
    },
    monsterAttack() {
      // Monster attacks and we check if the player has health left
      let damage = this.calculateDamage(5, 30);
      this.playerHealth -= damage;
      this.turns.unshift("Monster hits player for " + damage);
      this.checkEndGame();
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkEndGame() {
      if (this.monsterHealth <= 0) {
        alert("You did it! You won!");
        this.startNewGame();
        return true;
      } else if (this.playerHealth <= 0) {
        alert("Too bad! Better luck nex time");
        this.startNewGame();
        return true;
      }
      return false;
    }
  }
});
