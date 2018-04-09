import React from 'react';
import BootScene from '../../../scenes/BootScene';

class Boot extends React.Component {
  componentWillMount() {
    const {
      sceneKey,
      sceneManager,
      switchScene,
      previousScene,
    } = this.props;

    sceneManager.remove(previousScene);
    sceneManager.add(sceneKey, new BootScene(switchScene), true);
  }

  render() {
    return null;
  }
}

export default Boot;
