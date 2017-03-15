import React, { Component } from 'react';

import { connect } from 'react-redux';

import ItemView from './../../components/ItemView';

import { fetchEvent } from './../../store/actions/currentEvent';


class ItemViewContainer extends Component {

  componentDidMount() {
    this.props.setCurrentEvent(Number(this.props.match.params.id));
  }

  render() {    
    return <ItemView event={ this.props.currentEvent }/>
  }
}

const mapStateToProps = (state) => ({
  currentEvent: state.currentEvent
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentEvent: (data) => dispatch(fetchEvent(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemViewContainer);