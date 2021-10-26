import React from 'react'
import './Social.css'

/**
* @author
* @function Social
**/

const Social = (props) => {
    return (
        <div className="social">
            <div className="container">

                <div>
                    <h2 className="animated fadeInLeft">Keep me informed</h2>
                    <p className="subtitle animated fadeInRight" >Signup to our newsletter or connect via social
                        networks</p>

                    <form action="http://demo.mage-themes.com/template/event/event/index.html" method="post">
                        <input type="text" name="name" placeholder="enter your email address" />
                        <button name="submit" type="submit"><i className="fa fa-arrow-circle-right"></i></button>
                    </form>

                    <a href="http://demo.mage-themes.com/template/event/event/index.html#"><i className="fa fa-facebook"></i></a>
                    <a href="http://demo.mage-themes.com/template/event/event/index.html#"><i className="fa fa-twitter"></i></a>
                    <a href="http://demo.mage-themes.com/template/event/event/index.html#"><i className="fa fa-google-plus"></i></a>
                    <a href="http://demo.mage-themes.com/template/event/event/index.html#"><i className="fa fa-linkedin"></i></a>
                </div>

            </div>
        </div>
    )

}
export default Social;