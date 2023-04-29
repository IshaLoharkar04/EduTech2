import React from "react";

const Facility = () => {
    const data = [
        {
            id:"01",
            heading: "School library",
            desc : " The school library has a huge repertoire of more than 10,000 books,32 scholarly journals, magazines, model question papers and so on.",
    
        },
        {
            id:"02",
            heading: "Laboratories",
            desc : " The school also has full-fledged laboratories for Biology, Physics and Chemistry.", 
        },
        {
            id:"03",
            heading: "Transportation",
            desc : "Sarvodaya Vidyalaya provides twenty five school buses that run to different parts of the city",
        }
    ]
    return (
        <>
        <section className="facility">
            <div className="container grid">
                {data.map((value) => {
                    return (
                        <div className='box flex'>
                         <div className="text">
                            <h1>{value.id}</h1>                           
                         </div>
                         <div className="para">
                            <h2> {(value.heading)}</h2>
                            <p> {(value.desc)}</p>
                         </div>
                        </div>
                    )
                })}
            </div>
        </section>
        </>
    )
}
export default Facility











