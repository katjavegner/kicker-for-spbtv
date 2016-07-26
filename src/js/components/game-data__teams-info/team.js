import React from 'react';
import TeamsContainer from '../teams-container';
import MainContent from '../main-content';


export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.chooseTeam = this.chooseTeam.bind(this);
  }

  chooseTeam() {
    this.props.onChoose(this.props.team);
  }

  render() {
    const className = 'game-data__team'

    return (
      <a onClick={ this.chooseTeam } type={this.props.team} className={ `${className}  ${className}--${this.props.team}` }>
        { this.props.teamName || 'Выберите команду'}
      </a>
    );
  }
}
