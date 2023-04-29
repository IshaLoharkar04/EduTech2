import SidebarTeacher from './SidebarTeacher'
import NavbarTeacher from './NavbarTeacher'

import ChartTeacher from './ChartTeacher'
 import './teacher.css'
import FeaturedTeacher from './FeaturedTeacher'
import WidgetsTeacher from './Widgets'
import "./widgets.css"
// import List from './List'
export default function Teacher() {
  return (
<>
   {/* <div><WidgetsTeacher/></div> */}
     <div className='Teacher'> 
  <div className='SideBar'>    <SidebarTeacher/></div>    
     
     <div className="studentContainer">
           <NavbarTeacher/>
           
       <div className="widgets">
       <WidgetsTeacher type="Profile"/>
       <WidgetsTeacher type="Home Work"/>
       <WidgetsTeacher type="Exam Result"/>
       <WidgetsTeacher type="Fees Pending"/>
       
        </div>
  <div className="charts">
    <div className='feature'> <FeaturedTeacher/></div>
 
 
        <ChartTeacher  title="Last 6 Months (Revenue)" aspect={2 / 1}/>

  </div> 
  {/* <li><div className='list'> <List/></div></li> */}

</div>
    </div> 
   
</>
  )
}
