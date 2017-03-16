import React, { Component } from 'react';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

import './index.css'

const style = {
  margin: 12,
};
class Filter extends Component {
  state = {
    dataSource: [],
    controlledDate: null,
  };

  render() {
    console.log('rendering filter');
    
    return (
      <div className="FilterContainer">
        <div className="Filter">
          <DropDownMenu 
            className="Item" 
            value={ this.props.stateValue } 
            onChange={ this.props.onChangeState }>
            {
              this.props.states.map((state, i) => 
                <MenuItem key={i} value={i} primaryText={state} />)
            }
          </DropDownMenu>
          <DropDownMenu 
            className="Item" 
            value={ this.props.cityValue } 
            onChange={ this.props.onChangeCity }>
            {
              this.props.cities.map((city, i) => 
                <MenuItem key={i} value={i} primaryText={city} />)
            }
          </DropDownMenu>
          <DatePicker className="Date"
            hintText="Controlled Date Input"
            value={this.state.controlledDate}
            onChange={this.handleChange} />
          <RaisedButton className="SearchButton" label="Search" 
            primary={true} style={style} onClick={ this.props.onClick } />
        </div>
      </div>
    );
  }
}
export default Filter;
