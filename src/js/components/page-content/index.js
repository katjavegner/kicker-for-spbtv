import React from 'react';
import MainNav from '../main-nav';
import MainContent from '../main-content';
import BtnBar from '../btn-bar';

export default class PageContent extends React.Component {
  render() {
    return (
      <main className='page-content'>
        <MainNav />
        <MainContent text='Новая игра'/>
        <BtnBar />
      </main>
    );
  }
}
