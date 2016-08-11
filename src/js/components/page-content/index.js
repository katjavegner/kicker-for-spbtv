import React from 'react';
import cx from 'classnames';
import MainNav from '../main-nav';
import Header from '../main-content/header';
import MainContent from '../main-content';
import { browserHistory } from 'react-router';

export default class PageContent extends React.Component {
  constructor(props) {
    super(props)
  }

  closeOverlay = (evt) => {
    if (evt.target.className === 'popup-overlay') {
      browserHistory.goBack();
    }
  }

  render() {
    const { pathname } = this.props.location;
    const { content } = this.props;

    let sidebar;
    if (this.props.sidebar) {
      sidebar = (
        <div className={ cx('sidebar') }>
          { this.props.sidebar }
        </div>
      );
    }

    let popup;
    if (this.props.popup) {
      popup = (
        <div onClick={ this.closeOverlay } className={ cx('popup-overlay')}>
          { this.props.popup }
        </div>
      );
    }

    return (
      <main className={ cx('page-content') }>
        <MainNav path={ pathname } />
        <MainContent content={ content } />
        { sidebar }
        { popup }
      </main>
    );
  }
}
