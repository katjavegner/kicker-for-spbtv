import React from 'react';

export default class TableRow extends React.Component {

  isDecrease(i, ii) { // По убыванию
    if (i.wins > ii.wins)
    return -1;
    else if (i.wins < ii.wins)
    return 1;
    else if (i.wins === ii.wins) {
      if ((i.goals - i.misses) > (ii.goals - ii.misses))
      return -1;
      else if ((i.goals - i.misses) < (ii.goals - ii.misses))
      return 1;
    }
    else
    return 0;
  }

  setSorting() {
    let teams = this.props.data.slice();
    return teams.sort(this.isDecrease);
  }

  render() {
    const className = 'data-table__cell';
    const classNameTeam = 'data-table__cell--team';
    let sortedTeams = this.setSorting();
    let counter = 0

    let tableRow = sortedTeams.map(function(team) {
      counter++;
      return (
        <tr className='data-table__row' key={ team.id }>
          <td className={ className }>{ counter }</td>
          <td className={ className + '  ' + classNameTeam + '  ' + className + '--' + team.teamColor }>{ team.teamName }</td>
          <td className={ className }>{ team.games }</td>
          <td className={ className }>{ team.wins }</td>
          <td className={ className }>{ team.losses }</td>
          <td className={ className }>{ team.goals }:{ team.misses }</td>
        </tr>
      );
    });

    return (
      <tbody>
        { tableRow }
      </tbody>
    );
  }
}
