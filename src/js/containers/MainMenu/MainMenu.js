import React from 'react';
import MainMenuScene from '../../game/scenes/MainMenuScene';

import './MainMenu.scss';

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
    return (
      <ul className="main-menu">
        <li className="main-menu__item"><button onClick={() => { this.props.switchScene('boot'); }} className="main-menu__button">Play</button></li>
        <li className="main-menu__item"><button className="main-menu__button">About</button></li>
        <li className="main-menu__item"><button className="main-menu__button">Options</button></li>
      </ul>
    );
  }
}
