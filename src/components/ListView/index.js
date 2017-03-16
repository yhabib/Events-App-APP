import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

class ListView extends Component {
  render() {
    return (
      <div className="ListView_container">
        {
          this.props.events.map((event, index) => <Item key={index} event={event} />)
        }
      </div>
    );
  }
}

function Item(props) {
  return (
    <div className="posterGridBox">
      <Link to={`/events/${props.event.id}`}>
        <img src={props.event.eventImage} className="posterGridImg" alt={props.event.name} />
      </Link>
      <h3>{props.event.name}</h3>
    </div>
  )
}

export default ListView;