import React from 'react'
import './Sub.css'
/**
* @author
* @function Sub
**/

const Sub = (props) => {
    return (
        <div>
            <div className="back">
                <div className="container">

                    <a href="http://demo.mage-themes.com/template/event/event/index.html#top"><i className="fa fa-angle-up fa-3x"></i></a>

                </div>
            </div>
            <div className="overlay" style={{display: "none"}}>

                <div className="contact-form">

                    <h3>Contact Us</h3>
                    <p>We will get back to you as soon as possible</p>

                    <div className="form">
                        <form action="http://demo.mage-themes.com/template/event/event/contact.php" method="post">
                            <input type="text" name="name" placeholder="Name" />
                            <input type="text" name="email" placeholder="Email" />
                            <textarea name="message" placeholder="Message"></textarea>
                            <button name="submit" type="submit">Send Message</button>

                        </form>
                    </div>



                    <p className="error"></p>
                    <p className="message"></p>

                    <a href="http://demo.mage-themes.com/template/event/event/index.html#" className="close-contact-form"><i
                        className="fa fa-times fa-lg"></i></a>
                </div>

            </div>
        </div>
    )

}
export default Sub;