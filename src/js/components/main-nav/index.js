import React from 'react';
// import {Link} from 'react-router';
import {IndexLink} from 'react-router';

export default class MainNav extends React.Component {

  render() {
    const className = 'main-nav__item';
    const activeClassName = 'main-nav__item--active'

    return (
      <div className='main-nav'>
        <IndexLink to='/' className={ className + '  ' + className + '--game' }
          activeClassName={ activeClassName } title='Game page' />
        <IndexLink to='/teams' className={ className + '  ' + className + '--teams' }
          activeClassName={ activeClassName } title='Teams page' />
        <IndexLink to='/results' className={ className + '  ' + className + '--statistic' }
          activeClassName={ activeClassName } title='Statistic page' />
      </div>
    );
  }
}
