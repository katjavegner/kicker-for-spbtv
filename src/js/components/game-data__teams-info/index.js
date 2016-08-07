import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import cx from 'classnames';
import store from '../../redux/store';
import Team from './team';
import ScoreContainer from '../game-data__score';

class TeamsInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChoose = this.handleChoose.bind(this);
  }

  handleChoose(teamsColor) {
    browserHistory.push({ pathname: '/choose', query: { chooseIn: teamsColor } });
  }

  render() {
    const team = store.getState().teams.choosed;

    return (
      <div className={ cx('game-data__teams-info') }>
        <Team team='blue' teamData={ team.Blue } onChoose={ this.handleChoose } />
        <ScoreContainer />
        <Team team='red' teamData={ team.Red } onChoose={ this.handleChoose } />
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
