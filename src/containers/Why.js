import React from 'react'
import Blockquote from '../components/Blockquote';
import './Why.css'

/**
* @author
* @function Why
**/

const Why = (props) => {
    return (
        <div className="why">
            <div className="container">

                <div className="testimonials">

                    <h4>Testimonials</h4>



                    <div className="flex-viewport defaulta">
                        <div className="slides defaultb">
                            <Blockquote cln="clone" auth="Smith Jonson" pos="Frontend Developer">
                                Quisque gravida libero sodales augue luctus elementum. In tristique faucibus diam, sit amet ultrices erat porttitor ut. Phasellus sit amet lorem sit amet orci lobortis mattis. Nulla venenatis, quam vitae pellentesque sollicitudin, erat enim varius nisl, sed porta augue mi et dui.
                            </Blockquote>

                            <Blockquote cln="" auth="Mike Jonson" pos="Frontend Developer">
                                Quisque gravida libero sodales augue luctus elementum. In tristique faucibus diam, sit amet ultrices erat porttitor ut. Phasellus sit amet lorem sit amet orci lobortis mattis. Nulla venenatis, quam vitae pellentesque sollicitudin, erat enim varius nisl, sed porta augue mi et dui.
                            </Blockquote>

                            <Blockquote cln="" auth="Jennifer Jonson" pos="Frontend Developer">
                                Quisque gravida libero sodales augue luctus elementum. In tristique faucibus diam, sit amet ultrices erat porttitor ut. Phasellus sit amet lorem sit amet orci lobortis mattis. Nulla venenatis, quam vitae pellentesque sollicitudin, erat enim varius nisl, sed porta augue mi et dui.
                            </Blockquote>

                            <Blockquote cln="flex-active-slide" auth="Smith Jonson" pos="Frontend Developer">
                                Quisque gravida libero sodales augue luctus elementum. In tristique faucibus diam, sit amet ultrices erat porttitor ut. Phasellus sit amet lorem sit amet orci lobortis mattis. Nulla venenatis, quam vitae pellentesque sollicitudin, erat enim varius nisl, sed porta augue mi et dui.
                            </Blockquote>

                            <Blockquote cln="clone" auth="Mike Jonson" pos="Frontend Developer">
                                Quisque gravida libero sodales augue luctus elementum. In tristique faucibus diam, sit amet ultrices erat porttitor ut. Phasellus sit amet lorem sit amet orci lobortis mattis. Nulla venenatis, quam vitae pellentesque sollicitudin, erat enim varius nisl, sed porta augue mi et dui.
                            </Blockquote>

                            <Blockquote cln="clone" auth="Mike Jonson" pos="Frontend Developer">
                                Quisque gravida libero sodales augue luctus elementum. In tristique faucibus diam, sit amet ultrices erat porttitor ut. Phasellus sit amet lorem sit amet orci lobortis mattis. Nulla venenatis, quam vitae pellentesque sollicitudin, erat enim varius nisl, sed porta augue mi et dui.
                            </Blockquote>



                        </div>
                        <ul class="flex-direction-nav">
                            <li><a class="flex-prev" href="http://demo.mage-themes.com/template/event/event/index.html#"><i
                                class="fa fa-chevron-left"></i></a></li>
                            <li><a class="flex-next" href="http://demo.mage-themes.com/template/event/event/index.html#"><i
                                class="fa fa-chevron-right"></i></a></li>
                        </ul>
                        

                    </div>
                </div>
                <div className="bullets">

                            <h3 className="animated fadeInLeft non-opacity">Why is this conference for you?</h3>

                            <div>
                                <h4><i className="fa fa-check"></i> Stay Ahead of the curve</h4>
                                <p>Quisque gravida libero sodales augue luctus elementum. In tristique faucibus diam, sit amet ultrices erat porttitor ut. Phasellus sit amet lorem sit amet orci lobortis mattis. Nulla venenatis, quam vitae pellentesque sollicitudin, erat enim varius nisl, sed porta augue mi et dui.</p>
                            </div>

                            <div>
                                <h4><i className="fa fa-check"></i> Find new ways of thinking and problem-solving</h4>
                                <p>Quisque gravida libero sodales augue luctus elementum. In tristique faucibus diam, sit amet ultrices erat porttitor ut.</p>
                            </div>

                            <div>
                                <h4><i className="fa fa-check"></i> Networking opportunities</h4>
                                <p>Quisque gravida libero sodales augue luctus elementum. In tristique faucibus diam, sit amet ultrices erat porttitor ut. Phasellus sit amet lorem sit amet orci lobortis mattis. Nulla venenatis, quam vitae pellentesque sollicitudin, erat enim varius nisl, sed porta augue mi et dui.</p>
                            </div>

                            <div>
                                <h4><i className="fa fa-check"></i> Strengthen Your Skills</h4>
                                <p>Quisque gravida libero sodales augue luctus elementum. In tristique faucibus diam, sit amet ultrices erat porttitor ut. Phasellus sit amet lorem sit amet orci lobortis mattis. Nulla venenatis, quam vitae pellentesque sollicitudin, erat enim varius nisl, sed porta augue mi et dui.</p>
                            </div>

                        </div>
            </div >
        </div>
    )

}
export default Why;