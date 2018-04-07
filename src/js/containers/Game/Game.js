import React from 'react';
import { setupGame, destroyGame } from '../../game/main';

import './Game.scss';

let game;

export default class Game extends React.Component {
  componentDidMount() {
    game = setupGame('game');
    this.props.initialiseGame(game);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    game = destroyGame(game);
  }

  render() {
    return <div className="game__wrapper" id="game" />;
  }
}
