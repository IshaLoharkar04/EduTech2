import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./SidebarStu.css"
import Home from '../Home/Home';
import { Link,Typography } from '@mui/material';
export default function SidebarStu() {
  return (
    < div className='SidebarStu'>
 <div className='top'>
    <span className="logo">Student</span></div>
 <hr></hr>
 < div className='center'>
    
         <Typography>
        <DashboardIcon/>
        <Link fontSize={20} href="/Dashboard"> Dashboard</Link><br></br><br></br>
            </Typography>
       
        
        <Typography>
        <HomeIcon/>
            <Link fontSize={20} href="/Home"> Home</Link><br></br><br></br>
            </Typography>
     
        <Typography>
        
            <MenuBookIcon/>
            <Link fontSize={20} href="/TimeTable"> TimeTable</Link><br></br><br></br>
          
        </Typography>
        
        <Typography>
        <ArticleIcon/> 
        <Link fontSize={20} href="/Exam"> Exam <KeyboardArrowDownIcon/>  </Link><br></br><br></br> 
            </Typography>
        
        
        <Typography>
            <CalendarMonthIcon/>
            <Link fontSize={20} href="/Calender"> Calender</Link><br></br><br></br>
            </Typography>
        
        <Typography>
< CreditScoreIcon/>
<Link fontSize={20} href="/Exam Result"> Exam Result</Link><br></br><br></br>
        </Typography>
        
        
</div>
 
    </div>
  )
}
