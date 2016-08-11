import React from 'react';
import cx from 'classnames';

export default class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  chooseTeam = () => {
    this.props.onChoose(this.props.team);
  }

  render() {
    return (
      <a
        onClick={ this.chooseTeam }
        type={ this.props.team }
        className={ cx(`game-data__team`, `game-data__team--${this.props.team}`
      )}>
        { this.props.teamData ? this.props.teamData.teamName : 'Выберите команду' }
      </a>
    );
  }
}
