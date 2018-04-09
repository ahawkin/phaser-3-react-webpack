import Phaser from 'phaser';
import CONFIG from './constants/config';

export default class Game {
  static createGame() {
    return new Phaser.Game(CONFIG);
  }

  static destroyGame(game) {
    game.destroy();
  }
}
