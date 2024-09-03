import React, { useEffect } from "react";
import SliderJS from "../js/Slider";

// HiringPartners Component
const HiringPartners = () => {
  // Array to hold image URLs for the carousel
  const partnerLogos = [
    "https://skillcircle.in/wp-content/uploads/2024/03/7.png",
    "https://skillcircle.in/wp-content/uploads/2024/03/8.png",
    "https://skillcircle.in/wp-content/uploads/2024/03/7.png",
    "https://skillcircle.in/wp-content/uploads/2024/03/7.png",
    "https://skillcircle.in/wp-content/uploads/2024/03/7.png",
    "https://skillcircle.in/wp-content/uploads/2024/03/7.png",
    "https://skillcircle.in/wp-content/uploads/2024/03/7.png",
    "https://skillcircle.in/wp-content/uploads/2024/03/7.png",
  ];

  useEffect(()=>{
    SliderJS()
  },[])


  return (
    <div className="container-lg testimonials-stu">
      <div className="con-title" style={{paddingTop:'30px'}}>
        <h2>
          Hiring <span>Partners</span>
        </h2>
        <h4>
          We focus on the bright future of students, Deliver courses with
          several features
        </h4>
      </div>
      <div id="layer-testi"></div>
      <div id="main-testi">
        <ul id="slider-testi">
          {partnerLogos.map((logo, index) => (
            <li key={index}>
              <img src={logo} alt={`Partner ${index + 1}`} height="200px" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};




export default HiringPartners;
