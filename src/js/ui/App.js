import React from 'react';
import Canvas from './components/Canvas/Canvas';
import Boot from './scenes/Boot/Boot';
import Title from './scenes/Title/Title';
import Play from './scenes/Play/Play';
import * as sceneKeys from '../constants/sceneKeys';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: {},
      sceneKey: null,
      sceneContainer: null,
    };

    this.initialiseGame = this.initialiseGame.bind(this);
    this.switchScene = this.switchScene.bind(this);
  }

  initialiseGame(game) {
    this.setState({ gameState: game }, () => {
      this.switchScene(sceneKeys.BOOT_SCENE_KEY);
    });
  }

  switchScene(sceneKey) {
    const sceneManager = this.state.gameState.scene;

    switch (sceneKey) {
      case sceneKeys.BOOT_SCENE_KEY:
        this.setState({
          sceneKey: sceneKeys.BOOT_SCENE_KEY,
          sceneContainer: this.renderBootScene(sceneManager),
        });
        break;
      case sceneKeys.TITLE_SCENE_KEY:
        this.setState({
          sceneKey: sceneKeys.TITLE_SCENE_KEY,
          sceneContainer: this.renderMenuMainScene(sceneManager),
        });
        break;
      case sceneKeys.PLAY_SCENE_KEY:
        this.setState({
          sceneKey: sceneKeys.PLAY_SCENE_KEY,
          sceneContainer: this.renderPlayScene(sceneManager),
        });
        break;
      default:
        this.setState({
          sceneKey: sceneKeys.BOOT_SCENE_KEY,
          sceneContainer: this.renderBootScene(sceneManager),
        });
        break;
    }
  }

  renderBootScene(sceneManager) {
    return (
      <Boot
        sceneKey={sceneKeys.BOOT_SCENE_KEY}
        sceneManager={sceneManager}
        switchScene={this.switchScene}
        previousScene={this.state.sceneKey}
      />
    );
  }

  renderMenuMainScene(sceneManager) {
    return (
      <Title
        sceneKey={sceneKeys.TITLE_SCENE_KEY}
        sceneManager={sceneManager}
        switchScene={this.switchScene}
        previousScene={this.state.sceneKey}
      />
    );
  }

  renderPlayScene(sceneManager) {
    return (
      <Play
        sceneKey={sceneKeys.TITLE_SCENE_KEY}
        sceneManager={sceneManager}
        switchScene={this.switchScene}
        previousScene={this.state.sceneKey}
      />
    );
  }

  render() {
    return (
      <div className="game">
        <Canvas initialiseGame={this.initialiseGame} />
        <div className="game__overlay" id={this.state.sceneKey}>
          {this.state.sceneContainer}
        </div>
      </div>
    );
  }
}

export default App;
