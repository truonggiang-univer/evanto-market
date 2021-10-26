import React from 'react'
import './Registration.css';

/**
* @author
* @function Registration
**/

 const Registration = (props) => {
    return (
        <div className="registration">
            <div className="container">
                <h2 className="animated fadeInLeft non-opacity">Pricing &amp; Registration</h2>
                <p className="subtitle animated fadeInRight non-opacity"><strong>Only 300 available seats</strong> Get your
                    Conference Tickets early.</p>

                <p className="desc">Quisque gravida libero sodales augue luctus elementum. In tristique faucibus diam, sit amet
                    ultrices erat porttitor ut. Phasellus sit amet lorem sit amet orci lobortis mattis. Nulla venenatis, quam
                    vitae pellentesque sollicitudin, erat enim varius nisl, sed porta augue mi et dui.</p>

                <h3>Fill out your information</h3>
                <div className="form animated fadeInLeft">
                    <form action="http://demo.mage-themes.com/template/event/event/index.html" method="post">
                        <input type="text" name="firstname" placeholder="First Name"></input>
                        <input type="text" name="lastname" placeholder="Last Name"></input>
                        <input type="text" name="email" placeholder="Email"></input>
                        <input type="text" name="address" placeholder="Address"></input>
                        <input type="text" name="zip" placeholder="Zip Code"></input>
                        <input type="text" name="city" placeholder="City"></input>
                        <input type="text" name="program" id="program" placeholder="Select your program on the right"
                            disabled="disabled"></input>
                        <button name="submit" type="submit">Confirm Your Order</button>
                    </form>
                </div>
                <div className="price animated fadeInRight">

                    <div>

                        <p className="amount">$330</p>
                        <h4>Early Bird <span>Save NOW</span></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac mollis risus. Nulla ornare ipsum id
                            lacus vehicula sit amet euismod nibh sagittis.</p>

                    </div>

                    <div>

                        <p className="amount">$350</p>
                        <h4>Conference</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac mollis risus. Nulla ornare ipsum id
                            lacus vehicula sit amet euismod nibh sagittis.</p>

                    </div>


                    <div>

                        <p className="amount">$500</p>
                        <h4>Conference + Workshops</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac mollis risus. Nulla ornare ipsum id
                            lacus vehicula sit amet euismod nibh sagittis.</p>

                    </div>

                </div>

            </div>
        </div>
    )

}

export default Registration;