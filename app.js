new Vue({
  el: "#app",
  data: {
    activeGame: false,
    playerHealth: 100,
    monsterHealth: 100
  },
  methods: {
    startGame() {
      this.activeGame = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    }
  }
});
