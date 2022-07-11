import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

const Home = ({theme}) =>{
    useEffect(() => {
        Aos.init({ duration : 1500});
    },[]);
    return(
<div class="container">
    <div class="home">
        <div class="row align-items-center mt-5 mb-5">
            <div class="text-center col-lg-6 mb-3">
            <h1 class= "content" data-aos="fade-right">
            Hello world!<br/>This is Vivek<br/>An UI/UX developer
            </h1>   
        </div>
            <div class="text-center col-lg-6">
                <div class="pic">
                    <div class="image" data-aos="fade-left">
                    { 
                    theme ==='light'? <img src="pp-1.jpg" class="rounded-circle" alt='pp1' height="270"/>:<img src="pp-2.jpg" class="rounded-circle" alt='pp2' height="270"/> 
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