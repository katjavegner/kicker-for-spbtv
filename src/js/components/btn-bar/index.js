import React from 'react';
import BtnBarItem from './item';

export default class BtnBar extends React.Component {

  render() {
    return (
      <div className='btn-bar'>
        <BtnBarItem type='new-game' title='New game' />
        <BtnBarItem type='reset' title='Reset game' />
        <BtnBarItem type='cancel' title='Cancel goal' />
      </div>
    );
  }
}
