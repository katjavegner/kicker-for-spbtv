'use strict';

require('../sass/style.sass');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import PageContent from './components/page-content';
import SidebarGame from './components/sidebars/sidebar-game';
import SidebarTeams from './components/sidebars/sidebar-teams';
import GameData from './components/game-data';
import ResultsTable from './components/results-table';
import TeamsContainer from './components/teams-container';
import store from './redux/store';

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ PageContent }>
        <IndexRoute header='Новая игра'  components={{ content: GameData, sidebar: SidebarGame }} />
        <Route path='teams' header='Команды'  components={{ content: TeamsContainer, sidebar: SidebarTeams }} />
        <Route path='results' header='Результаты игр' components={{ content: ResultsTable }} />
        <Route path='choose' header='Выбор команды' components={{ content: TeamsContainer }} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('App')
  // document.querySelector('.page')
);
