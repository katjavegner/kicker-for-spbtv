import React from 'react';
import MainNav from '../main-nav';
import Header from '../main-content__header';

export default class PageContent extends React.Component {

  render() {
    const header = this.props.routes[1].header || '';
    let sidebar;
    if (this.props.sidebar) {
      sidebar = (
        <div className='sidebar'>
          { this.props.sidebar }
        </div>
      );
    }

    return (
      <main className='page-content'>
        <MainNav />
        <div className='main-content'>
          <Header>{ header }</Header>
          { this.props.content }
        </div>
        { sidebar }
      </main>
    );
  }
}
