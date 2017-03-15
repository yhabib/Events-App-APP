import React, { Component } from 'react';

import './index.css'

class ListView extends Component {
  render() {
    return (
      <div className="contentContainer">
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

export default ListView;

  //<date>{props.event.eventStartDate}</date>
//<h3>{props.event.name}</h3>
