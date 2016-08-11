import React from 'react';
import cx from 'classnames';

export default class Timer extends React.Component {

  render() {
    return (
      <div className={ cx('game-data__timer') }>
        00 минута 00 секунда
      </div>
    );
  }
}
