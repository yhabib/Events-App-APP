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

    // handleUpdateInput = (value) => {
    //     this.setState({
    //         dataSource: [
    //             value,

    //         ],
    //     });
    // };
    // handleChange = (event, date) => {
    //   this.setState({
    //     controlledDate: date,
    //   });
  // };



    render() {      
        console.log(this.props);
        return (  
          <div className="Filter">
            <DropDownMenu value={ this.props.value } onChange={ this.props.onChangeValue }>
              {
                this.props.states.map((state, i) => 
                  <MenuItem key={ i } value={ i } primaryText={ state } />)
              }
            </DropDownMenu>
            <DropDownMenu>
              {
                this.props.cities.map((city, i) => 
                  <MenuItem key={ i } primaryText={ city } />)
              }
            </DropDownMenu>

            <DatePicker
              hintText="Controlled Date Input"
              value={this.state.controlledDate}
              onChange={this.handleChange}
            />
            <RaisedButton label="Search" primary={true} style={style} />
          </div>
        );
    }
}
export default Filter;