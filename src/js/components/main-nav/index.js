import React from 'react';
import {Link} from 'react-router';

export default class MainNav extends React.Component {

  isIndexActive(path) {
    if (path.match(/\/teams($|\/)/) || path.match(/\/results($|\/)/)) {
      return false;
    }
    return true;
  }

  render() {
    const className = 'main-nav__item';
    const activeClassName = 'main-nav__item--active';
    const indexActive = this.isIndexActive(this.props.path);

    return (
      <div className='main-nav'>
        <Link to='/' className={ `${className}  ${className}--game` }
          activeClassName={ indexActive ? activeClassName : '' } title='Game page' />
        <Link to='/teams' className={ `${className}  ${className}--teams` }
          activeClassName={ activeClassName } title='Teams page' />
        <Link to='/results' className={ `${className}  ${className}--statistic` }
          activeClassName={ activeClassName } title='Statistic page' />
      </div>
    );
  }
}
