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

  render() {
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
            value={{value: 1}}
            onChange={this.handleChange} />
          <RaisedButton className="SearchButton" label="Search" 
            primary={true} style={style} onClick={ this.props.onClick } />
        </div>
        <div className="Filter_Display">
          {
            Object.keys(this.props.filter).length > 0 ?
              <p>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                {this.props.filter.city}/{this.props.filter.state}
                <i className="fa fa-times" aria-hidden="true"></i>
              </p> 
              : ''
          }
        </div>
      </div>
    );
  }
}
export default Filter;
