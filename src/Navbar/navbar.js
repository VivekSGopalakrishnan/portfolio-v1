import React , { useEffect } from "react";
import Aos from "aos";
import logo1 from '../Assets/logo-1.png'
import logo2 from '../Assets/logo-2.png'
// import { useState } from "react";
import {FaMoon} from 'react-icons/fa';
import {FaSun} from 'react-icons/fa';
import Headroom from "react-headroom";
const Navbar = ({theme,toggleTheme}) => {
  useEffect(() => {
    Aos.init({ duration : 2000});
},[]);
  // console.log(theme);
  // const [close, setClose] = useState(true);
  // const handleClick = () => setClose(!close)
    return(
      <Headroom>
      <nav class="navbar navbar-expand-lg sticky-top pt-4 ">
        <div class="container-fluid">

        {/* <div class="navbar-toggler" type="button" close={close} onClick={handleClick} data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <h3><i  className={close ? "fa fa-bars" : "fa fa-close" }></i>
        </h3>
  </div>
  <div class="collapse navbar-collapse text-center" id="navbarText"> */}
  {/* <ul class="navbar-nav my-auto mr-auto align-items-center" id="navbar-content">
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
          
          <li class="nav-item mr-3 mb-sm-2">
          <a class="nav-links" href="#project">
            <h4><i class="fas fa-project-diagram"></i> Projects</h4>
          </a>
          </li> 
          </ul> */}
          <div className="toggle mr-auto text-left"  data-aos="fade-in">
          {
              theme ==='light'? <img src={logo2} alt="logo2"/> : <img src={logo1} alt="logo1"/>
          }
      </div>

          <div className="toggle ml-auto text-right" onClick={toggleTheme} data-aos="fade-in">
          {
              theme ==='light'? <FaMoon size="40px" />:<FaSun size="40px" />
          }
      </div>
      
      </div>
      {/* </div> */}
      </nav> 
      </Headroom>
        
    )
}

export default Navbar
