import React from 'react';
import {Link}from "react-router-dom";
import NavbrReg from './NavbarReg';
//import { SidebarData } from './SidebarData';
//import '../src/node_modules/bootstrap/dist/css/bootstrap.css';
const Registration =()=>{
  return (
    <>
       
   <React.Fragment>
   <NavbrReg/>
       {/* <h1 className="text-center text-danger text-capitalize" style={{padding:50}}>
        EduTech</h1> */}
      <div className="container" style={{padding:60}}>
  <div className="row">
    <div className="col-sm"><div class="card" >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkyTfVBpEoEkHVnDg9sN43g8KZgtCEiJ6h5w&usqp=CAU" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body" >
    <h5 class="card-title">Student</h5>
    <p class="card-text" ></p>
    <a href="StudentReg" class="btn btn-primary">Register</a>{'  '}
    <a href="Login" class="btn btn-primary">Login</a>
  </div>
</div></div>

    <div className="col-sm"><div class="card">
  <img src="data:image/jpeg;base64,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" class="card-img-top"alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Teacher</h5>
    <p class="card-text"></p>
    <a href="RegisterStaff" class="btn btn-primary">Register</a>{'  '} 


    <a href="#" class="btn btn-primary">Login</a>
</div></div>
</div>

    <div className="col-sm"><div class="card">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrp60P4ynUzC6wUzSKQudsYXSpKDzYrzpvCw&usqp=CAU" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Parent</h5>
    <p class="card-text"></p>
    <a href="ParentRegister" class="btn btn-primary ">Register</a>{'  '}
    <a href="ParentLogin" class="btn btn-primary ">Login</a>

  </div>
</div></div>

<div className="col-sm"><div class="card">
  <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Admin</h5>
    <p class="card-text"></p>
    <a href="AdminRegister" class="btn btn-primary">Register</a>{'  '}

    <a href="AdminLogin" class="btn btn-primary mr-3">Login</a>
</div>
</div>
</div>

      </div>
</div>

   </React.Fragment>
   </>
  )
  }
  export default Registration;