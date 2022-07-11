import React from "react";
import {FaMoon} from 'react-icons/fa';
import {FaSun} from 'react-icons/fa';
import Headroom from "react-headroom";
const Navbar = ({theme,toggleTheme}) => {
  console.log(theme);

    return(
      <Headroom>
      <nav class="navbar navbar-expand-lg sticky-top pt-4 ">
        <div class="container-fluid">
        <div class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <h3><i  class="fa fa-bars" ></i>
        </h3>
  </div>
  <div class="collapse navbar-collapse text-center" id="navbarText">
  <ul class="navbar-nav my-auto mr-auto align-items-center" id="navbar-content">
      <li class="nav-item mr-3 mb-sm-2">
          <a class="nav-links" href="home">
            <h4><i class="fa fa-home" ></i> Home</h4> 
          </a>
          </li>
          <li class="nav-item mr-3 mb-sm-2">
          <a class="nav-links" href="#skills">
            <h4><i class="fa fa-cogs" aria-hidden="true"></i> Skills</h4>
          </a>
          </li>
          <li class="nav-item mr-3 mb-sm-2">
          <a class="nav-links" href="#timeline">
            <h4><i class="far fa-hourglass"></i> Timeline</h4>
          </a>
          </li>
          
          {/* <li class="nav-item mr-3 mb-sm-2">
          <a class="nav-links" href="#project">
            <h4><i class="fas fa-project-diagram"></i> Projects</h4>
          </a>
          </li> */}
          </ul>
          
          <span class="toggle " onClick={toggleTheme}>
          {
              theme ==='light'? <FaMoon size="40px" />:<FaSun size="40px" />
          }
      </span>
      </div>
      </div>
      </nav> 
      </Headroom>
        
    )
}

export default Navbar