import React from 'react';

export default class SidebarTeams extends React.Component {

  render() {
    const className = 'sidebar__item';

    return (
      <div>
        <button className={ `${className}  ${className}--create-team` } title='Create team' />
      </div>
    );
  }
}
