import React from 'react';
import TeamScore from './team-score';

export default class ScoreContainer extends React.Component {

  render() {
    return (
      <div className='game-data__score'>
        <TeamScore team='blue' score='0' />
        <span className='game-data__score-dots'>:</span>
        <TeamScore team='red' score='0' />
      </div>
    );
  }
}
