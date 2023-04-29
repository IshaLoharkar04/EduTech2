import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import SettingsIcon from '@mui/icons-material/Settings';
import "./HomeSide.css"
//import Home from './Home';
import { Link,Typography } from '@mui/material';
export default function HomeSide() {
  return (
    < div className='SideHome'>
 <div className='top'>
    <span className="logo">Amigoes Tech</span></div>
 <hr></hr>
 < div className='center'>
    
         <Typography>
        <DashboardIcon/>
        <Link fontSize={20} href="/Home"> Home</Link><br></br><br></br>
            </Typography>
       
        
        <Typography>
        <HomeIcon/>
            <Link fontSize={20} href="/About Us">About Us</Link><br></br><br></br>
            </Typography>
     
        <Typography>
        
            <MenuBookIcon/>
            <Link fontSize={20} href="/Registration"> Registration</Link><br></br><br></br>
          
        </Typography>
        
        <Typography>
        <ArticleIcon/> 
        <Link fontSize={20} href="/Contact">Contact  </Link><br></br><br></br>
            </Typography>
        
        
        <Typography>
            <CalendarMonthIcon/>
            <Link fontSize={20} href="/Department">Department</Link><br></br><br></br>
            </Typography>
        
       
</div>
 
    </div>
  )
}
