import React from 'react';
import Header from '../main-content__header';

export default class MainContent extends React.Component {

  render() {
    return (
      <div className='main-content'>
        <Header>{ this.props.header }</Header>
        { this.props.content }
      </div>
    );
  }
}
