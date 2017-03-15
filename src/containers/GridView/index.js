import React, { Component } from 'react';
import { connect } from 'react-redux';

import GridView from './../../components/GridView';

import { fetchEvents } from './../../store/actions/events';


class ListViewContainer extends Component {

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return <GridView events={ this.props.events } />
  }
}



const mapStateToProps = (state) => ({
  events: state.events
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: (data) => dispatch(fetchEvents(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListViewContainer);