import Phaser from 'phaser';
import { PLAY_SCENE_KEY } from '../constants/sceneKeys';

class PlayScene extends Phaser.Scene {
  constructor() {
    super({
      key: PLAY_SCENE_KEY,
    });
  }

  create() {
    console.log('Play scene started!');
    const camera = this.cameras.add(0, 0, this.sys.canvas.width, this.sys.canvas.height);
    camera.setBackgroundColor('#0a0a0a');
  }
}

export default PlayScene;
