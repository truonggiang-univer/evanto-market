import React from 'react'
import './Event.css'

/**
* @author
* @function Event
**/

const Event = (props) => {
    const { e_time, e_icon, e_speaker, e_speaker_desc, children , extend} = props
    return (
        <div className={`event ${extend?"extend":""}`} >
            <div className="event-time">
                {String(e_time)}
                <span>
                </span>
            </div>
            <div className="event-info">
                <div>
                    {children}
                    {e_speaker ? <p className="speaker">
                        <strong>{e_speaker}</strong>
                        <br></br>
                        {e_speaker_desc}
                    </p> : null}
                    
                </div>
            </div>
        </div>
    )

}
export default Event;