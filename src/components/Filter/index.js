import React, { Component } from 'react';

import AutoComplete from 'material-ui/AutoComplete';
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

    handleUpdateInput = (value) => {
        this.setState({
            dataSource: [
                value,

            ],
        });
    };
    handleChange = (event, date) => {
    this.setState({
      controlledDate: date,
    });
  };

    render() {
        return (
            <div className="Filter">

                <AutoComplete
                    hintText="Kanton"
                    dataSource={this.state.dataSource}
                    onUpdateInput={this.handleUpdateInput}
                />

                <AutoComplete
                    hintText="City"
                    dataSource={this.state.dataSource}
                    onUpdateInput={this.handleUpdateInput}
                />

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