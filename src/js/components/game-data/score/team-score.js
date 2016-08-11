import React from 'react';
import cx from 'classnames';

export default class TeamScore extends React.Component {

  render() {
    return (
      <div className={ cx('game-data__team-score', `game-data__team-score--${this.props.team}`) }>
        { this.props.score }
      </div>
    );
  }
}
