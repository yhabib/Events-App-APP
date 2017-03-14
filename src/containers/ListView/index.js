import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListView from './../../components/ListView';

import { fetchEvents } from './../../store/actions/events';


class ListViewContainer extends Component {

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return <ListView events={ this.props.events } />
  }
}



const mapStateToProps = (state) => ({
  events: state.events
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: (data) => dispatch(fetchEvents(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListViewContainer);