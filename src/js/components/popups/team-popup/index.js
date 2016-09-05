import React from 'react';
import cx from 'classnames';
import { browserHistory } from 'react-router';
import FieldRadio from './field-radio';

export default class TeamPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamColor: 'blue',
      teamName: '',
      player1: '',
      player2: ''
    };
  }

  handleCheckRadio = (evt) => {
    this.setState({ teamColor: evt.target.id });
  }

  handleChangeTeamName = (evt) => {
    this.setState({ teamName: evt.target.value });
  }

  handleChangePlayer1 = (evt) => {
    this.setState({ player1: evt.target.value });
  }

  handleChangePlayer2 = (evt) => {
    this.setState({ player2: evt.target.value });
  }

  closePopup = (evt) => {
    if (evt.target.className === 'team-popup__close') {
      browserHistory.goBack();
    }
  }

  render() {
    return (
      <div className={ cx('team-popup') }>
        <button className={ cx('team-popup__close') } onClick={ this.closePopup } type='button' title='Close'>Закрыть</button>
        <form className={ cx('team-form') }>
          <div className={ cx('team-form__choose-color') }>
            <p className={ cx('team-form__choose-text') }>Цвет команды: </p>
            <FieldRadio
              teamColor='blue'
              onRadio={ this.handleCheckRadio }
              labelText='Синий'
              defaultChecked={ (this.state.teamColor === 'blue') ? true : false }
            />
            <FieldRadio
              teamColor='red'
              onRadio={ this.handleCheckRadio }
              labelText='Красный'
              defaultChecked={ (this.state.teamColor === 'red') ? true : false }
            />
          </div>
          <div className={ cx('team-form__field') }>
            <label className={ cx('team-form__field-label') } htmlFor='team-name'>Название команды:</label>
            <input className={ cx('team-form__input') }
              type='text'
              name='team-name'
              placeholder='Введите название вашей команды'
              id='team-name'
              value={ this.state.teamName }
              onChange={ this.handleChangeTeamName }
            />
          </div>
          <div className={ cx('team-form__field') }>
            <label className={ cx('team-form__field-label') } htmlFor='player1'>Игрок:</label>
            <input className={ cx('team-form__input') }
              type='text'
              name='player1'
              placeholder='Введите участника команды'
              id='player1'
              value={ this.state.player1 }
              onChange={ this.handleChangePlayer1 }
            />
          </div>
          <div className={ cx('team-form__field') }>
            <label className={ cx('team-form__field-label') } htmlFor='player2'>Игрок:</label>
            <input className={ cx('team-form__input') }
              type='text'
              name='player2'
              placeholder='Введите участника команды'
              id='player2'
              value={ this.state.player2 }
              onChange={ this.handleChangePlayer2 }
            />
          </div>
          <button className={ cx('team-form__btn') } type='submit' title='button'>Сохранить</button>
        </form>
      </div>
    );
  }
}
