import React from 'react';
import cx from 'classnames';

export default class TeamsColumn extends React.Component {

  constructor(props) {
    super(props);
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleEditClick(id) {
    this.props.onEditCard(id);
  }

  handleDeleteClick(id) {
    this.props.onDeleteCard(id);
  }

  getSortingTeams() {
    let teams = this.props.data.slice();

    return teams.filter((team) => {
      return team.teamColor === this.props.teams;
    });
  }

  handleCardClick() {
    const { mode } = this.props;

    if (mode === 'select') {
      return this.props.onChoose();
    }
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
        type='button' name='Delete'>
          Удалить
      </button>
    );
  }

  renderEditButton(team) {
    const handleClick = this.handleEditClick.bind(this, team.id);

    return (
      <button className={ cx('team-card__edit') }
        onClick={ handleClick }
        type='button' name='Edit'>
          Редактировать
      </button>
    );
  }

  render() {
    let sortedTeams = this.getSortingTeams();
    const classNameCard = cx('team-card', { 'team-card--disable': this.props.disabled });
    const classNameHeader = cx(
      'teams-column__header',
      `teams-column__header--${this.props.teams}`,
      { 'teams-column__header--disable': this.props.disabled }
    );
    const mode = (!this.props.chooseMode && !this.props.disabled) ? 'edit' : null

    const teamCard = sortedTeams.map((team) => {
      return (
        <div className={ classNameCard } key={ team.id }>
          { this.renderCardBody(team) }
          { mode === 'edit' ? this.renderDeleteButton(team) : null }
          { mode === 'edit' ? this.renderEditButton(team) : null }
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
