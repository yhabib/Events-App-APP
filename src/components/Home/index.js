import React, { Component } from 'react';

const backgroundImage = require('./intro.jpg');

const style = {
  height: "100%",
  width: "100%",
  background: `#fff url('${backgroundImage}') no-repeat center top`,
  backgroundSize: 'contain'
};

export default () => (
  <div style={ style }>
  </div>
);
