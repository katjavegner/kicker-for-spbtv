import React from 'react';
import cx from 'classnames';

export default class FieldRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.props.onRadio();
  }

  handleChangeTeamColor = (evt) => {
    this.props.onRadio(evt);
  }

  render() {
    return (
      <div className={ cx('team-form__field-radio') }>
        <input
          className={ cx('team-form__radio') }
          type='radio'
          name='team-color'
          id={ this.props.teamColor }
          defaultChecked={ this.props.defaultChecked }
          onChange={ this.handleChangeTeamColor }
        />
        <label
          className={ cx('team-form__radio-label', `team-form__radio-label--${this.props.teamColor}`) }
          htmlFor={ this.props.teamColor }>
          { this.props.labelText }
        </label>
      </div>
    );
  }
}
