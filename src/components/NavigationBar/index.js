import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

// Why does not work??????
export default function() {
  return (
    <nav className="NavigationBar">
      <NavLink to="/events/grid" activeStyle={{ color: 'orange' }}>
        <i className="fa fa-th" aria-hidden="true"></i>
      </NavLink>
      <NavLink to="/events/list" activeStyle={{ color: 'orange' }}>
        <i className="fa fa-list" aria-hidden="true"></i>
      </NavLink>
    </nav>
  );
}

