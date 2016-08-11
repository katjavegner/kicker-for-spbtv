import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import cx from 'classnames';
import Team from './team';
import ScoreContainer from '../score';

class TeamsInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChoose = (teamsColor) => {
    browserHistory.push({ pathname: '/choose', query: { chooseIn: teamsColor } });
  }

  render() {
    const team = this.props.choosedTeam;

    return (
      <div className={ cx('game-data__teams-info') }>
        <Team team='blue' teamData={ team.blue } onChoose={ this.handleChoose } />
        <ScoreContainer />
        <Team team='red' teamData={ team.red } onChoose={ this.handleChoose } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    choosedTeam: state.teams.choosed
  }
}

const TeamsInfoConnected = connect(mapStateToProps)(TeamsInfo);

export default TeamsInfoConnected;
