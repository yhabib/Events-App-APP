import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BASE_URL } from './../../store/constants';
import Filter from './../../components/Filter';

import { setFilter  } from './../../store/actions/filter';

class FilterContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      states: [],
      cities: [],
      stateValue: 0,
      cityValue: 0
    };
  }

  handleChangeState = (e, value) => {
    this.setState({ stateValue: value });    
    const url = `${BASE_URL}/locations/states/${this.state.states[value]}/cities`;
    
    fetch(url)
      .then(data => data.json())
      .then(cities => this.setState({ cities: [...new Set(cities)] }));
  }

  handleChangeCity = (e, value) => {    
    this.setState({ cityValue: value });
    const url = `${BASE_URL}/locations/states/${this.state.states[value]}/cities`;
    fetch(url)
      .then(data => data.json())
      .then(cities => this.setState({ cities: [...new Set(cities)] }));

  }

  submitFilter = () => {
    const state = this.state.states[this.state.stateValue];
    const city = this.state.cities[this.state.cityValue];    
    this.props.setFilter({state, city});
  };

  componentDidMount() {
    const url = `${BASE_URL}/locations/states`;
    fetch(url)
      .then(data => data.json())
      .then(states => this.setState({ states: [...new Set(states)] }));
  }

  render() {
    return <Filter
      stateValue={ this.state.stateValue }
      cityValue={ this.state.cityValue }
      states={ this.state.states }
      cities={ this.state.cities }
      onChangeState={ this.handleChangeState }
      onChangeCity={ this.handleChangeCity }
      onClick={ this.submitFilter } />
  }
}

const mapDispatchToProps = (dispatch) => ({
  setFilter: filter => dispatch(setFilter(filter))
});

export default connect(undefined, mapDispatchToProps)(FilterContainer);