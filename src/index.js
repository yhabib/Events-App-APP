import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { Router, Route, browserHistory } from 'react-router';
// import { Provider } from 'react-redux';
// import Store from './store'


ReactDOM.render(

    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>,

  document.getElementById('root')
);
