import React from 'react';
import Header from '../main-content__header';

export default class MainContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { header } = this.props.content.props.route;

    return (
      <div className='main-content'>
        <Header>{ header }</Header>
        { this.props.content }
      </div>
    );
  }
}
