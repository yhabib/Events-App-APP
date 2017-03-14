import React, { Component } from 'react';

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="HeaderBanner">
          <div className="logo"> </div>
          <div className="social">
            <ul>
              <li><a href="http://www.facebook.com" target="blank">Facebook</a></li>
              <li><a href="http://www.twitter.com" target="blank">Twitter</a></li>
              <li><a href="http://www.instagram.com" target="blank">Instagram</a></li>
              <li><a href="http://www.youtube.com" target="blank">Youtube</a></li>
            </ul>
          </div>
        </div>
        <div className="amountOfEvent">
          <h3>{this.props.numberOfEvents}<span> Actual Event</span></h3>
        </div>
        <div className="content">
          <h2>Where to Party in Switzerland?</h2>
          <h4>Search and Found all Your Event in Swityerland with Go.</h4>
        </div>
      </div>
    );
  }
}

export default Header;
