const CONFIG = {
  type: Phaser.WEBGL,
  width: 1600,
  height: 900,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  parent: 'game',
};

export default CONFIG;
