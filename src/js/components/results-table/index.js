import React from 'react';
import TableRow from './table-row';
import TableHeader from './table-header';

import TeamsJson from '../../../data/teams.json';

export default class ResultsTable extends React.Component {

  render() {
    let data = TeamsJson.teams;

    return (
      <div className='results-data'>
        <table className='data-table'>
          <TableHeader />
          <TableRow data={data} />
        </table>
      </div>
    );
  }
}
