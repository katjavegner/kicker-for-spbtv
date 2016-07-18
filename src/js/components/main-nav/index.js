import React from 'react';

export default class MainNav extends React.Component {
  constructor() {
    super();
    this.check = this.check.bind(this);
  }

  check(evt) {
    console.dir(evt.target);
  }

  render() {
    let className = 'main-nav__item';
    let classNameGame = `${className}--game`;
    let classNameTeam = `${className}--team`;
    let classNameStatistic = `${className}--statistic`;

    return (
      <div className='main-nav'>
        <MainNavItem onClick={this.check} type='game'/>
        <MainNavItem type='team'/>
        <MainNavItem type='statistic'/>
      </div>
    )
  }
}

class MainNavItem extends React.Component {
  render() {
    let className = 'main-nav__item';

    return (
      <a className={ className + '  ' + className + '--' + this.props.type } title={ this.props.type + ' page' }/>
    )
  }
}
