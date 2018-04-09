import Phaser from 'phaser';
import { TITLE_SCENE_KEY } from '../constants/sceneKeys';

class TitleScene extends Phaser.Scene {
  constructor() {
    super({
      key: TITLE_SCENE_KEY,
    });
  }

  create() {
    console.log('Main Menu scene started!');
    const camera = this.cameras.add(0, 0, this.sys.canvas.width, this.sys.canvas.height);
    this.stars = this.add.tileSprite(this.sys.canvas.width / 2, this.sys.canvas.height / 2, this.sys.canvas.width, this.sys.canvas.height, 'stars');
    const logo = this.add.image((this.sys.canvas.width / 2), (this.sys.canvas.height / 2) - 175, 'logo-white');

    camera.setBackgroundColor('#0F2A48');
    logo.setScale(0.8);
    this.stars.alpha = 0.2;
  }

  update() {
    this.stars.tilePositionX -= 0.25;
  }
}

export default TitleScene;
