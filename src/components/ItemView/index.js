import React, { Component } from 'react';

import { MAPS_URL } from './../../store/constants';
import './index.css';

class ItemView extends Component {
  render() {
    return <Item event={this.props.event} />
  }
}

function Item(props) {
  const event = props.event || {};
  const location = props.event.location || {};
  const q = `q=${location.street}+${location.number},${location.city}+${location.country}`;
  console.log(q);

  return (
    <div className="posterItemContainer">
      <hr />
      <img src={event.eventImage} className="posterItemView" alt={event.name} />
      <div className="data">
        <h3>{event.name}</h3>
        <h4>{event.eventStartDate}</h4>
        <p>{event.description}</p>

        <div className="boxContact">
          <hr />
          <div className="boxLeft">
            <h4>Adresse</h4>
            <p>{location.street} {location.number}</p>
            <p>{location.postCode} {location.city}</p>
            <p>{location.country}</p>
          </div>

          <div className="boxRight">
            <h4>Contacts</h4>
            <p>Tel: 0269240000</p>
            <p>Mail: info@info.ch</p>
            <p>Web: www.go.ch</p>
          </div>
        </div>
        <hr />
        <div className="map">

          <h4>Map</h4>
          <Map iframe='iframe' src={MAPS_URL + q} height="500" width="600" />,
        </div>
      </div>
    </div>
  )
}

function Map(props) {
  const Iframe = props.iframe;
  return (
    <div>
      <Iframe src={props.src} height={props.height} width={props.width} />
    </div>
  )
}

export default ItemView;
