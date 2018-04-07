import Phaser from 'phaser';
import * as sceneKeys from '../../constants/sceneKeys';

export default class BootScene extends Phaser.Scene {
  constructor(switchScene) {
    super({
      key: sceneKeys.BOOT_SCENE_KEY,
    });

    this.switchScene = switchScene;
  }

  preload() {
    const camera = this.cameras.add(0, 0, this.sys.canvas.width, this.sys.canvas.height);
    const loadingText = this.loadingText();
    const progressBar = this.loadingBar('15132390');

    camera.setBackgroundColor('#0F2A48');

    this.load.on('progress', (percentage) => {
      progressBar.fillRect(
        (this.sys.canvas.width / 2) - 250,
        (this.sys.canvas.height / 2) + 10,
        500 * percentage, 30,
      );
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      loadingText.destroy();
    });

    this.loadAssets();
  }

  loadAssets() {
    this.load.image('logo-white', 'assets/images/logo-white.png');
    this.load.image('stars', 'assets/images/stars.png');
  }

  loadingText() {
    const loadingText = this.add.text(
      this.sys.canvas.width / 2,
      (this.sys.canvas.height / 2) - 10,
      'Loading...',
      {
        fontFamily: 'arial',
        fontSize: 18,
        fill: '#E6E6E6',
      },
    );
    loadingText.setOrigin(0.5, 0.5);

    return loadingText;
  }

  loadingBar(colour) {
    const progressBar = this.add.graphics();
    progressBar.clear();
    progressBar.fillStyle(colour, 1);

    return progressBar;
  }

  create() {
    console.log('Boot scene started!');
    this.switchScene(sceneKeys.MAIN_MENU_SCENE_KEY);
  }
}
