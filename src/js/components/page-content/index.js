import React from 'react';
import MainNav from '../main-nav';
import Header from '../main-content__header';
import MainContent from '../main-content';

export default class PageContent extends React.Component {

  render() {
    const header = this.props.routes[1].header || '';
    const content = this.props.content;
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
        <MainNav path={ this.props.location.pathname } />
        <MainContent header={header} content={content} />
        { sidebar }
      </main>
    );
  }
}
