'use strict';

require('../sass/style.sass');
import React from 'react';
import ReactDOM from 'react-dom';
import PageContent from './components/page-content';

ReactDOM.render(
  <PageContent />,
  // document.querySelector('.page')
  document.getElementById('App')
);
