import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './store';
import Layout from './components/Layout';

import './index.css';

injectTapEventPlugin();    // Needed for onTouchTap

const Root = () => (
  <Provider store={ store }>
    <MuiThemeProvider>
      <Router>
        <Route exact path="" component={ Layout } />
      </Router>
    </MuiThemeProvider>
  </Provider>
);


ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
