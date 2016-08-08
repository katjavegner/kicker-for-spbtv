import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { chooseTeam } from '../../redux/reducers';
import TeamsColumn from './teams-column';

import TeamsJson from '../../../data/teams.json';

class TeamsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: TeamsJson.teams
    }
  }

  handleChooseTeam = (team) => {
    this.props.chooseTeam(team);
    browserHistory.push({ pathname: '/' });
  }

  render() {
    const { chooseIn } = this.props.location.query;
    const mode = chooseIn ? 'select' : 'edit';

    return (
      <div className={ cx('teams-container') }>
        <TeamsColumn
          teams='blue'
          header='Синие'
          data={ this.state.data }
          disabled={ chooseIn === 'red' }
          mode={ mode }
          onSelectCard={ this.handleChooseTeam }
          onDeleteCard={ team => console.log('delete', team) }
          onEditCard={ team => console.log('edit', team) }
        />

        <TeamsColumn
          teams='red'
          header='Красные'
          data={ this.state.data }
          disabled={ chooseIn === 'blue' }
          mode={ mode }
          onSelectCard={ this.handleChooseTeam }
          onDeleteCard={ team => console.log('delete', team) }
          onEditCard={ team => console.log('edit', team) }
        />
      </div>
    );
  }
}

const mapDispatchToProps = { chooseTeam };
const TeamsContainerConnected = connect(null, mapDispatchToProps)(TeamsContainer);

export default TeamsContainerConnected;
