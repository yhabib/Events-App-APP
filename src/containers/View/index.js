import React, { Component } from 'react';
import { connect } from 'react-redux';

import GridView from './../../components/GridView';
import ListView from './../../components/ListView';
import FilterContainer from './../Filter';

import { fetchEvents } from './../../store/actions/events';


class ViewContainer extends Component {

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <div>
        <FilterContainer />
        {/*<GridView events={ this.props.events } />*/}
        <ListView events={ this.props.events } />
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