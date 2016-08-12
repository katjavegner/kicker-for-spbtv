import React from 'react';
import cx from 'classnames';
import MainNav from '../main-nav';
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

  skrollFix = () => {
    const doc = document.documentElement;
    const app = document.getElementById('App');
    let thereIsScroll = (window.innerWidth !== doc.clientWidth) ? true : false;
    return thereIsScroll ? app.classList.remove('page--scrollfix') : app.classList.add('page--scrollfix');
  }

  componentDidMount() {
    this.skrollFix();
  }
  componentDidUpdate() {
    this.skrollFix();
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
