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
                            <li>Facebooxk</li>
                            <li>Twitter</li>
                            <li>Instagrame</li>
                            <li>Youtube</li>
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
