import React,{useEffect} from 'react'
import pp1 from '../Assets/pp-1.jpg'
import pp2 from '../Assets/pp-2.jpg'
import Aos from "aos";
import "aos/dist/aos.css";

const Home = ({theme}) =>{
    useEffect(() => {
        Aos.init({ duration : 1000});
    },[]);
    return(
<div class="container">
    <div class="home">
        <div class="row align-items-center mt-5 mb-5">
            <div class="text-center col-lg-6 mb-3">
            <h1 class= "content" data-aos="fade-in">
            Hello world!<br/>This is Vivek<br/>An UI/UX developer
            </h1>   
        </div>
            <div class="text-center col-lg-6">
                <div class="pic">
                    <div class="image" data-aos="fade-in">
                    { 
                    theme ==='light'? <img src={pp1} class="rounded-circle" alt='pp1' height="270"/>:<img src={pp2} class="rounded-circle" alt='pp2' height="270"/> 
                    }
                    </div>  
                </div>
            </div>
        </div>
    </div>
</div>

    )
}
export default Home