import React from 'react'
import './Topic.css'

/**
* @author
* @function Topic
**/

const Topic = (props) => {
    const { icon, header, content } = props
    return (

        <div>
            <i className= {`fa fa-2x ${icon} animated fadeInDown non-opacity`} aria-hidden="true"></i>
            <h4>{header}</h4>
            <p>{content}</p>
        </div>

    )

}
export default Topic;