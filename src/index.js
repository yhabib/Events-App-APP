import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import Store from './store'
import App from './components/App';

import './index.css';

const Root = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
