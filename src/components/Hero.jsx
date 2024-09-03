import React from 'react';
import './Caraousel.css'
// Carousel Component
const Carousel = () => {
  return (
    <section>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="item slider1 active">
            <img src="https://digitalgururavi.com/images/slider/1.jpg" alt="" />
            <div className="carousel-caption slider-con content">
              <h2 style={{ float: 'left' }}>360° Digital Marketing Program by <span>DGR</span></h2>
              <p className='p'>Learn More & Earn More with Digital Era.</p>
              <a href="#" className="bann-btn-1">All Courses</a>
              <a href="#" className="bann-btn-2">Read More</a>
            </div>
          </div>
          <div className="item">
            <img src="https://digitalgururavi.com/images/slider/11.png" alt="" />
            <div className="carousel-caption slider-con content">
              <h2>Web Design and Development By <span>Experts </span></h2>
              <p>Become a Developer with us in just a few months.</p>
              <a href="#" className="bann-btn-1">Registration</a>
              <a href="#" className="bann-btn-2">Read More</a>
            </div>
          </div>
          <div className="item">
            <img src="https://digitalgururavi.com/images/slider/5.png" alt="" />
            <div className="carousel-caption slider-con content">
              <h2>Internship Program with Live Project & <span>Certificate</span></h2>
              <p>Develop a plan for the next steps in your career</p>
              <a href="#" className="bann-btn-1">All Courses</a>
              <a href="#" className="bann-btn-2">Read More</a>
            </div>
          </div>
        </div>

        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <i className="fa fa-chevron-left slider-arr"></i>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <i className="fa fa-chevron-right slider-arr"></i>
        </a>
      </div>
    </section>
  );
};

// ServiceSection Component
const ServiceSection = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="wed-hom-ser">
            <ul>
              <li>
                <a href="awards.html" className="waves-effect waves-light btn-large wed-pop-ser-btn">
                  <img src="https://digitalgururavi.com/images/icon/h-ic1.png" alt="" /> Education
                </a>
              </li>
              <li>
                <a href="admission.html" className="waves-effect waves-light btn-large wed-pop-ser-btn">
                  <img src="https://digitalgururavi.com/images/icon/h-ic2.png" alt="" /> Events
                </a>
              </li>
              <li>
                <a href="all-courses.html" className="waves-effect waves-light btn-large wed-pop-ser-btn">
                  <img src="https://digitalgururavi.com/images/icon/h-ic4.png" alt="" /> Courses
                </a>
              </li>
              <li>
                <a href="seminar.html" className="waves-effect waves-light btn-large wed-pop-ser-btn">
                  <img src="https://digitalgururavi.com/images/icon/h-ic3.png" alt="" /> Seminar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const Hero = () => {
  return (
    <div>
      <Carousel />
      <ServiceSection />
    </div>
  );
};

export default Hero;
