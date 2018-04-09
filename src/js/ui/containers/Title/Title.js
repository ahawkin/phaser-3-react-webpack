import React from 'react';
import TitleScene from '../../../scenes/TitleScene';

import './Title.scss';

class Title extends React.Component {
  componentWillMount() {
    const {
      sceneKey,
      sceneManager,
      switchScene,
      previousScene,
    } = this.props;

    sceneManager.remove(previousScene);
    sceneManager.add(sceneKey, new TitleScene(switchScene), true);
  }

  render() {
    return (
      <div className="main-menu">
        <ul className="main-menu__list">
          <li className="main-menu__item"><button onClick={() => { this.props.switchScene('play'); }} className="main-menu__button">Play</button></li>
          <li className="main-menu__item"><button className="main-menu__button">About</button></li>
          <li className="main-menu__item"><button className="main-menu__button">Options</button></li>
        </ul>
        <span className="main-menu__meta">Version 0.0.1a</span>
      </div>
    );
  }
}

export default Title;
