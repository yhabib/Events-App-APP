import React, { Component } from 'react';

import './index.css'

class ListView extends Component {
  render() {
    return (
      <div>
        {
          this.props.events.map((event, index) => <Item key={ index } event={ event } />)
        }
      </div>
    );
  }
}

function Item(props) {  
  return (
    <div>
      <img src={ props.event.eventImage } />
      <date>{props.event.eventStartDate}</date>
      <h3>{props.event.name}</h3>
    </div>
  )
}

export default ListView;