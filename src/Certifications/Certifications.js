import React , { useEffect } from 'react'
import Aos from "aos";

const Certifications = () => {
    useEffect(() => {
        Aos.init({ duration : 2000});
    },[]);
    return (
        <div class="container">
            <div class="certifications">
                <div class="row mb-5 mt-5">
                    <div class="text-center col-lg-12 mt-5 mb-3"><h2>Certifications</h2></div>                  
                        <h4>
                        <div class="text-left col-lg-12 mb-4" data-aos="fade-right">AWS Cloud Operations</div>
                        <div class="text-left col-lg-12 mb-4" data-aos="fade-right">NPTEL Cloud Computing</div>
                        </h4>
                    </div>
                </div>
            </div>
    )
}

export default Certifications

