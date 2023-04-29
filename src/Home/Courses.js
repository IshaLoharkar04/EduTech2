import React from 'react'
import CourseData from './CourseData'

const Courses = () => {
  return (
    <>
    <section className='courses topMarign'>
        <div className='container'>
            <div className='heading'>
                <h3> Courses </h3>
                <h1> Courses offered</h1>
            </div>

            <div className='contain grid topMarign'>
                {
                    CourseData.map((val) =>{
                        return (
                            <>
                        <div className='box'>
                            <div className='img'>
                                <img src={val.cover} alt=''></img>
                                
                            </div>
                            <div className='text'>
                                <h2>{val.title}</h2>
                                <p>{val.desc}</p>
                            </div>
                        </div>
                        </>
                    )})
                }
            </div>
        </div>
    </section>
    </>
  )
}

export default Courses

