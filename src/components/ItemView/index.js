import React, { Component } from 'react';


import './index.css';


class ItemView extends Component {

  render() {
    return <Item event={ this.props.event } />
  }
}


function Item(props) {  
  console.log(props);
  
  return (
    <div className="posterGridBox">
        <img src={ props.event.eventImage } className="posterGridImg" alt={ props.event.name } />
        <h3>{props.event.name}</h3>
    </div>
  )
}

export default ItemView;