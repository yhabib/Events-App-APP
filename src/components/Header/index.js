import React from 'react';
import { Component } from 'react';
import './index.css'
// import DropDownList from '../DropDownList';
class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="HeaderBanner">
                    <div className="logo">Go</div>
                    <div className="social">
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagrame</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
                <div className="amountOfEvent">
                    <h3>1 323 435 <span>Actual Event</span></h3>
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