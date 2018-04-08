import React from 'react';
import Phaser from 'phaser';
import Game from '../../game/Game';

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
  parent: 'game',
};

import './Main.scss';

export default class Main extends React.Component {
  componentWillMount() {
    //https://github.com/koreezgames/phaser2-es6-webpack/blob/master/src/main.js
    this.game = new Game(new Phaser.Game(config));

    this.props.initialiseGame(this.game.game);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    this.game.destroyGame();
  }

  render() {
    return <div className="game__wrapper" id="game" />;
  }
}
