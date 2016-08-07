import React from 'react';
import cx from 'classnames';
import TeamsColumn from './teams-column';

import TeamsJson from '../../../data/teams.json';

export default class TeamsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: TeamsJson.teams
    }
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
          onSelectCard={team => console.log('select', team.teamName)}
          onEditCard={team => console.log('edit', team)}
          onDeleteCard={team => console.log('delete', team)}
        />

        <TeamsColumn
          teams='red'
          header='Красные'
          data={ this.state.data }
          disabled={ chooseIn === 'blue' }
          mode={ mode }
          onSelectCard={team => console.log('select', team.teamName)}
          onEditCard={team => console.log('edit', team)}
          onDeleteCard={team => console.log('delete', team)}
        />
      </div>
    );
  }
}
