import React from 'react'
import Event from '../components/Event';
import './Schedule.css'
/**
* @author
* @function Schedule
**/

const Schedule = (props) => {
    return (
        <div className="schedule">
            <div className="container">

                <h2 className="animated fadeInLeft non-opacity">Conference Schedule</h2>
                <p className="subtitle animated fadeInRight non-opacity">packed with high quality content, just for you.</p>
                <div className="tabs ui-tabs ui-widget ui-widget-content ui-corner-all">

                    <ul className="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist">
                        <li className="ui-state-default ui-corner-top ui-tabs-active ui-state-active" role="tab" tabindex="-1" aria-controls="tabs-1" aria-labelledby="ui-id-1" aria-selected="false" aria-expanded="false"><a href="http://demo.mage-themes.com/template/event/event/index.html#tabs-1" className="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-1">Day 1, 7th</a></li>
                        <li className="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="tabs-2" aria-labelledby="ui-id-2" aria-selected="false" aria-expanded="false"><a href="http://demo.mage-themes.com/template/event/event/index.html#tabs-2" className="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-2">Day 2, 8th</a></li>
                        <li className="ui-state-default ui-corner-top " role="tab" tabindex="0" aria-controls="tabs-3" aria-labelledby="ui-id-3" aria-selected="true" aria-expanded="true"><a href="http://demo.mage-themes.com/template/event/event/index.html#tabs-3" className="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-3">Day 3, 9th</a></li>
                    </ul>
                </div>

                <div className="tabs ui-tabs ui-widget ui-widget-content ui-corner-all">

                    <div id="tabs-1" className=" day ui-tabs-panel ui-widget-content ui-corner-bottom" aria-labelledby="ui-id-1"
                        role="tabpanel" aria-hidden="true" style={{ display: "none" }}>

                        <Event e_time="08:30" ><h4>Registration</h4></Event>
                        <Event e_time="08:45 - 09:15" extend e_speaker="Samantha Jonson" e_speaker_desc="Founder of Creative Agency" ><h4><a href="http://demo.mage-themes.com/template/event/event/index.html#">The Future of the Web: and how to prepare for it now</a></h4></Event>
                        <Event e_time="08:45 - 09:15" extend e_speaker="Samantha Jonson" e_speaker_desc="Founder of Creative Agency" ><h4><a href="http://demo.mage-themes.com/template/event/event/index.html#">The Future of the Web: and how to prepare for it now</a></h4></Event>
                        <Event e_time="13:00" ><h4>Lunch Break</h4></Event>
                        <Event e_time="14:30 - 15:45" extend e_speaker="Samantha Jonson" e_speaker_desc="Founder of Creative Agency" ><h4><a href="http://demo.mage-themes.com/template/event/event/index.html#">Workshop: The Future of the Web: and how to prepare for it now</a></h4></Event>

                    </div>
                    <div id="tabs-2" className=" day ui-tabs-panel ui-widget-content ui-corner-bottom" aria-labelledby="ui-id-2"
                        role="tabpanel" aria-hidden="true" style={{ display: "none" }}>

                        <Event e_time="08:30" ><h4>Registration</h4></Event>
                        <Event e_time="08:45 - 09:15" extend e_speaker="Samantha Jonson" e_speaker_desc="Founder of Creative Agency" ><h4><a href="http://demo.mage-themes.com/template/event/event/index.html#">The Future of the Web: and how to prepare for it now</a></h4></Event>

                        <Event e_time="13:00" ><h4>Lunch Break</h4></Event>
                        <Event e_time="14:30 - 15:45" extend e_speaker="Samantha Jonson" e_speaker_desc="Founder of Creative Agency" ><h4><a href="http://demo.mage-themes.com/template/event/event/index.html#">Workshop: The Future of the Web: and how to prepare for it now</a></h4></Event>

                    </div>
                    <div id="tabs-3" class="day ui-tabs-panel ui-widget-content ui-corner-bottom" aria-labelledby="ui-id-3"
                        role="tabpanel" aria-hidden="false" style={{ display: "block" }}>

                        <Event e_time="08:30" ><h4>Registration</h4></Event>
                        <Event e_time="08:45 - 09:15" extend e_speaker="Samantha Jonson" e_speaker_desc="Founder of Creative Agency" ><h4><a href="http://demo.mage-themes.com/template/event/event/index.html#">The Future of the Web: and how to prepare for it now</a></h4></Event>
                        <Event e_time="08:45 - 09:15" extend e_speaker="Samantha Jonson" e_speaker_desc="Founder of Creative Agency" ><h4><a href="http://demo.mage-themes.com/template/event/event/index.html#">The Future of the Web: and how to prepare for it now</a></h4></Event>
                        <Event e_time="13:00" ><h4>Lunch Break</h4></Event>
                        <Event e_time="14:30 - 15:45" extend e_speaker="Samantha Jonson" e_speaker_desc="Founder of Creative Agency" ><h4><a href="http://demo.mage-themes.com/template/event/event/index.html#">Workshop: The Future of the Web: and how to prepare for it now</a></h4></Event>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default Schedule;