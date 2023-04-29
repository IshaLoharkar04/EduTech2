import React from 'react';
import "react-big-calendar/lib/css/react-big-calendar.css";
//import '../src/node_modules/bootstrap/dist/css/bootstrap.css';
 import Student from './Component/Student';
//import Admission from './components/pages/Admission';
 import Dashbord from './Component/Dashbord';
import Contact from'./Component/Contact';
import Courses from './Home/Courses';
// import NavbarStu from './Component/NavbarStu';
// import Home from './Component/Home';
import Registration from './Home/Registration';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Admission from './Component/Admission';
import StudentReg from './StudentReg/StudentReg';
import FormInput from './StudentReg/FormInput';
import Chart from './Component/Chart';
import Table from './Component/Table';
//import AdminLogin from './Component/AdminLogin';

import Home from './Home/Home';
import SidebarStu from './Component/SidebarStu';
import  HomeSide from './Home/HomeSide';
import NavbarReg from './Home/NavbarReg';
import NavbarStu from './Component/NavbarStu';
//import Login from './components/pages/Login';
import About from './Home/About';
import CourseData from './Home/CourseData';
import Facility from './Home/Facility';
import Teacher from './Teacher/Teacher';
import SidebarTeacher from './Teacher/SidebarTeacher';
import NavbarTeacher from './Teacher/NavbarTeacher';
import Widgets from './Teacher/Widgets';
import FeaturedTeacher from './Teacher/FeaturedTeacher';
import ChartTeacher from './Teacher/ChartTeacher';
import List from './Teacher/List';
import Datatable from './Teacher/Datatable';
import reportWebVitals from './reportWebVitals';
import ExamTeacher from './Teacher/ExamTeacher';
import TodoList from './Component/TodoList/TodoList';
import CreateTask from './Component/modals/CreateTask';
import Card from './Component/TodoList/Card';
import CalenderTec from './Teacher/CalenderTec';
import Calender from './Teacher/Calender';
import Homework from './Component/TodoList/Homework';


// import Moment from'./Calender/Moment';
// import Day from './Calender/Day';
// import Globalize from './Calender/Globalize';

function App() {
  return (
     <Router>
      
      {/* <Navbar/> */}
       {/* <div className="App"> */}
     <Routes>
        <Route  path='/' element={<Home/>}/> 
  <Route  path='/Student' element={<Student/>}/>
      <Route  path='/contact' element={<Contact/>}/>
      
{/* <Route path ='/NavbarStu' element={<NavbarStu/>}/> */}
<Route path ='/Home' element={<Home/>}/>

<Route path ='/Registration' element={<Registration/>}/>


<Route path ='/Admission' element={<Admission/>}/>
<Route path ='/SidebarStu' element={<SidebarStu/>}/>
<Route path ='/NavbarStu' element={<NavbarStu/>}/>
<Route  path='/Chart' element={<Chart/>}/>
<Route path ='/Table' element={<Table/>}/>
<Route path ='/HomeSide' element={<HomeSide/>}/>
<Route path ='/NavbarReg' element={<NavbarReg/>}/>
<Route path ='/CalenderTec' element={<CalenderTec/>}/>
<Route path ='/Facility' element={<Facility/>}/>
<Route path ='/About' element={<About/>}/>
<Route path ='/Courses' element={<Courses/>}/>
<Route path ='/CourseData' element={<CourseData/>}/>
<Route path ='/StudentReg' element={<StudentReg/>}/>
<Route path ='/FormInput' element={<FormInput/>}/>
<Route path ='/Teacher' element={<Teacher/>}/>
<Route path ='/SidebarTeacher' element={<SidebarTeacher/>}/>
<Route path ='/NavbarTeacher' element={<NavbarTeacher/>}/>
<Route path ='/Widgets' element={<Widgets/>}/>
<Route path ='/FeaturedTeacher' element={<FeaturedTeacher/>}/>
<Route path ='/ChartTeacher' element={<ChartTeacher/>}/>
<Route path ='/List' element={<List/>}/>
<Route path ='/Datatable' element={<Datatable/>}/>
<Route path ='/ExamTeacher' element={<ExamTeacher/>}/>
<Route path ='/TodoList' element={<TodoList/>}/>
<Route path ='/CreateTask' element={<CreateTask/>}/>
<Route path ='/Card' element={<Card/>}/>
<Route path ='/Calender' element={<Calender/>}/>
<Route path ='/Homework' element={<Homework/>}/>

{/* <Route path ='/Moment' element={<Moment/>}/>
<Route path ='/Day' element={<Day/>}/>
<Route path ='/Globalize' element={<Globalize/>}/> */}
       </Routes>
     {/* </div> */}

</Router >    
  );
}
export default App;

