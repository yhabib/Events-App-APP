import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const linkStyle = {
  border: '1px solid black'
};

class NavigationBar extends Component {

  render() {
    return (
      <nav className="NavigationBar">
        <Link style={ linkStyle } to="/events/grid">Grid</Link>
        <Link style={ linkStyle } to="/events/list">List</Link>
      </nav>
    );
  }
}

export default NavigationBar;