import React from 'react'
import Slide from '../components/Slide'
import './Sponsors.css'

/**
* @author
* @function Sponsors
**/

const Sponsors = (props) => {
    return (
        <div className="sponsors">
            <div className="container">

                <h2 className="animated fadeInLeft">Sponsors &amp; Partners</h2>
                <p className="subtitle animated fadeInRight" >Interested in becoming a sponsor? <a
                    href="http://demo.mage-themes.com/template/event/event/index.html#" className="open-contact-form">Get in
                    touch</a></p>

                <Slide></Slide>
            </div>
        </div>
    )

}
export default Sponsors