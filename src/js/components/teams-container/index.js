import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { chooseTeam, fetchTeams } from '../../redux/reducers';
import TeamsColumn from './teams-column';

import TeamsJson from '../../../data/teams.json';

class TeamsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: TeamsJson.teams
    }
  }

  componentDidMount() {
    this.props.fetchTeams()
  }

  handleChooseTeam = (team) => {
    this.props.chooseTeam(team);
    browserHistory.push({ pathname: '/' });
  }

  handleDeleteTeam = (team) => {
    console.log('delete', team);
    return fetch('http://localhost:3000/commands', {
      method: 'POST',
      body: encodeURIComponent(JSON.stringify({ foo: 1 }))
    })
    .then(function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +  response.status);
        return;
      }
      response.json()
      .then(function(data) {
        console.log(data);
      })
    })
    .catch(function(err) {
      console.log('Fetch Error: ', err);
    });
  }

  handleEditTeam = (team) => {
    browserHistory.push({ pathname: `/teams/edit/${team.id}` });
  }

  renderContent() {
    if (this.props.teams.isFetching) {
      return <Loader />;
    }

    return (
      <TeamsColumn
        teams='blue'
        header='Синие'
        data={ this.state.data }
        disabled={ chooseIn === 'red' }
        mode={ mode }
        onSelectCard={ this.handleChooseTeam }
        onDeleteCard={ this.handleDeleteTeam }
        onEditCard={ this.handleEditTeam }
      />

      <TeamsColumn
        teams='red'
        header='Красные'
        data={ this.state.data }
        disabled={ chooseIn === 'blue' }
        mode={ mode }
        onSelectCard={ this.handleChooseTeam }
        onDeleteCard={ this.handleDeleteTeam }
        onEditCard={ this.handleEditTeam }
      />
    )
  }

  render() {
    const { chooseIn } = this.props.location.query;
    const mode = chooseIn ? 'select' : 'edit';

    return (
      <div className={ cx('teams-container') }>
        { this.renderContent() }
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  teams: (state) => state.teams
})

const mapDispatchToProps = { chooseTeam, fetchTeams };
const TeamsContainerConnected = connect(mapStateToProps, mapDispatchToProps)(TeamsContainer);

export default TeamsContainerConnected;
