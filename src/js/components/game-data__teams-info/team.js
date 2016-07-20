import React from 'react';

export default class Team extends React.Component {

  render() {
    const className = 'game-data__team'

    return (
      <a className={ className + '  ' + className + '--' + this.props.team }>
        { this.props.teamName }
      </a>
    );
  }
}
