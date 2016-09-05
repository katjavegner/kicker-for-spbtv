import React from 'react';
import cx from 'classnames';
import TeamScore from './team-score';

export default class ScoreContainer extends React.Component {

  render() {
    return (
      <div className={ cx('game-data__score') }>
        <TeamScore team='blue' score='0' />
        <span className={ cx('game-data__score-dots') }>:</span>
        <TeamScore team='red' score='0' />
      </div>
    );
  }
}
