import React from 'react'
// import web from "../src/Images/about1.png";
import "./Index.css"
const About = () => {
    const data = [
        {
            
            title: "Our Aims & Objectives",
            desc1:"The school is owned and managed by the Major Archdiocese of Trivandrum. For the last 9 decades, the Major Archdiocese has been rendering excellent service to the society by providing quality education to thousands of students across the nation. ",
            desc2: " Its goal in its educational undertaking, has always been something more than the ordinary and the mediocre. ",
            cover: "../src/Images/heroImg.jpg",
        }
    ]
  return (
    <>
    <section className='about topMargin'>
        <div className='container flex'>
            {
                data.map((val) =>{
                    return (
                        <>
                    <div className='left mtop'>
                        <div className='heading'>
                            <h3>About us</h3>
                            <h1>{val.title}</h1>
                        </div>
                        <p>{val.desc1}</p>
                        <p>{val.desc2}</p>
                        <p>{val.desc3}</p>
                        <button className='primary-btn'> Download prospectus</button>
                    </div>
                <div className='right'>
                <div className='col-lg-6 or order-1 order-lg-2 header-img'>
                {/* <img src={web} className="imh-fluid animated" alt="heroImg"></img> */}
                    </div>
                </div> 
                </>
                )})
            }
        </div>

    </section>
    </>
  )
}

export default About

