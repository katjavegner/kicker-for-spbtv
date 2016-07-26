import React from 'react';
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
    const chooseMode = !!chooseIn;

    return (
      <div className='teams-container'>
        <TeamsColumn
          teams='blue'
          header='Синие'
          data={ this.state.data }
          disabled={ chooseIn === 'red' }
          chooseMode={ chooseMode }
          onEditCard={ (id) => {  console.log('edit', id) } }
          onDeleteCard={ (id) => {  console.log('delete', id) } }
        />

        <TeamsColumn
          teams='red'
          header='Красные'
          data={ this.state.data }
          disabled={ chooseIn === 'blue' }
          chooseMode={ chooseMode }
          onEditCard={ (id) => {  console.log('edit', id) } }
          onDeleteCard={ (id) => {  console.log('delete', id) } }
        />
      </div>
    );
  }
}
