import React from 'react';
import cx from 'classnames';
import { browserHistory } from 'react-router';
import FieldRadio from './field-radio';

export default class TeamPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleCheckRadio = () => {
    console.log('click on radio');
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
              defaultChecked
            />
            <FieldRadio
              teamColor='red'
              onRadio={ this.handleCheckRadio }
              labelText='Красный'
            />
          </div>
          <div className={ cx('team-form__field') }>
            <label className={ cx('team-form__field-label') } htmlFor='team-name'>Название команды:</label>
            <input className={ cx('team-form__input') } type='text'
            name='team-name' placeholder='Введите название вашей команды' id='team-name' />
          </div>
          <div className={ cx('team-form__field') }>
            <label className={ cx('team-form__field-label') } htmlFor='player-1'>Игрок:</label>
            <input className={ cx('team-form__input') } type='text'
            name='player-1' placeholder='Введите участника команды' id='player-1' />
          </div>
          <div className={ cx('team-form__field') }>
            <label className={ cx('team-form__field-label') } htmlFor='player-2'>Игрок:</label>
            <input className={ cx('team-form__input') } type='text'
            name='player-2' placeholder='Введите участника команды' id='player-2' />
          </div>
          <button className={ cx('team-form__btn') } type='submit' title='button'>Сохранить</button>
        </form>
      </div>
    );
  }
}
