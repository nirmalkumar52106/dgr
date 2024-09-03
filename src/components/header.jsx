import React, { useEffect } from 'react';
import Customjs from '../js/custom.js';
import { useNavigate } from 'react-router-dom';
import logo from '../../src/assets/logo.png'



const MobileMenu = () => {

  let navigate = useNavigate()

  return (
    <section>
      <div class="ed-mob-menu">
        <div class="ed-mob-menu-con">
          <div class="ed-mm-left">
            <div class="wed-logo">
              <a href="/"><img src={logo} alt="" />
              </a>
            </div>
          </div>
          <div class="ed-mm-right">
            <div class="ed-mm-menu">
              <a href="#!" class="ed-micon"><i class="fa fa-bars"></i></a>
              <div class="ed-mm-inn">
                <a href="#!" class="ed-mi-close"><i class="fa fa-times"></i></a>
                <h4>All Courses</h4>
                <ul>
                  <li><a onClick={()=>{navigate("/course-detail")}} target="_blank">SEO</a></li>
                  <li><a onClick={()=>{navigate("/course-detail")}} target="_blank">SMO </a></li>
                  <li><a onClick={()=>{navigate("/course-detail")}}target="_blank">SMM </a></li>
                  <li><a onClick={()=>{navigate("/course-detail")}} target="_blank">SEM</a></li>
                  <li><a onClick={()=>{navigate("/course-detail")}}target="_blank">Content Marketing</a></li>
                  <li><a onClick={()=>{navigate("/course-detail")}}target="_blank">Wordpress</a></li>
                  <li><a href="">Affiliate Marketing</a></li>

                  <li><a href="">Google Adsense</a></li>
                  <li><a href="">WordPress </a></li>
                  <li><a href="">Whatsapp Marketing</a></li>
                  <li><a href="">Remarketing</a></li>
                  <li><a href="">Google Analytic</a></li>
                  <li><a href="">Google Console</a></li>
                </ul>


                <h4>Programming Course</h4>
                <ul>
                  <li><a href=""> Python Course</a></li>
                  <li><a href="">Java Course</a></li>
                  <li><a href="">Dashboard exams</a></li>
                  <li><a href=""> C/C++ Programming </a></li>
                  <li><a href="">PHP Course</a></li>
                  <li><a href="">Full Stack Course</a></li>

                </ul>


                <h4>Web Designing <br />(Frontend)</h4>
                <ul>

                  <li><a href="">HTML</a></li>
                  <li><a href="">CSS</a></li>
                  <li><a href="">JAVASCRIPT</a></li>
                  <li><a href="">BOOTSTRAP</a></li>
                  <li><a href="">Figma</a></li>
                  <li><a href="">React Js</a></li>

                </ul>
                <h4 class="ed-dr-men-mar-top">Web Development (Backend)</h4>
                <ul>

                  <li><a href="">Wordpress</a></li>
                  <li><a href="">PHP Course</a></li>
                  <li><a href="">JavaScript Course</a></li>
                  <li><a href="">Bootstrap Course</a></li>
                  <li><a href=""> Laravel Course</a></li>
                  <li><a href="">Node JS Course</a></li>
                  <li><a href=""> Angular JS Course</a></li>
                  <li><a href=""> React JS Course</a></li>
                  <li><a href="">Mern Stack Course</a></li>

                </ul>


                <h4 class="ed-dr-men-mar-top">DATA BASE<br /> MANAGEMENT </h4>
                <ul>

                  <li><a href="">MS-SQL</a></li>
                  <li><a href="">MYSQL</a></li>
                  <li><a href="">POSTGRES</a></li>

                </ul>

                <h4 class="ed-dr-men-mar-top">Cloud Computing</h4>
                <ul>

                  <li><a href="">AWS</a></li>
                  <li><a href="">AZURE</a></li>
                  <li><a href="">LINUX DOCKER</a></li>
                  <li><a href="">KUBERNETES</a></li>


                </ul>

                <h4>User Account</h4>

                <ul>
                  <li><a href="">Free Demo</a> </li>
                  <li><a href="#!" data-toggle="modal" data-target="#modal1">Sign In</a></li>
                  <li><a href="#!" data-toggle="modal" data-target="#modal2">Register</a></li>
                </ul>
                <h4>All Pages</h4>
                <ul>
                  <li><a onClick={()=>{navigate("/")}}>Home</a></li>
                  <li><a onClick={()=>{navigate("/internship")}}>Intrnship</a></li>
                  <li><a onClick={()=>{navigate("/review")}}>Reviews</a></li>
                  <li><a onClick={()=>{navigate("/placement")}}>Placement</a></li>

                  <li><a onClick={()=>{navigate("/blog")}}>Blog</a></li>

                  <li><a onClick={()=>{navigate("/about")}}>About us</a></li>
                  <li><a onClick={()=>{navigate("/contact")}}>Contact us</a></li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// TopBar Component
const TopBar = () => {

  return (
    <div className="ed-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="ed-com-t1-left">
              <ul>
                <li><a href="#">Contact: 305, Pink City 2 Plaza, Joshi Marg, Jhotwara, Jaipur </a></li>
                <li><a href="#">Phone: +91 90792 69066</a></li>
              </ul>
            </div>
            <div className="ed-com-t1-right">
              <ul>
                <li><a href="demo.html"> Free Demo</a></li>
                <li><a href="#!" data-toggle="modal" data-target="#modal1">Sign In</a></li>
                <li><a href="#!" data-toggle="modal" data-target="#modal2">Sign Up</a></li>
              </ul>
            </div>
            <div className="ed-com-t1-social">
              <ul>
                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Header Component
const Header = () => {
  let navigate = useNavigate()

  return (
    <div className="top-logo" data-spy="affix" data-offset-top="250">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="wed-logo">
              <a href="/"><img src={logo} alt="Logo" /></a>
            </div>
            <div className="main-menu">
              <ul>
                <li><a onClick={()=>{navigate("/")}}>Home</a></li>
                <li className="cour-menu">
                  <a onClick={()=>{navigate("/all-course")}} className="mm-arr">All Courses</a>
                  <MegaMenu />
                </li>
                <li className="admi-menu">
                  <a onClick={()=>{navigate("/internship")}} className="mm-arr">Internship</a>
                  <InternshipMenu />
                </li>
                <li><a onClick={()=>{navigate("/review")}}>Reviews</a></li>
                <li><a onClick={()=>{navigate("/placement")}}>Placement</a></li>
                <li><a onClick={()=>{navigate("/blog")}}>Blog</a></li>
                <li className="about-menu">
                  <a onClick={()=>{navigate("/about")}} className="mm-arr">About us</a>
                  <AboutMenu />
                </li>
                <li><a onClick={()=>{navigate("/contact")}}>Contact us</a></li>
              </ul>
            </div>
          </div>
          <div className="all-drop-down-menu"></div>
        </div>
      </div>
    </div>
  );
};

// MegaMenu Component
const MegaMenu = () => {
  return (
    <div className="mm-pos">
      <div className="cour-mm m-menu">
        <div className="m-menu-inn">
          <div className="mm1-com mm1-cour-com mm1-s3">
            <h4>Digital Marketing<br />Course</h4>
            <ul>
              <li><a onClick={()=>{navigate("/course-detail")}}>SEO Course</a></li>
              <li><a onClick={()=>{navigate("/course-detail")}} target="_blank">SMO</a></li>
              <li><a onClick={()=>{navigate("/course-detail")}}target="_blank">SMM</a></li>
              <li><a onClick={()=>{navigate("/course-detail")}} target="_blank">SEM</a></li>
              <li><a onClick={()=>{navigate("/course-detail")}} target="_blank">Content Marketing</a></li>
              <li><a onClick={()=>{navigate("/course-detail")}} target="_blank">WordPress</a></li>
              <li><a href="https://www.facebook.com/">Affiliate Marketing</a></li>
              <li><a href="#">Email Marketing</a></li>
              <li><a href="#">Google Adsense</a></li>
              <li><a href="#">Whatsapp Marketing</a></li>
              <li><a href="#">Remarketing</a></li>
              <li><a href="#">Google Analytic</a></li>
              <li><a href="#">Google Console</a></li>
            </ul>
          </div>
          <div className="mm1-com mm1-cour-com mm1-s3">
            <h4>Programming<br />Course</h4>
            <ul>
              <li><a href="#">Java Course</a></li>
              <li><a href="#">Dashboard exams</a></li>
              <li><a href="#">C/C++ Programming</a></li>
              <li><a href="#">PHP Course</a></li>
              <li><a href="#">Full Stack Course</a></li>
            </ul>
            <h4 className="ed-dr-men-mar-top">App Development <br />Course</h4>
            <ul>
              <li><a href="#">Android App Development Course</a></li>
              <li><a href="#">Flutter App Development Course</a></li>
            </ul>
          </div>
          <div className="mm1-com mm1-cour-com mm1-s3">
            <h4>Web Designing <br />(Frontend)</h4>
            <ul>
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">JAVASCRIPT</a></li>
              <li><a href="#">BOOTSTRAP</a></li>
              <li><a href="#">Figma</a></li>
              <li><a href="#">React Js</a></li>
            </ul>
            <h4 className="ed-dr-men-mar-top">Web Development (Backend)</h4>
            <ul>
              <li><a href="#">Wordpress</a></li>
              <li><a href="#">PHP Course</a></li>
              <li><a href="#">JavaScript Course</a></li>
              <li><a href="#">Bootstrap Course</a></li>
              <li><a href="#">Laravel Course</a></li>
              <li><a href="#">Node JS Course</a></li>
              <li><a href="#">Angular JS Course</a></li>
              <li><a href="#">React JS Course</a></li>
              <li><a href="#">Mern Stack Course</a></li>
            </ul>
          </div>
          <div className="mm1-com mm1-cour-com mm1-s3">
            <h4 className="ed-dr-men-mar-top">DATA BASE<br /> MANAGEMENT</h4>
            <ul>
              <li><a href="#">MS-SQL</a></li>
              <li><a href="#">MYSQL</a></li>
              <li><a href="#">POSTGRES</a></li>
            </ul>
          </div>
          <div className="mm1-com mm1-cour-com mm1-s4">
            <h4>Data Science <br /> Course</h4>
            <ul>
              <li><a href="#">Python</a></li>
              <li><a href="#">R Course</a></li>
              <li><a href="#">Numpy</a></li>
              <li><a href="#">Panda</a></li>
              <li><a href="#">Kaggle</a></li>
            </ul>
            <h4 className="ed-dr-men-mar-top">Cloud <br />Computing</h4>
            <ul>
              <li><a href="#">AWS</a></li>
              <li><a href="#">AZURE</a></li>
              <li><a href="#">LINUX DOCKER</a></li>
              <li><a href="#">KUBERNETES</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// InternshipMenu Component
const InternshipMenu = () => {
  return (
    <div className="mm-pos">
      <div className="admi-mm m-menu">
        <div className="m-menu-inn">
          <div className="mm2-com mm1-com mm1-s1">
            <div className="ed-course-in">
              <a className="course-overlay" href="internship.php">
                <img src="https://digitalgururavi.com/images/h-about1.jpg" alt="Web Development Internship" />
                <span>Web Development<br />Internship</span>
              </a>
            </div>
            <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
            <a href="internship.php" className="mm-r-m-btn">Read more</a>
          </div>
          <div className="mm2-com mm1-com mm1-s1">
            <div className="ed-course-in">
              <a className="course-overlay" href="internship.php">
                <img src="https://digitalgururavi.com/images/h-about.jpg" alt="Digital Marketing Internship" />
                <span>Digital Marketing<br />Internship</span>
              </a>
            </div>
            <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
            <a href="internship.php" className="mm-r-m-btn">Read more</a>
          </div>
          <div className="mm2-com mm1-com mm1-s1">
            <div className="ed-course-in">
              <a className="course-overlay" href="internship.php">
                <img src="https://digitalgururavi.com/images/h-about1.jpg" alt="App Development Internship" />
                <span>App Development<br />Internship</span>
              </a>
            </div>
            <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
            <a href="internship.php" className="mm-r-m-btn">Read more</a>
          </div>
          <div className="mm2-com mm1-com mm1-s1">
            <div className="ed-course-in">
              <a className="course-overlay" href="internship.php">
                <img src="https://digitalgururavi.com/images/h-about.jpg" alt="Graphic Designing Internship" />
                <span>Graphic Designing <br /> Internship</span>
              </a>
            </div>
            <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
            <a href="internship.php" className="mm-r-m-btn">Read more</a>
          </div>
          {/* <div className="mm2-com mm1-com mm1-s4">
            <div className="ed-course-in">
              <a className="course-overlay" href="internship.php">
                <img src="images/h-about1.jpg" alt="Data Science Internship" />
                <span>Data Science <br />Internship</span>
              </a>
            </div>
            <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
            <a href="internship.php" className="mm-r-m-btn">Read more</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

// AboutMenu Component
const AboutMenu = () => {
  return (
    <div class="mm-pos">
      <div class="about-mm m-menu">
        <div class="m-menu-inn">
          <div class="mm1-com mm1-s1">
            <div class="ed-course-in">
              <a class="course-overlay menu-about" href="about.php">
                <img src="https://digitalgururavi.com/images/h-about.jpg" alt=""/>
                  <span>DGR -Digital Guru Ravi</span>
              </a>
            </div>
          </div>
          <div class="mm1-com mm1-s2">
            <p>Want to change the world? At Berkeley we�re doing just that. When
              you join the Golden Bear community, you�re part of an
              institution that shifts the global conversation every single
              day.</p>
            <a href="about.php" class="mm-r-m-btn">Read more</a>
          </div>
          <div class="mm1-com mm1-s3">
            <ul>
              <li><a href="about.php">Our Vision</a></li>
              <li><a href="about.php">Our Mission</a></li>
              <li><a href="about.php">Our History</a></li>
              <li><a href="about.php">Certifications</a></li>

            </ul>
          </div>
          <div class="mm1-com mm1-s4">
            <ul>
              <li><a href="about.php">Smart Classes</a></li>
              <li><a href="about.php">Ranked No. 1</a></li>
              <li><a href="about.php">Lifetime Access</a></li>
              <li><a href="about.php">Expert Faculties</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// SearchSection Component
const SearchSection = () => {
  return (
    <section className="search-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="search-form">
              <form className="">
                <div class="sf-type">
                  <div class="sf-input">
                    <input type="text" id="sf-box" placeholder="" />
                  </div>
                  <div class="sf-list">
                  </div>
                </div>
                <div class="sf-submit">
                  <input type="submit" value="Search Course" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const Navbar = () => {

  useEffect(()=>{
    Customjs()
  },[])

  return (
    <>
      <TopBar />
      <MobileMenu />
      <Header />
      <SearchSection />
    </>
  );
};

export default Navbar;
