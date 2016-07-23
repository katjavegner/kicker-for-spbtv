import React from 'react';
import ReactDOM from 'react-dom';
import TeamsContainer from '../teams-container';
// import Header from '../main-content__header';
import MainContent from '../main-content';


export default class Team extends React.Component {

  chooseTeam(evt) {
    switch (evt.target.type) {
      case 'blue':
        console.log('blue');
        // ReactDOM.render(
        //   <MainContent header={'Выберите команду'} content={<TeamsContainer disabled='disable-red'/>} />,
        //   document.querySelector('.page-content')
        // );
        break;
      case 'red':
        console.log('red');
        break;

    }
  }

  render() {
    const className = 'game-data__team'

    return (
      <a onClick={ this.chooseTeam } type={this.props.team} className={ `${className}  ${className}--${this.props.team}` }>
        { this.props.teamName }
      </a>
    );
  }
}
