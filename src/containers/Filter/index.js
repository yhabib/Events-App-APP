import React, { Component } from 'react';

import { BASE_URL } from './../../store/constants';
import Filter from './../../components/Filter';

class FilterContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      states: [],
      cities: [],
      value: 0
    };
  }

    handleChange = (e, value) => {
      this.setState({ value });
      const url = `${BASE_URL}/locations/states/${this.state.states[value]}/cities`;
      fetch(url)
        .then(data => data.json())
        .then(cities => this.setState({ cities: [...new Set(cities)] }));

    }

  componentDidMount() {
    const url = `${BASE_URL}/locations/states`;
    fetch(url)
      .then(data => data.json())
      .then(states => this.setState({ states: [...new Set(states)] }));
  }

  render() {
    return <Filter 
            value={ this.state.value } 
            states={ this.state.states }
            cities={ this.state.cities }
            onChangeValue={ this.handleChange } />;
  }
}


export default FilterContainer;