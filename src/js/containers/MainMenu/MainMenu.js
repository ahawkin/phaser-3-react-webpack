import React from 'react';
import MainMenuScene from '../../game/scenes/MainMenuScene';

export default class MainMenu extends React.Component {
  componentWillMount() {
    const {
      sceneKey,
      sceneManager,
      switchScene,
      previousScene,
    } = this.props;

    sceneManager.remove(previousScene);
    sceneManager.add(sceneKey, new MainMenuScene(switchScene), true);
  }

  render() {
    return <p>MainMenu State</p>;
  }
}
