import Phaser from 'phaser';
import { MAIN_MENU_SCENE_KEY } from '../../constants/sceneKeys';

let stars;

export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super({
      key: MAIN_MENU_SCENE_KEY,
    });
  }

  create() {
    console.log('Main Menu scene started!');
    const camera = this.cameras.add(0, 0, this.sys.canvas.width, this.sys.canvas.height);
    stars = this.add.tileSprite(this.sys.canvas.width / 2, this.sys.canvas.height / 2, this.sys.canvas.width, this.sys.canvas.height, 'stars');
    const logo = this.add.image((this.sys.canvas.width / 2), (this.sys.canvas.height / 2) - 100, 'logo-white');

    camera.setBackgroundColor('#0F2A48');
    logo.setScale(0.75);
    stars.alpha = 0.2;
  }

  update() {
    stars.tilePositionX -= 0.25;
  }
}
