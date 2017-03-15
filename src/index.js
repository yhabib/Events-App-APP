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
// import Layout from './components/Layout';
import HeaderContainer from './containers/Header';
import GridViewContainer from './containers/GridView';
import ItemViewContainer from './containers/ItemView';

import './index.css';

injectTapEventPlugin();    // Needed for onTouchTap

const Root = () => (
  <Provider store={ store }>
    <MuiThemeProvider>
      <Router>
        <div>
          <HeaderContainer />
          <Switch>
            {/*<Route path="/view" component={ FilterContainer} />*/}
            <Route path="/events/grid" component={ GridViewContainer } />
            <Route path="/events/:id" component={ ItemViewContainer }/>
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

{/*<HeaderContainer />
      <FilterContainer />
      <GridViewContainer />*/}


ReactDOM.render(
  <Root />,
  document.getElementById('root') 
);
