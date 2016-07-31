import React from 'react';
import cx from 'classnames';

export default class TeamsColumn extends React.Component {

  constructor(props) {
    super(props);
  }

  handleEditClick(id) {
    this.props.onEditCard(id);
  }

  handleDeleteClick(id) {
    this.props.onDeleteCard(id);
  }

  handleCardClick(id) {
    this.props.onSelectCard(id);
  }

  getSortingTeams() {
    let teams = this.props.data.slice();

    return teams.filter((team) => {
      return team.teamColor === this.props.teams;
    });
  }

  renderCardBody(team) {
    return (
      <a className={ 'team-card__link' }>
        <h3 className={ cx(
          `team-card__team-name`,
          `team-card__team-name--${team.teamColor}`
        )}>
          { team.teamName }
        </h3>
        <p className='team-card__player-field' >
          Игрок: <span className='team-card__player-name'>{ team.player1 || '-' }</span>
        </p>
        <p className='team-card__player-field' >
          Игрок: <span className='team-card__player-name'>{ team.player2 || '-' }</span>
        </p>
      </a>
    );
  }

  renderDeleteButton(team) {
    const handleClick = this.handleDeleteClick.bind(this, team.id);

    return (
      <button className={ cx('team-card__delete') }
        onClick={ handleClick }
        type='button'
        name='Delete'>
          Удалить
      </button>
    );
  }

  renderEditButton(team) {
    const handleClick = this.handleEditClick.bind(this, team.id);

    return (
      <button className={ cx('team-card__edit') }
        onClick={ handleClick }
        type='button'
        name='Edit'>
          Редактировать
      </button>
    );
  }

  render() {
    const { mode, disabled } = this.props;
    let sortedTeams = this.getSortingTeams();

    const classNameCard = cx('team-card', {
      'team-card--disable': disabled,
      'team-card--selectable': mode === 'select' && !disabled
    });
    const classNameHeader = cx(
      'teams-column__header',
      `teams-column__header--${this.props.teams}`,
      { 'teams-column__header--disable': disabled }
    );

    const teamCard = sortedTeams.map((team) => {
      const handleClick = mode === 'select' && !disabled ?
        this.handleCardClick.bind(this, team.id) : null;

      return (
        <div className={ classNameCard } key={ team.id } onClick={ handleClick }>
          { this.renderCardBody(team) }
          { mode === 'edit' && !disabled ? this.renderDeleteButton(team) : null }
          { mode === 'edit' && !disabled ? this.renderEditButton(team) : null }
        </div>
      );
    });

    return (
      <div className={'teams-column'}>
        <h2 className={ classNameHeader }>
          { this.props.header }
        </h2>
        { teamCard }
      </div>
    );
  }
}
