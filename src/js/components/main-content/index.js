import React, {Component} from 'react';

export default class MainContent extends React.Component {
  render() {
    return (
      <div className='main-content'>
        <h1 className='main-content__header'>{this.props.text}</h1>

      </div>
    );
  }
}
