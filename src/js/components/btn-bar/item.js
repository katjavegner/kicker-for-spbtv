import React from 'react';

export default class BtnBarItem extends React.Component {

  render() {
    let className = 'btn-bar__item';

    return (
      <a className={ className + '  ' + className + '--' + this.props.type } title={ this.props.title }/>
    );
  }
}
