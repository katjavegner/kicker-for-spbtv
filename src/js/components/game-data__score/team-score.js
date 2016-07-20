import React from 'react';

export default class TeamScore extends React.Component {

  render() {
    const className = 'game-data__team-score'

    return (
      <div className={ className + '  ' + className + '--' + this.props.team }>
        { this.props.score }
      </div>
    );
  }
}
