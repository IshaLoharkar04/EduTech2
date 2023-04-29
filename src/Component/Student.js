import SidebarStu from './SidebarStu'
import NavbarStu from './NavbarStu'
import FeaturedStu from './FeaturedStu'
import Chart from './Chart'
 import './Student.css'
import Widgets from './Widgets'
import "./Widgets.css"
export default function Student() {
  return (
<>
   
     <div className='Student'> 
  <div className='SideBar'>    <SidebarStu/></div>    
     
  
     <div className="studentContainer">
           <NavbarStu/>

       <div className="widgets">
       <Widgets type="Profile"/>
       <Widgets type="Home Work"/>
       <Widgets type="Exam Result"/>
       <Widgets type="Fees Pending"/>
        </div>
  <div className="charts">
    <div className='feature'> <FeaturedStu/></div>
       
        <Chart  title="Last 6 Months (Revenue)" aspect={2 / 1}/>
  </div> 

    </div> 
    </div>
</>
  )
}
