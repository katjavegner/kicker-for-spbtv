import React from 'react';
import TableRow from './table-row';
import TableHeader from './table-header';

import TeamsJson from '../../../data/teams.json';

export default class ResultsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: TeamsJson.teams
    }
  }

  render() {
    let { data } = this.state;

    return (
      <div className='results-data'>
        <table className='data-table'>
          <TableHeader />
          <TableRow data={ data } />
        </table>
      </div>
    );
  }
}
