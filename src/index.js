import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './store';
import Home from './components/Home';
import HeaderContainer from './containers/Header';
import ViewContainer from './containers/View';
import ItemViewContainer from './containers/ItemView';

import './index.css';

injectTapEventPlugin();


const Root = () => (
  <Provider store={ store }>
    <MuiThemeProvider>
      <Router>
        <div style={{width: "100%", height: "100%" }}>
          <Switch>
            <Route exact path="/" component={ Home } />
            <div>
              <HeaderContainer />
              <Route path="/events/grid" component={ ViewContainer } />
              <Route path="/events/list" component={ ViewContainer } />
              <Route path="/events/:id" component={ ItemViewContainer }/>
            </div>
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
);


ReactDOM.render(
  <Root />,
  document.getElementById('root') 
);
