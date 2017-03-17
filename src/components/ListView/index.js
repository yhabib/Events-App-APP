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

  const event = props.event || {};
  const location = props.event.location || {};
  const q = `q=${location.street}+${location.number},${location.city}+${location.country}`;
  console.log(q);

  return (

    <div className="posterListContainer">
      <div className="itemLine">
        <Link to={`/events/${props.event.id}`}>
          <img src={props.event.eventImage} className="posterListImg" alt={props.event.name} />
        </Link>
        <div className="itemData">
          <h3>{props.event.name}</h3>
          <h4>{event.eventStartDate}</h4>
          <p>{event.description}</p>
          <Link to={`/events/${props.event.id}`}>
              <button className="viewMore"> View more </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ListView;
