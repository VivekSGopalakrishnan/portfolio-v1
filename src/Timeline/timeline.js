import React, { useEffect} from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { GiBrain } from 'react-icons/gi';
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import Aos from "aos";
import "aos/dist/aos.css";
const Timeline = () => {
 
  const goToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
  };
    useEffect(() => {
        Aos.init({ duration : 1500});
    },[]);
    return (
<div className="timeline" id="timeline">
    <div className="container">
        <h2 className="timeline-title text-center col-lg-12 mt-5 mb-5">Timeline</h2>
        <div></div>
<VerticalTimeline>
  <VerticalTimelineElement
    
    class="vertical-timeline-element--club"
    date="2020 - present"
    icon={<GiBrain />}
  >
      <div data-aos="fade-in" className="content">
    <h3  className="vertical-timeline-element-title">Web developer at IEEE SRMIST</h3>
    <h4 className="vertical-timeline-element-subtitle">MAS - TN</h4>
    <p>
      Got promoted from Tech Lead in July, 2021.
      Collobrating with some of the brightest on projects.
    </p></div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--club"
    date="2021 - present"
    icon={<GiBrain />}
  ><div data-aos="fade-in" className='content'>
    <h3 className="vertical-timeline-element-title">Web developer at DSC SRMIST</h3>
    <h4 className="vertical-timeline-element-subtitle">MAS - TN</h4>
    <p>
      Developing projects with students of experience in AI/ML
    </p>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--college"
    date="2020-2024"
    icon={<MdSchool />}
  >
    <div data-aos="fade-in" className='content'>
    <h3 className="vertical-timeline-element-title">Student at SRMIST KTR</h3>
    <h4 className="vertical-timeline-element-subtitle">MAS - TN</h4>
    <p>
      Cuurrently pursuing a B.Tech Computer Science Engineering with specialization in Big Data Analytics 
    </p>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2018 - 2020"
    icon={<FaSchool />}
  ><div data-aos="fade-in" className='content'>
    <h3 className="vertical-timeline-element-title">Studied at National Model School</h3>
    <h4 className="vertical-timeline-element-subtitle">CJB - TN</h4>
    <p>Completed higher secondary at National Model CBSE school.
    </p>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2011-2018"
    icon={<FaSchool />}
  ><div data-aos="fade-in" className='content'>
    <h3 className="vertical-timeline-element-title">Studied at PSBB Millenium School</h3>
    <h4 className="vertical-timeline-element-subtitle">CJB - TN</h4>
    <p>Completed SSC at PSBB Millenium CBSE school.
    </p>
    </div>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--start"
    icon={<BsFillArrowUpCircleFill />}
    iconOnClick={goToTop}
  >
  </VerticalTimelineElement>
 
</VerticalTimeline>
</div>
</div>
    )
}
export default Timeline