import React from 'react'
import { FaLinkedin , FaGithub , FaInstagram } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { GiTechnoHeart } from 'react-icons/gi'

const Footer = () => {
    return (
        
            <div className="footer ">
                <div className="row">
                    <div className="d-flex justify-content-center col-12  mt-4">
                      <h3 className='mr-1'><a href='https://www.linkedin.com/in/gopalakrishnan-v-s-a23510206/'><FaLinkedin /></a> </h3> 
                      <h3 className='mr-2'><a href='https://github.com/VivekSGopalakrishnan'><FaGithub /> </a></h3>
                      <h3 className='mr-2'><a href='https://www.instagram.com/vivek._.v02/'><FaInstagram /></a> </h3>
                      <h3 className='mr-2'><a href='mailto:vivekaed@gmail.com?subject=subject'><SiGmail /></a></h3>
                       
                    </div>
                    <div className="text-center col-12 mt-3">
                       <h5>Made with <GiTechnoHeart color='red'/> by Vivek</h5>
                    </div>
                </div>
            </div>
        
    )
}
export default Footer