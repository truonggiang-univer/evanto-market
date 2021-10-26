import React from 'react'
import Abc from './Abc';
import './Header.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <h1 className="non-opacity animated fadeInDown">
                    <a href="#">The Annual Conference 2015</a>
                </h1>
                <p className="nonopacity subtitle animated fadeInDown">
                    1 track, 3 conference days, 4 workshops, 10 excellent speakers and 
                    <strong>
                        <a href="#"> just 300 available seats</a>
                    </strong>
                    "."
                </p>
                <Abc  mode = "when" tiltle = "7th to 9th October 2014" icon = "fa-calendar">
                Starting at 10am
                </Abc>
                <Abc mode = "where" tiltle ="London" icon="fa-map-marker" >
                <a href="http://demo.mage-themes.com/template/event/event/index.html#">Awesome Venue Name</a>
                </Abc>
               
                <div className="register-now animated fadeInRight non-opacity" >
                    <p>Tickets are on sale now, get 10% off till November 1st!</p>
                    <a href="#registration" className="button">Register Now</a>
                </div>
            </div>
        </div>
    )

}
export default Header;