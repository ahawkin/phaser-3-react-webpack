export default class Game {
  constructor(game) {
    this.game = game;
  }

  destroyGame() {
    this.game.destroy();
  }
}
