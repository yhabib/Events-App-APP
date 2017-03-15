import React, { Component } from 'react';

import './index.css'

class GridView extends Component {
  render() {
    return (
      <div className="GridView_container">
        {
          this.props.events.map((event, index) => <Item key={ index } event={ event } />)
        }
      </div>
    );
  }
}

function Item(props) {
  return (
    <div className="posterGridBox">
        <img src={ props.event.eventImage } className="posterGridImg"  />
        <h3>{props.event.name}</h3>
    </div>
  )
}

export default GridView;

  //<date>{props.event.eventStartDate}</date>
//<h3>{props.event.name}</h3>
