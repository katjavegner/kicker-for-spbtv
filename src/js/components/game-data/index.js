import React from 'react';
import TeamsInfo from '../game-data__teams-info';
import Timer from './timer';

export default class GameData extends React.Component {

  render() {
    return (
      <div className='game-data'>
        <TeamsInfo />
        <Timer />
      </div>
    );
  }
}
