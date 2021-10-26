import React from 'react'
import Address from './Address';
import './Location.css'
import Maps from './Maps';
import { withScriptjs, withGoogleMap } from 'react-google-maps';
/**
* @author
* @function Location
**/

const Location = (props) => {
    const key = 'AIzaSyCHw3M1NY-SsG8BrAUYRBR_PWmYmExWuNA'
    return (
        <div class="location">
            <div class="container">
                <h2 class="animated fadeInLeft non-opacity">Location and Venue</h2>
                <p class="subtitle animated fadeInRight">area full of great hotels and restaurants.</p>
                <div class="info">
                    <div className="maps">
                        <div class="images animated fadeInLeft non-opacity">
                            <img src="images/placeholder.jpg" />
                        </div>
                        <Maps
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
                            loadingElement={<div style={{ height: `328px%`, width:`100%` }} />}
                            containerElement={<div style={{ height: `328px` ,width:`100%`, border: '2px solid black' }} />}
                            mapElement={<div style={{ height: `100%`, width:`100%` }} />}
                            streetView = "StreetViewPanorama"
                        />
                    </div>

                    <Address></Address>
                    {/* {withScriptjs(withGoogleMap(Maps))} */}
                    {/* <Address></Address> */}
                </div>
            </div>
        </div>
    )

}
export default Location;