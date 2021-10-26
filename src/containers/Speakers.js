import React from 'react'
import Speaker from '../components/Speaker'
import './Speakers.css'
/**
* @author
* @function 
**/

const Speakers = (props) => {
    const speakers_data= [
        {
            "img_src":"/images/speaker_1.jpg",
            "headers":<>Jennifer<br></br>Smith</>,
            "tiltle":"Web developer",
            "desc":"Lorem Ipsum Dolor Sit Amanet Duis non sem nisi Phasellus iaculis placerat neque id fringilla."
        },
        {
            "img_src":"/images/speaker_2.jpg",
            "headers":<>Mike<br></br>Jonson</>,
            "tiltle":"Frontend developer",
            "desc":"Lorem Ipsum Dolor Sit Amanet Duis non sem nisi Phasellus iaculis placerat neque id fringilla."
        },
        {
            "img_src":"/images/speaker_3.jpg",
            "headers":<>Todd<br></br>Jonson</>,
            "tiltle":"Frontend developer",
            "desc":"Lorem Ipsum Dolor Sit Amanet Duis non sem nisi Phasellus iaculis placerat neque id fringilla."
        },
        {
            "img_src":"/images/speaker_4.jpg",
            "headers":<>Jessica<br></br>Smith</>,
            "tiltle":"Frontend developer",
            "desc":"Lorem Ipsum Dolor Sit Amanet Duis non sem nisi Phasellus iaculis placerat neque id fringilla."
        },
        {
            "img_src":"/images/speaker_4.jpg",
            "headers":<>Lusi<br></br>Smith</>,
            "tiltle":"Frontend developer",
            "desc":"Lorem Ipsum Dolor Sit Amanet Duis non sem nisi Phasellus iaculis placerat neque id fringilla."
        },{
            "img_src":"/images/speaker_3.jpg",
            "headers":<>Mike<br></br>Smith</>,
            "tiltle":"Frontend developer",
            "desc":"Lorem Ipsum Dolor Sit Amanet Duis non sem nisi Phasellus iaculis placerat neque id fringilla."
        },{
            "img_src":"/images/speaker_1.jpg",
            "headers":<>Lisa<br></br>Smith</>,
            "tiltle":"Frontend developer",
            "desc":"Lorem Ipsum Dolor Sit Amanet Duis non sem nisi Phasellus iaculis placerat neque id fringilla."
        }
        ,{
            "img_src":"/images/speaker_2.jpg",
            "headers":<>Ken<br></br>Smith</>,
            "tiltle":"Frontend developer",
            "desc":"Lorem Ipsum Dolor Sit Amanet Duis non sem nisi Phasellus iaculis placerat neque id fringilla."
        }

    ]
    return (
        <div className="speakers">
            <div className="container">

                <h2 className="animated fadeInLeft non-opacity">The Speakers</h2>
                <p className="subtitle animated fadeInRight non-opacity" >Master Classes from creative experts</p>
                <div className="featured">

                    <div className="image">
                        <img src="/images/featured-speaker.jpg" alt="">
                        </img>
                    </div>

                    <div>
                        <h3 className="animated fadeInLeft non-opacity">Featured: Phasellus iaculis placerat neque id fringilla.</h3>

                        <p className="title">CEO &amp; Co-founder</p>

                        <p>Nunc commodo tellus diam, sed molestie quam fermentum varius. Etiam finibus lorem vel interdum volutpat. Suspendisse potenti. Duis non sem nisi. Phasellus iaculis placerat neque id fringilla.</p>

                        <p>Sed suscipit erat egestas ante sollicitudin, quis tristique leo tristique. Etiam finibus lorem vel interdum volutpat. Suspendisse potenti. Duis non sem nisi.</p>
                    </div>

                </div>
                {speakers_data.map(val=>{
                    return <Speaker img_src ={val.img_src} header={val.headers} tiltle={val.tiltle}>{val.desc}</Speaker>
                })}
                
            </div>
        </div>
    )

}
export default Speakers;