import React from 'react';
import TeamsColumn from './teams-column';

import TeamsJson from '../../../data/teams.json';

export default class TeamsContainer extends React.Component {

  render() {
    let data = TeamsJson.teams;

    if (this.props.disabled) {
      switch (this.props.disabled) {
        case 'disable-blue':
          return (
            <div className='teams-container'>
              <TeamsColumn data={data} teams='blue' header='Синие' disabled />
              <TeamsColumn data={data} teams='red' header='Красные' />
            </div>
          );
          break;
        case 'disable-red':
          return (
            <div className='teams-container'>
              <TeamsColumn data={data} teams='blue' header='Синие' />
              <TeamsColumn data={data} teams='red' header='Красные' disabled />
            </div>
          );
          break;
      }
    }

    return (
      <div className='teams-container'>
        <TeamsColumn data={data} teams='blue' header='Синие' />
        <TeamsColumn data={data} teams='red' header='Красные' />
      </div>
    );
  }
}
