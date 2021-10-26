import React from 'react'
import Topic from '../components/Topic';
import './Topics.css'

/**
* @author
* @function Topics
**/

const Topics = (props) => {
    return (
        <div className="topics">
            <div className="container">
                <h3 className="animated fadeInDown non-opacity"><strong>For three days,</strong><br></br>creative experts making great ideas happen.</h3>
                <p>Nunc commodo tellus diam, sed molestie quam fermentum varius. Etiam finibus lorem vel interdum volutpat. Suspendisse potenti. Duis non sem nisi. Phasellus iaculis placerat neque id fringilla. Sed suscipit erat egestas ante sollicitudin, quis tristique leo tristique.</p> 
                <Topic header ="Better Coding" icon = "fa-code" content="Nunc commodo tellus diam, sed molestie quam fermentum varius. Etiam finibus lorem vel interdum volutpat."></Topic>       
                <Topic header ="Secret to Succeess" icon = "fa-line-chart" content="Nunc commodo tellus diam, sed molestie quam fermentum varius. Etiam finibus lorem vel interdum volutpat."></Topic> 
                <Topic header ="Make Ideas Happen"icon = "fa-lightbulb-o" content="Nunc commodo tellus diam, sed molestie quam fermentum varius. Etiam finibus lorem vel interdum volutpat."></Topic>      
            </div>

        </div>
    )
}
export default Topics;