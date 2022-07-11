import React,{useEffect} from 'react'
import { FaNodeJs , FaJava , FaHtml5 , FaCss3 , FaJs , FaReact , FaSass , FaBootstrap } from 'react-icons/fa';
import { DiMongodb , DiMysql} from "react-icons/di";
import { SiPostman , SiNextdotjs , SiTypescript , SiAdobephotoshop , SiAdobeillustrator , SiGithub , SiExpress , SiFigma} from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
 useEffect(() => {
     Aos.init({ duration : 1500});
 },[]);
    return (
<div className="skills" id="skills">
    <div className="container">
        <div className="row">
            <div className="text-center col-12 my-3">
                <h2>Skills</h2>
            </div>
            
            <div data-aos="fade-right" className="text-center col-4 col-md-4  mb-3 mb-lg-5"><h3>
                <FaNodeJs color='3C873A'/><br/>NodeJs
            </h3></div>

            <div data-aos="fade-up" className="text-center col-4 col-md-4 "><h3>
                <FaHtml5 color='e34f26'/><br/>HTML
            </h3></div>

            <div data-aos="fade-left" className="text-center col-4 col-md-4 "><h3>
                <FaCss3 color='264de4'/><br/>CSS
            </h3></div>
           
            <div data-aos="fade-right" className="text-center col-4 col-md-4  mb-3 mb-lg-5"><h3>
                <FaJs color='FFD600'/><br/>Javascript
            </h3></div>

            <div data-aos="fade-up" className="text-center col-4 col-sm-4 col-md-4 "><h3>
                <FaReact color='00d8ff'/><br/>React
            </h3></div>

            <div data-aos="fade-left" className="text-center col-4 col-sm-4 col-md-4 "><h3>
                <FaSass color='F06292'/><br/>Sass</h3></div>

            <div data-aos="fade-right" className="text-center col-4  mb-3 mb-lg-5"><h3>
                <FaBootstrap color='563d7c'/><br/>Bootstrap
            </h3></div>

            <div data-aos="fade-up" className="text-center col-4 "><h3>
                <DiMysql color='00758F'/><br/>Mysql
            </h3></div>

            <div data-aos="fade-left" className="text-center col-4 "><h3>
                <FaJava color='f89820'/><br/>Java
            </h3></div>

            <div data-aos="fade-right" className="text-center col-4  mb-3 mb-lg-5"><h3>
                <DiMongodb color='4DB33D'/><br/>Mongodb
            </h3></div>
            <div data-aos="fade-up" className="text-center col-4 "><h3>
                <SiPostman color='EF5B25'/><br/>Postman
            </h3></div>

            <div data-aos="fade-left" className="text-center col-4 "><h3>
                <SiNextdotjs/><br/>Nextjs
            </h3></div>

            <div data-aos="fade-right" className="text-center col-4  mb-3 mb-lg-5"><h3>
                <SiTypescript color='007acc'/><br/>Typescript
            </h3></div>

            <div data-aos="fade-up" className="text-center col-4 "><h3>
                <SiAdobephotoshop color='3C327B'/><br/>Photoshop
            </h3></div>

            <div data-aos="fade-left" className="text-center col-4 "><h3>
                <SiAdobeillustrator color='823C02'/><br/>Illustrator
            </h3></div>
            
            <div data-aos="fade-right" className="text-center col-4  mb-5"><h3>
                <SiFigma/><br/>Figma
            </h3></div>

            <div data-aos="fade-up" className="text-center col-4 "><h3>
                <SiGithub /><br/>Github
            </h3></div>

            <div data-aos="fade-left" className="text-center col-4 "><h3>
                <SiExpress /><br/>Express
            </h3></div>
             
            </div>
        </div>   
    </div>
    )
}

export default Skills