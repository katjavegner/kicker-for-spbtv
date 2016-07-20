import React from 'react';
import GameData from '../game-data';
import Header from '../main-content__header';

export default class NewGame extends React.Component {

  render() {
    return (
      <div>
        <Header>Новая игра</Header>
        <GameData />
      </div>
    );
  }
}
