import React from 'react'
import './Blockquote.css'

/**
* @author
* @function Blockquote
**/

const Blockquote = (props) => {
    const { children, auth, pos, cln } = props
    return (
        <div>
            <blockquote className = {`blq_st ${cln}`}>
                {children}
                <cite>
                    {auth}
                    <br></br>
                    <span>
                        {pos}
                    </span>
                </cite>
            </blockquote>
        </div>
    )

}
export default Blockquote;