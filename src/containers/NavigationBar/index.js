import React, { Component } from 'react';

import { connect } from 'react-redux';

import NavigationBar from './../../components/NavigationBar';


class NavigationBarContainer extends Component {

  render() {
    return <NavigationBar />
  }
}

const mapStateToProps = (state) => ({
  currentView: state.currentView
});

export default connect(mapStateToProps)(NavigationBarContainer);