import React from 'react'
/**
* @author
* @function Speaker
**/

const Speaker = (props) => {
    const { img_src,header, tiltle, children } = props
    return (
        <div className="single">
            <img src='/images/speaker_1.jpg' alt="BigCo Inc. logo"/>
            <div>
                <h3 className="non-opacity">{header}</h3>
                <p><strong>{tiltle}</strong></p>
                <p>{children}</p>
            </div>
        </div>
    )

}
export default Speaker;