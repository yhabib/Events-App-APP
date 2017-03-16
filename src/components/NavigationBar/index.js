import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

export default function () {
  console.log("Navigation render");
  return (
    <nav className="NavigationBar">
      <NavLink to="/events/grid" activeStyle={{ color: 'red' }}>
        <i className="fa fa-th" aria-hidden="true"></i>
      </NavLink>
      <NavLink to="/events/list" activeStyle={{ color: 'red' }}>
        <i className="fa fa-list" aria-hidden="true"></i>
      </NavLink>
    </nav>
  );
}

