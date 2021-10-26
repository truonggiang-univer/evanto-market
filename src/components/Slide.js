import React from 'react'
import './Slide.css'

/**
* @author
* @function Slide
**/

const Slide = (props) => {
    return (
        <div className="slides">

            <div className="flex-viewport vp_stl" >
                <ul className= "ul_stl">
                    <li className="li_stl">
                        <a href="http://demo.mage-themes.com/template/event/event/index.html#">
                            <img src="/images/3docean-light-background.png" draggable="false"/> 
                        </a>
                    </li>
                    <li className="li_stl">
                        <a href="http://demo.mage-themes.com/template/event/event/index.html#">
                            <img src="/images/activeden-light-background.png" draggable="false"/>
                        </a>
                    </li>
                    <li className="li_stl">
                        <a href="http://demo.mage-themes.com/template/event/event/index.html#">
                            <img src="/images/graphicriver-light-background.png" draggable="false"/>
                        </a>
                    </li>
                    <li className="li_stl">
                        <a href="http://demo.mage-themes.com/template/event/event/index.html#">
                            <img src="/images/videohive-light-background.png" draggable="false"/>
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
    )

}
export default Slide