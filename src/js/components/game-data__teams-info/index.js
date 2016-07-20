import React from 'react';
import Team from './team';
import ScoreContainer from '../game-data__score';

export default class TeamsInfo extends React.Component {

  render() {
    return (
      <div className='game-data__teams-info'>
        <Team team='blue' teamName='Выберите команду' />
        <ScoreContainer />
        <Team team='red' teamName='Выберите команду' />
      </div>
    );
  }
}
