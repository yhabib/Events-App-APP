import React, { Component } from 'react';

import Header from './../../components/Header';
import { BASE_URL } from './../../store/constants';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfEvents: 0
    };
  } 

  componentDidMount() {
    const url = `${BASE_URL}/events/count`;
    fetch(url)
      .then(data => data.json())
      .then(count => this.setState({ numberOfEvents: count }));
  }

  render() {
    return <Header numberOfEvents={ this.state.numberOfEvents }/>
  }
}

export default HeaderContainer;