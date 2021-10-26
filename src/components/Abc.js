import React from 'react'
import './Abc.css';
/**
* @author
* @function Abc
**/

const Abc = (props) => {
    const { mode, tiltle, children, icon } = props
    return (
        <div className={`${mode} animated fadeInLeft non-opacity`} >
          
            <div className="icon-holder">
            <i className={`fa ${icon}`}></i>
            </div>
            <div>
           
                <p>
                    <strong>{mode}</strong>
                </p>
                <p>
                    <span>{tiltle}</span>
                    <br></br>
                    {children}
                </p>
            </div>
        </div>
    )

}
export default Abc;