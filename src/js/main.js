'use strict';

require('../sass/style.sass');
import React from 'react';
import ReactDOM from 'react-dom';
import PageContent from './components/page-content';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import SidebarGame from './components/sidebars/sidebar-game';
import SidebarTeams from './components/sidebars/sidebar-teams';
import GameData from './components/game-data';
import ResultsTable from './components/results-table';



ReactDOM.render(
  // <PageContent />,
  <Router history={ browserHistory }>
    <Route path='/' component={ PageContent }>
      <IndexRoute header='Новая игра'  components={{ content: GameData, sidebar: SidebarGame }} />
      <Route path='teams' header='Команды'  components={{ content: GameData, sidebar: SidebarTeams }}>

      </Route>
      <Route path='results' header='Результаты игр' components={{ content: ResultsTable }}>

      </Route>
    </Route>
  </Router>,
  document.getElementById('App')
  // document.querySelector('.page')
);
