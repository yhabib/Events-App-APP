import React, { Component } from 'react';

import Header from './../../components/Header';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfEvents: 0
    };
  } 

  componentDidMount() {
    
  }

  render() {
    return <Header numberOfEvents={ this.state.numberOfEvents }/>
  }
}

export default HeaderContainer;