import Phaser from 'phaser';
import CONFIG from './constants/config';

class Game {
  static createGame() {
    return new Phaser.Game(CONFIG);
  }

  static destroyGame(game) {
    game.destroy();
  }
}

export default Game;
