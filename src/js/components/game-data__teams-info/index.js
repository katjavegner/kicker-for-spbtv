import React from 'react';
import { browserHistory } from 'react-router';
import Team from './team';
import ScoreContainer from '../game-data__score';

export default class TeamsInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChoose = this.handleChoose.bind(this);
  }

  handleChoose(teamsColor) {
    browserHistory.push({ pathname: '/choose', query: { chooseIn: teamsColor } });
  }

  render() {
    return (
      <div className='game-data__teams-info'>
        <Team team='blue' onChoose={ this.handleChoose } />
        <ScoreContainer />
        <Team team='red' onChoose={ this.handleChoose } />
      </div>
    );
  }
}
