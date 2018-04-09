import React from 'react';
import PlayScene from '../../../scenes/PlayScene';

import './Play.scss';

class Play extends React.Component {
  componentWillMount() {
    const {
      sceneKey,
      sceneManager,
      switchScene,
      previousScene,
    } = this.props;

    sceneManager.remove(previousScene);
    sceneManager.add(sceneKey, new PlayScene(switchScene), true);
  }

  render() {
    return null;
  }
}

export default Play;
