import React, { Component } from 'react';
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
    console.log(this.props);
    
    return (
      <div>
        <FilterContainer />
        <NavigationBarContainer />
        {
          this.props.location.pathname.split('/').includes('list') ?
            <GridView events={ this.props.events } /> :
            <ListView events={ this.props.events } />
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  events: state.events
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: (data) => dispatch(fetchEvents(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);