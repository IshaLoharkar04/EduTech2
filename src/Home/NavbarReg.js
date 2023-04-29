import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import "./navbarreg.css"
export default function NavbrReg () {
  return (
    
  <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li>
      <a class=" nav-link-1" aria-current="page" href="#" >EduTech</a>
      </li>
      </ul>
        <li class="nav-item">
        
          <a class="nav-link active" aria-current="page" href="/Home"><HomeIcon/></a>
        </li>
        {'  '}
        <li class="nav-item">
        
          <a class="nav-link active" aria-current="page" href="/Home"><LanguageIcon/></a>
        </li>
        {'  '}
        <li class="nav-item">
      
          <a class="nav-link active" aria-current="page" href="/Home"><DarkModeOutlinedIcon/></a>
        </li>
        {'  '}
        <li class="nav-item">
        
        <a class="nav-link active" aria-current="page" href="/Home"><FullscreenExitOutlinedIcon/></a>
      </li>
      {'  '}
        
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li> 
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Person
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Student</a></li>
            <li><a class="dropdown-item" href="#">Teacher</a></li>
            <li><a class="dropdown-item"href="#">Parent</a></li>
            <li><a class="dropdown-item" href="#">Admin</a></li>
          </ul> */}
        
        {/* <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
       
       
    

           
       {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      {/* </li>
      </ul> */}
    </div>
  </div>
  
</nav>

)
}