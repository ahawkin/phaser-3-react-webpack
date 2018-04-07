import React from 'react';
import Game from './Game/Game';
import Boot from './Boot/Boot';
import MainMenu from './MainMenu/MainMenu';
import * as sceneKeys from '../constants/sceneKeys';

export default class App extends React.Component {
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

  setupBootScene(sceneManager) {
    return (
      <Boot
        sceneKey={sceneKeys.BOOT_SCENE_KEY}
        sceneManager={sceneManager}
        switchScene={this.switchScene}
      />
    );
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
          sceneContainer: this.setupBootScene(sceneManager),
        });
        break;
      case sceneKeys.MAIN_MENU_SCENE_KEY:
        this.setState({
          sceneKey: sceneKeys.MAIN_MENU_SCENE_KEY,
          sceneContainer: <MainMenu
            sceneKey={sceneKeys.MAIN_MENU_SCENE_KEY}
            sceneManager={sceneManager}
            switchScene={this.switchScene}
            previousScene={this.state.sceneKey}
          />,
        });
        break;
      default:
        this.setState({
          sceneKey: sceneKeys.BOOT_SCENE_KEY,
          sceneContainer: <Boot
            sceneKey={sceneKeys.BOOT_SCENE_KEY}
            sceneManager={sceneManager}
            switchScene={this.switchScene}
          />,
        });
        break;
    }
  }

  render() {
    return (
      <div>
        <Game initialiseGame={this.initialiseGame} />
        <div className="overlay" id={this.state.sceneKey}>
          {this.state.sceneContainer}
        </div>
      </div>
    );
  }
}
