import React from 'react';

export default class MainNavItem extends React.Component {
  
  render() {
    let className = 'main-nav__item';

    return (
      <a className={ className + '  ' + className + '--' + this.props.type } title={ this.props.title }/>
    );
  }
}
