import Phaser from 'phaser';

export const setupGame = (divId) => {
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

  const gameInstance = new Phaser.Game(config);

  return gameInstance;
};

export const destroyGame = (game) => {
  game.destroy();

  return null;
};
