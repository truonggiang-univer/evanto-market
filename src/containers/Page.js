import React from 'react'
import Header from '../components/Header';
import Topics from './Topics';
import './Page.css'
import Speakers from './Speakers';
import Schedule from './Schedule';
import Why from './Why';
import Registration from './Registration';
import Sponsors from './Sponsors';
import Location from './Location';
import Social from './Social';
import Footer from './Footer';

/**
* @author
* @function Page
**/

const Page = (props) => {
  return (
    <div className="page">
      <Header></Header>
      <Topics></Topics>
      <a id="speakers" className="anchor"></a>
      <Speakers></Speakers>
      <a id="scheadule" className="anchor"></a>
      <Schedule></Schedule>
      <Why></Why>
      <a id="registration" className="anchor"></a>
      <Registration></Registration>
      <a id="sponsors" className="anchor"></a>
      <Sponsors></Sponsors>
      <Location></Location>  
      <Social></Social>
      <Footer></Footer>
      
      {/* <Social></Social>
      <Footer></Footer>   */}
    </div>
  )

}
export default Page;