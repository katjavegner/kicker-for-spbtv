import React from 'react';

export default class TeamsColumn extends React.Component {

  getSortingTeams() {
    let teams = this.props.data.slice();

    switch (this.props.teams) {
      case 'blue':
        return teams.filter(function(team) {
          return team.teamColor === 'blue';
        });
        break;
      case 'red':
        return teams.filter(function(team) {
          return team.teamColor === 'red';
        });
        break;
    }
  }

  render() {
    const className = 'team-card';
    const classNameHeader = 'teams-column__header';
    let sortedTeams = this.getSortingTeams();


    if (this.props.disabled) {
      let teamCardDisabled = sortedTeams.map(function(team) {
        return (
          <a className={`${className}  ${className}--disable`} key={team.id}>
            <h3 className={`${className}__team-name  ${className}__team-name--${team.teamColor}`}>{team.teamName}</h3>
            <p className={`${className}__player-field`}>Игрок: <span className={`${className}__player-name`}>{team.player1 || '-'}</span></p>
            <p className={`${className}__player-field`}>Игрок: <span className={`${className}__player-name`}>{team.player2 || '-'}</span></p>
            <button className={`${className}__delete  ${className}__delete--invisible`} type='button' name='Delete'>Удалить</button>
          </a>
        );
      });

      return (
        <div className='teams-column'>
          <h2 className={ `${classNameHeader}  ${classNameHeader}--${this.props.teams}` }>
            { this.props.header }
          </h2>
          { teamCardDisabled }
        </div>
      )
    }

    let teamCard = sortedTeams.map(function(team) {
      return (
        <a className={className} key={team.id}>
          <h3 className={`${className}__team-name  ${className}__team-name--${team.teamColor}`}>{team.teamName}</h3>
          <p className={`${className}__player-field`}>Игрок: <span className={`${className}__player-name`}>{team.player1 || '-'}</span></p>
          <p className={`${className}__player-field`}>Игрок: <span className={`${className}__player-name`}>{team.player2 || '-'}</span></p>
          <button className={`${className}__delete`} type='button' name='Delete'>Удалить</button>
        </a>
      );
    });

    return (
      <div className='teams-column'>
        <h2 className={ `${classNameHeader}  ${classNameHeader}--${this.props.teams}` }>
          { this.props.header }
        </h2>
        { teamCard }
      </div>
    );
  }
}
