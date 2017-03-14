import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListView from './../../components/ListView';

import { fetchEvents } from './../../store/actions/events';


class ListViewContainer extends Component {

  render() {
    console.log(this.props);
    return <ListView />
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: (data) => dispatch(fetchEvents(data))
});

export default connect(undefined, mapDispatchToProps)(ListViewContainer);


// fetchEvents: function(data) {
//   return dispatch(fn(data));
// }

// fn = function(data) {
//   return function(dispatch) {
//     return 

//   }
// }   