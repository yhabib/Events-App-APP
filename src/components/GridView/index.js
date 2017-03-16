import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import ItemViewContainer from './../ItemView';

import './index.css'

class GridView extends Component {
  render() {
    console.log(this.props);

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
      <Link to={ `/events/${props.event.id}` }>
        <img src={ props.event.eventImage } className="posterGridImg" alt={ props.event.name } />
      </Link>
      <h3>{props.event.name}</h3>
      <Route
        path="/event/:id"
        render={ ({match}) => <ItemViewContainer /> } />
    </div>
  )
}

export default GridView;
