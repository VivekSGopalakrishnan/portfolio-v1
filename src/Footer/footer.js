import React from 'react'
import { FaLinkedin , FaGithub , FaInstagram } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { GiTechnoHeart } from 'react-icons/gi'

const Footer = () => {
    return (
        
            <div className="footer ">
                <div className="row">
                    <div className="text-center col-12 mt-4">
                      <h3> <FaLinkedin /> <FaGithub /> <FaInstagram /> <SiGmail /> </h3> 
                    </div>
                    <div className="text-center col-12 mt-3">
                       <h5>Made with <GiTechnoHeart color='red'/> by Vivek</h5>
                    </div>
                </div>
            </div>
        
    )
}
export default Footer