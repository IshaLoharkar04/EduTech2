import React from 'react'
  import "./Index.css"
// import web from "../src/Images/heroImg.jpg";
//import SideNav from '../Component/SideNav'
import HomeSide from './HomeSide'
 import Courses from './Courses'
// import CourseData from './CourseData'
import Facility from './Facility'
import About from './About'
const Home = () => {
  return (
    <div>
    <div><HomeSide/></div>
      <div><Courses/></div>
     {/* <div><CourseData/></div>   */}
    <div><Facility/></div> 
    <div><About/></div>
    <section id = "header" className='d-flex align-items-center'>
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row'>
               <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex justify-content-center flex-column' >
                <h1> 
                  Let there be light.
                </h1>
                <h2 className='my-3'> 
                Sarvodaya Vidyalaya, situated on the lush green Bethany Hills at Nalanchira, <br/>
                was founded on 3 January 1973 by His Grace the Most Rev. <br/>
                Benedict Mar Gregorios, <br/>
                the late Metropolitan Archbishop of Trivandrum.<br/>
                </h2>
                <div className='mt-03'>
                    <a href='' className='btn-get-started'>
                      Get Started
                    </a>
                </div>
                </div>

            <div className='col-lg-6 or order-1 order-lg-2 header-img'>
                {/* <img src={web} className="imh-fluid animated" alt="heroImg"></img> */}

                
    
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   </div>
  )
}
export default Home