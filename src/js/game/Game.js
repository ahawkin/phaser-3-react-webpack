import Phaser from 'phaser';

export default class Game {
  static setupGame(divId) {
    const config = {
      type: Phaser.WEBGL,
      width: 1600,
      height: 900,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 },
        },
      },
      parent: divId,
    };

    return new Phaser.Game(config);
  }

  static destroyGame(game) {
    game.destroy();
  }
}
