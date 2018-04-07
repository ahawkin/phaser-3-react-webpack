import React from 'react';
import Game from '../../game/Game';

import './Main.scss';

export default class Main extends React.Component {
  componentWillMount() {
    const game = Game.setupGame('game');

    this.props.initialiseGame(game);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    Game.destroyGame();
  }

  render() {
    return <div className="game__wrapper" id="game" />;
  }
}
