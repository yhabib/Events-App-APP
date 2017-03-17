import React, { Component } from 'react';
import {  
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { connect } from 'react-redux';

import GridView from './../../components/GridView';
import ListView from './../../components/ListView';
import FilterContainer from './../Filter';
import NavigationBarContainer from './../NavigationBar';

import { fetchEvents } from './../../store/actions/events';


class ViewContainer extends Component {

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <Router>
        <div>
          <FilterContainer />
          <NavigationBarContainer />
          <Switch>
              <Route path="/events/grid" component={GridView} />
              <Route path="/events/list" component={ListView} />
          </Switch>
        </div>
      </Router>
    )
  }
}
          
const mapStateToProps = (state) => {
  const stateFilter = state.filter.state;
  const cityFilter = state.filter.city;
  
  const events = state.events.filter(event => {
    const location = event.location;
    if(stateFilter && !cityFilter) 
      return location.state === stateFilter 
  
    else if(cityFilter) 
      return location.city === cityFilter;

    else return true;
  });
  
  return ({
    events: events
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: (data) => dispatch(fetchEvents(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);