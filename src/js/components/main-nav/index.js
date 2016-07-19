import React from 'react';
import MainNavItem from './item';

export default class MainNav extends React.Component {

  render() {
    return (
      <div className='main-nav'>
        <MainNavItem type='game' title='Game page' />
        <MainNavItem type='team' title='Team page' />
        <MainNavItem type='statistic' title='Statistic page' />
      </div>
    );
  }
}
