import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps"
import './Maps.css'

/**
* @author
* @function Maps
**/

const Maps = (props) => {

  return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
      </GoogleMap>

  )

}
export default withScriptjs(withGoogleMap(Maps));