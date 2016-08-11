import React from 'react';
import cx from 'classnames';
import { browserHistory } from 'react-router';

export default class SidebarTeams extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCreateClick = () => {
    browserHistory.push({ pathname: `/teams/create` });
  }

  render() {
    return (
      <div>
        <button
          className={ cx('sidebar__item', 'sidebar__item--create-team') }
          title='Create team'
          onClick={ this.handleCreateClick }
        />
      </div>
    );
  }
}
