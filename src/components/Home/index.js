import React from 'react';
import { Link } from 'react-router-dom';

const backgroundImage = require('./intro.jpg');

const style = {
  height: "100%",
  width: "100%",
  background: `#000 url('${backgroundImage}') no-repeat center top`,
  backgroundSize: 'contain'
};


export default () => (
  <div style={ style }>
    <Link to="/events/grid"><button>CLICK</button></Link>
  </div>
);
