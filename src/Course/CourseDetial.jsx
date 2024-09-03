import React, { useEffect } from 'react'
import Hiring from '../components/Hiring'
import HiringPartners from '../components/Hiring'
import CourseSlider from './CourseSlider'

const CourseDetial = () => {


    return (
        <>

            <section class="container-lg">

                <div class="row max-mb-n50 p-0 m-0">

                    <div class="col-lg-8 col-12 order-lg-1 p-1">
                        <div class="course-details-wrapper">
                            <div class="course-nav-tab">
                                <ul class="nav">
                                    <li><a style={{ outline: 'none' }} class="active" data-bs-toggle="tab"
                                        href="#overview">Overview</a></li>
                                    <li><a style={{ outline: 'none' }} data-bs-toggle="tab" href="#curriculum">Curriculum</a></li>
                                    <li><a style={{ outline: 'none' }} data-bs-toggle="tab" href="#instructor">Instructor</a></li>
                                    <li><a style={{ outline: 'none' }} data-bs-toggle="tab" href="#reviews">Reviews</a></li>
                                    <li><a style={{ outline: 'none' }} data-bs-toggle="tab" href="#Certificate">Certificate</a></li>

                                </ul>
                            </div>
                            <div class="tab-content">
                                <div id="overview" class="tab-pane show active">
                                    <div class="course-overview">
                                        <div className="course-overview-head">
                                            <h6 class="title">Course Description:-</h6>
                                        </div>

                                        <p>Course Overview: Dive into the dynamic world of Social Media Marketing (SMM) with our comprehensive course designed to equip you with the skills and knowledge needed to thrive in today’s digital landscape. <br />
                                            Whether you're a beginner looking to understand the basics or a professional aiming to enhance your expertise, this course covers everything from foundational concepts to advanced strategies.</p>

                                        <div class="overview-course-video">
                                            <iframe
                                                title="Drive Digital Transformation With Platform Strategies | Info-Tech Analyst Perspective"
                                                src="https://www.youtube.com/embed/m-X1ExlQ9uE?feature=oembed"></iframe>
                                        </div>
                                        <div className="course-overview-head">
                                            <h6 className="title">Program Key Features:-</h6>
                                        </div>
                                        <div className="Coursedetial-icon">
                                            <div>
                                                <i class="fa-solid fa-signal"></i>
                                                <span className="Ftext">6 Months of Free Live Advance Learning</span>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-medal"></i>
                                                <span className="Ftext">Advanced Simulation Training with Students
                                                </span>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-briefcase"></i>
                                                <span className="Ftext">29+ Modules with Globally Recognized Certification
                                                </span>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-trophy"></i>
                                                <span className="Ftext">10+ Projects with Dedicated Mentors from Industry</span>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-list-check"></i>
                                                <span className="Ftext">Interview Preparation Sessions by HR Experts</span>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-handshake" />
                                                <span className="Ftext">100% Placement Guarantee at Our In-House Companies
                                                </span>
                                            </div>
                                            <div>
                                                <i class="fa-brands fa-slideshare"></i>
                                                <span className="Ftext">Lifetime Free Mentorship
                                                </span>
                                            </div>
                                        </div>

                                        {/* ///////////////////////////////////////////////////////////////////////////////////// */}

                                        <div className="course-overview-head mt-4">
                                            <h6 className="title">What Will You Learn from This Course?</h6>
                                        </div>
                                        <div className="Coursedetial-icon">
                                            <div>
                                                <i class="fa-solid fa-hand-point-right"></i>
                                                <span className="Ftext">The Functioning of the Social Media Landscape
                                                </span>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-hand-point-right"></i>
                                                <span className="Ftext">Creating and Managing Social Media Campaigns:- <span> Learn how to craft compelling campaigns that resonate with your target audience and achieve business goals.</span>
                                                </span>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-hand-point-right"></i>
                                                <span className="Ftext">Content Strategy and Planning:- <span> Master the art of creating engaging content that drives user interaction and builds brand loyalty.
                                                </span>
                                                </span>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-hand-point-right"></i>
                                                <span className="Ftext">Working on Live Projects Under Expert Guidance:- <span>Apply your learning to real-world scenarios, with projects designed to mirror actual industry challenges.</span></span>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-hand-point-right"></i>
                                                <span className="Ftext">Advanced Courses Like:-</span>
                                                <li>Social Media Advertising and Analytics</li>
                                                <li>Influencer Marketing and Community Building</li>
                                                <li>Crisis Management and Social Media Ethics</li>

                                            </div>
                                        </div>
                                        {/* ///////////////////////////////////////////////////////////////////////////////////// */}
                                        <div className="course-overview-head mt-4">
                                            <h6 className="title">Why Choose DGR Academy for Social Media Marketing?</h6>
                                        </div>
                                        <div className="Coursedetial-icon">
                                            <div>
                                                <i class="fa-solid fa-hand-point-right"></i>
                                                <span className="Ftext">Expert Instructors:- <span>Learn from professionals who have successfully managed social media campaigns for top brands.
                                                </span>
                                                </span>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-hand-point-right"></i>
                                                <span className="Ftext">Practical Training:- <span> Engage in hands-on exercises that prepare you for real-world SMM challenges.
                                                </span>
                                                </span>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-hand-point-right"></i>
                                                <span className="Ftext">Industry-Relevant Certification:-<span> Earn a certification that’s recognized by employers and can boost your career prospects.
                                                </span>
                                                </span>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-hand-point-right"></i>
                                                <span className="Ftext">Lifetime Support:-<span> Enjoy continuous access to mentorship, resources, and networking opportunities.</span></span>
                                            </div>
                                     </div>
                                        {/* ///////////////////////////////////////////////////////////////////////////////////// */}
                                        <div className="course-overview-head mt-4">
                                            <h6 className="title">Who Should Join This Course?</h6>
                                        </div>
                                        <div className="Coursedetial-icon">
                                            <div>
                                                <i class="fa-solid fa-hand-point-right"></i>
                                                <span className="Ftext">Aspiring Social Media Marketers:- <span> Those looking to start a career in SMM.
                                                </span>
                                                </span>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-hand-point-right"></i>
                                                <span className="Ftext">Business Owners:- <span> Individuals wanting to enhance their business’s online presence.
                                                </span>
                                                </span>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-hand-point-right"></i>
                                                <span className="Ftext">Marketing Professionals:- <span>Anyone aiming to add social media marketing to their skill set.

                                                </span>
                                                </span>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-hand-point-right"></i>
                                                <span className="Ftext">Freelancers and Consultants:- <span> Those offering SMM services and seeking to upgrade their expertise.</span></span>
                                            </div>
                                        </div>
                                        {/* <div><i class="fa-solid fa-circle fs-6"></i></div>
                                                        <div><i class="fa-solid fa-circle fs-6"></i></div>
                                                        <div><i class="fa-solid fa-circle fs-6"></i></div> */}


                                        {/* <p>In this two-week course, we’ll step through major challenges within corporate IT and
                                    how to address them with the disciplined use of design thinking, Lean Startup, and
                                    agile as a team framework.</p>

                                <p>Translate your work on the Canvas to specific charters in IT. Rapidly prototype
                                    strategically-aligned processes for implementation within your IT infrastructure.
                                    How do you define a customer-centric strategy you can actually execute? To do
                                    strategic IT, you’ve got to have a strategy! Ideally, you need one that’s easy to
                                    understand and use as a clear basis for action.</p>

                                <p>That’s what you’ll learn in this course.</p>

                                <h3 class="title">A Short Description</h3>

                                <p>A customer-centric way of doing business is a way that provides a positive customer
                                    experience before and after the sale in order to drive repeat business, enhance
                                    customer loyalty and improve business growth.</p>

                                <p>But, a customer-centric company is more than a company that offers good service. Both
                                    Amazon and Zappos are prime examples of brands that are customer-centric and have
                                    spent years creating a culture around the customer and their needs. Their commitment
                                    to delivering customer value is genuine – In fact, Zappos is happy to fire employees
                                    if they do not fit within their customer-centric culture!</p>

                                <p>But, how important is being customer-centric? The good news is that’s becoming very
                                    important! Econsultancy recently asked what the most important characteristic is in
                                    order to establish a truly “digital-native” culture. The answer to that question and
                                    leading the responses with 58% was to be customer-centric. </p> */}

                                        <p>Enroll in this course to find out.</p>

                                    </div>
                                </div>

                                <div id="curriculum" class="tab-pane">
                                    <div class="course-curriculum">
                                        <ul class="curriculum-sections">
                                            <li class="single-curriculum-section">
                                                <div class="section-header">
                                                    <div class="section-left">

                                                        <h5 class="title">Program Curriculum</h5>
                                                        <p class="section-desc">General introduction of Program Curriculum</p>

                                                    </div>
                                                </div>
                                                <ul class="section-content">

                                                    <li class="course-item">

                                                        <div class="accordion accordion-flush" id="accordionFlushExample">
                                                            <div class="accordion-item">
                                                                <h2 class="accordion-header" id="flush-headingOne">
                                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                        <h5>Module 1: Introduction to Social Media Marketing</h5>
                                                                    </button>
                                                                </h2>
                                                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                                    <div class="accordion-body">
                                                                        <ul>
                                                                            <li>Overview of SMM</li>
                                                                            <li>Evolution of Social Media and its Impact on Marketing</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="accordion-item">
                                                                <h2 class="accordion-header" id="flush-headingTwo">
                                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                        <h5>Module 2: Building a Social Media Strategy</h5>
                                                                    </button>
                                                                </h2>
                                                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                                    <div class="accordion-body">
                                                                        <ul>
                                                                            <li>Audience Research and Targeting</li>
                                                                            <li>Crafting a Winning Social Media Plan</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="accordion-item">
                                                                <h2 class="accordion-header" id="flush-headingThree">
                                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                        <h5>Module 3: Content Creation and Curation</h5>
                                                                    </button>
                                                                </h2>
                                                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                                    <div class="accordion-body">
                                                                        <ul>
                                                                            <li>Designing Content for Social Media Platforms</li>
                                                                            <li>Visual Storytelling and Video Content</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="accordion-item">
                                                                <h2 class="accordion-header" id="flush-headingFour">
                                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                        <h5>Module 4: Social Media Advertising</h5>
                                                                    </button>
                                                                </h2>
                                                                <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                                                    <div class="accordion-body">
                                                                        <ul>
                                                                            <li>Facebook, Instagram, and LinkedIn Ads</li>
                                                                            <li>Budgeting and Bidding Strategies</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="accordion-item">
                                                                <h2 class="accordion-header" id="flush-headingFive">
                                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                        <h5>Module 5: Analytics and Reporting</h5>
                                                                    </button>
                                                                </h2>
                                                                <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                                                    <div class="accordion-body">
                                                                        <ul>
                                                                            <li>Measuring Campaign Success with Social Media Metrics</li>
                                                                            <li>Tools for Social Media Analysis</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="accordion-item">
                                                                <h2 class="accordion-header" id="flush-headingSix">
                                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                                                        <h5>Module 6: Advanced SMM Techniques</h5>
                                                                    </button>
                                                                </h2>
                                                                <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                                                    <div class="accordion-body">
                                                                        <ul>
                                                                            <li>Influencer Marketing and Collaborations</li>
                                                                            <li>Community Management and Engagement</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="accordion-item">
                                                                <h2 class="accordion-header" id="flush-headingSeven">
                                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                                                        <h5>Module 7: Capstone Project</h5>
                                                                    </button>
                                                                </h2>
                                                                <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                                                    <div class="accordion-body">
                                                                        <ul>
                                                                            <li>Develop and Execute a Comprehensive Social Media Campaign</li>
                                                                            <li>Analyze Performance and Present Findings</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </li>




                                                </ul>
                                            </li>



                                        </ul>
                                    </div>
                                </div>

                                <div id="instructor" class="tab-pane">
                                    <div class="course-instructor">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="profile-image">
                                                    <img src="images/30.png" alt="profile" />
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="profile-info">
                                                    <h5><a href="">Maggie Strickland</a></h5>
                                                    <div class="author-career">/Advanced Educator</div>
                                                    <p class="author-bio">Maggie is a brilliant educator, whose life was spent
                                                        for computer science and love of nature. Being a female, she encountered
                                                        a lot of obstacles and was forbidden to work in this field by her
                                                        family. With a true spirit and talented gift, she was able to succeed
                                                        and set an example for others.</p>


                                                    <ul class="author-social-networks">
                                                        <li class="item">
                                                            <a href="JavaScript:Void(0);" target="_blank" class="social-link">
                                                                <i class="fab fa-twitter social-link-icon"></i> </a>
                                                        </li>
                                                        <li class="item">
                                                            <a href="JavaScript:Void(0);" target="_blank" class="social-link">
                                                                <i class="fab fa-facebook-f social-link-icon"></i> </a>
                                                        </li>
                                                        <li class="item">
                                                            <a href="JavaScript:Void(0);" target="_blank" class="social-link">
                                                                <i class="fab fa-instagram social-link-icon"></i> </a>
                                                        </li>
                                                        <li class="item">
                                                            <a href="JavaScript:Void(0);" target="_blank" class="social-link">
                                                                <i class="fab fa-pinterest social-link-icon"></i> </a>
                                                        </li>
                                                        <li class="item">
                                                            <a href="JavaScript:Void(0);" target="_blank" class="social-link">
                                                                <i class="fab fa-youtube social-link-icon"></i> </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="reviews" class="tab-pane">
                                    <div class="course-reviews">
                                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active "
                                                    style={{ fontSize: 'medium', fontWeight: '600', padding: '8px', marginRight: '15px', border: '2px solid rgb(2, 2, 2)', borderRadius: '0px' }}
                                                    id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                                                    type="button" role="tab" aria-controls="pills-home"
                                                    aria-selected="true">Review</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link"
                                                    style={{ fontSize: 'medium', fontWeight: '600', padding: '8px', marginRight: '15px', border: '2px solid rgb(2, 2, 2)', borderRadius: '0px' }}
                                                    id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                                                    type="button" role="tab" aria-controls="pills-profile"
                                                    aria-selected="false">Video Review</button>
                                            </li>

                                        </ul>
                                        <div class="tab-content" id="pills-tabContent">
                                            <div class="tab-pane  show active" id="pills-home" role="tabpanel"
                                                aria-labelledby="pills-home-tab" tabindex="0">
                                                <div class="course-rating">
                                                    <h3 class="title">Reviews</h3>
                                                    <div class="course-rating-content">
                                                        <div class="average-rating">
                                                            <p class="rating-title secondary-color">Average Rating</p>
                                                            <div class="rating-box">
                                                                <div class="average-value primary-color">
                                                                    4.50
                                                                </div>
                                                                <div class="review-star">
                                                                    <div class="tm-star-rating">
                                                                        <span class="fas fa-star"></span>
                                                                        <span class="fas fa-star"></span>
                                                                        <span class="fas fa-star"></span>
                                                                        <span class="fas fa-star"></span>
                                                                        <span class="fas fa-star-half-alt"></span>
                                                                    </div>
                                                                </div>
                                                                <div class="review-amount">
                                                                    (2 ratings)
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="detailed-rating">
                                                            <p class="rating-title secondary-color">Detailed Rating</p>
                                                            <div class="rating-box">
                                                                <div class="rating-rated-item">
                                                                    <div class="rating-point">
                                                                        <div class="tm-star-rating">
                                                                            <span class="fas fa-star"></span>
                                                                            <span class="fas fa-star"></span>
                                                                            <span class="fas fa-star"></span>
                                                                            <span class="fas fa-star"></span>
                                                                            <span class="fas fa-star"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating-progress">
                                                                        <div class="single-progress-bar">
                                                                            <div class="progress">
                                                                                <div class="progress-bar" role="progressbar"
                                                                                    style={{ width: '50%' }} aria-valuenow="50"
                                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating-count">1</div>
                                                                </div>

                                                                <div class="rating-rated-item">
                                                                    <div class="rating-point">
                                                                        <div class="tm-star-rating">
                                                                            <span class="fas fa-star"></span>
                                                                            <span class="fas fa-star"></span>
                                                                            <span class="fas fa-star"></span>
                                                                            <span class="fas fa-star"></span>
                                                                            <span class="fa fa-star"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating-progress">
                                                                        <div class="single-progress-bar">
                                                                            <div class="progress">
                                                                                <div class="progress-bar" role="progressbar"
                                                                                    style={{ width: '50%' }} aria-valuenow="50"
                                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating-count">1</div>
                                                                </div>

                                                                <div class="rating-rated-item">
                                                                    <div class="rating-point">
                                                                        <div class="tm-star-rating">
                                                                            <span class="fas fa-star"></span>
                                                                            <span class="fas fa-star"></span>
                                                                            <span class="fas fa-star"></span>
                                                                            <span class="fa fa-star"></span>
                                                                            <span class="fa fa-star"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating-progress">
                                                                        <div class="single-progress-bar">
                                                                            <div class="progress">
                                                                                <div class="progress-bar" role="progressbar"
                                                                                    style={{ width: '0%' }} aria-valuenow="0"
                                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating-count">0</div>
                                                                </div>

                                                                <div class="rating-rated-item">
                                                                    <div class="rating-point">
                                                                        <div class="tm-star-rating">
                                                                            <span class="fas fa-star"></span>
                                                                            <span class="fas fa-star"></span>
                                                                            <span class="fa fa-star"></span>
                                                                            <span class="fa fa-star"></span>
                                                                            <span class="fa fa-star"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating-progress">
                                                                        <div class="single-progress-bar">
                                                                            <div class="progress">
                                                                                <div class="progress-bar" role="progressbar"
                                                                                    style={{ width: '0%' }} aria-valuenow="0"
                                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating-count">0</div>
                                                                </div>

                                                                <div class="rating-rated-item">
                                                                    <div class="rating-point">
                                                                        <div class="tm-star-rating">
                                                                            <span class="fas fa-star"></span>
                                                                            <span class="fa fa-star"></span>
                                                                            <span class="fa fa-star"></span>
                                                                            <span class="fa fa-star"></span>
                                                                            <span class="fa fa-star"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating-progress">
                                                                        <div class="single-progress-bar">
                                                                            <div class="progress">
                                                                                <div class="progress-bar" role="progressbar"
                                                                                    style={{ width: '0%' }} aria-valuenow="0"
                                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating-count">0</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="course-reviews-area ">
                                                    <div class="course-reviews-list">
                                                        <ul id="paginated-list " data-current-page="1" aria-live="polite">
                                                            <li class="listItem">
                                                                <div class="review-container">
                                                                    <div class="review-author">
                                                                        <img src="assets/images/review-author/author1.jpeg"
                                                                            alt="author" />
                                                                    </div>
                                                                    <div class="review-content">
                                                                        <h4 class="title">ednawatson</h4>

                                                                        <h5 class="review-title">Cover all my needs </h5>
                                                                        <div class="review-text">
                                                                            The course identify things we want to change and
                                                                            then
                                                                            figure out
                                                                            the things that need to be done to create the
                                                                            desired
                                                                            outcome.
                                                                            The course helped me in clearly define problems and
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="listItem">
                                                                <div class="review-container">
                                                                    <div class="review-author">
                                                                        <img src="assets/images/review-author/author1.jpeg"
                                                                            alt="author" />
                                                                    </div>
                                                                    <div class="review-content">
                                                                        <h4 class="title">ednawatson</h4>

                                                                        <h5 class="review-title">Cover all my needs </h5>
                                                                        <div class="review-text">
                                                                            The course identify things we want to change and
                                                                            then
                                                                            figure out
                                                                            the things that need to be done to create the
                                                                            desired
                                                                            outcome.
                                                                            The course helped me in clearly define problems and

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="listItem">
                                                                <div class="review-container">
                                                                    <div class="review-author">
                                                                        <img src="assets/images/review-author/author1.jpeg"
                                                                            alt="author" />
                                                                    </div>
                                                                    <div class="review-content">
                                                                        <h4 class="title">ednawatson</h4>

                                                                        <h5 class="review-title">Cover all my needs </h5>
                                                                        <div class="review-text">
                                                                            The course identify things we want to change and
                                                                            then
                                                                            figure out
                                                                            the things that need to be done to create the
                                                                            desired
                                                                            outcome.
                                                                            The course helped me in clearly define problems and

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="listItem">
                                                                <div class="review-container">
                                                                    <div class="review-author">
                                                                        <img src="assets/images/review-author/author1.jpeg"
                                                                            alt="author" />
                                                                    </div>
                                                                    <div class="review-content">
                                                                        <h4 class="title">ednawatson</h4>

                                                                        <h5 class="review-title">Cover all my needs </h5>
                                                                        <div class="review-text">
                                                                            The course identify things we want to change and
                                                                            then
                                                                            figure out
                                                                            the things that need to be done to create the
                                                                            desired
                                                                            outcome.
                                                                            The course helped me in clearly define problems and

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="listItem">
                                                                <div class="review-container">
                                                                    <div class="review-author">
                                                                        <img src="assets/images/review-author/author1.jpeg"
                                                                            alt="author" />
                                                                    </div>
                                                                    <div class="review-content">
                                                                        <h4 class="title">ednawatson</h4>

                                                                        <h5 class="review-title">Cover all my needs </h5>
                                                                        <div class="review-text">
                                                                            The course identify things we want to change and
                                                                            then
                                                                            figure out
                                                                            the things that need to be done to create the
                                                                            desired
                                                                            outcome.
                                                                            The course helped me in clearly define problems and

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="listItem">
                                                                <div class="review-container">
                                                                    <div class="review-author">
                                                                        <img src="assets/images/review-author/author1.jpeg"
                                                                            alt="author" />
                                                                    </div>
                                                                    <div class="review-content">
                                                                        <h4 class="title">ednawatson</h4>

                                                                        <h5 class="review-title">Cover all my needs </h5>
                                                                        <div class="review-text">
                                                                            The course identify things we want to change and
                                                                            then
                                                                            figure out
                                                                            the things that need to be done to create the
                                                                            desired
                                                                            outcome.
                                                                            The course helped me in clearly define problems and

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>



                                                        </ul>

                                                        <div class="pagination-container">
                                                            <button class="pagination-button" id="prev-button"
                                                                aria-label="Previous page" title="Previous page">
                                                                Previous
                                                            </button>
                                                            <div id="pagination-numbers">
                                                            </div>
                                                            <button class="pagination-button" id="next-button"
                                                                aria-label="Next page" title="Next page">
                                                                Next
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="tab-pane " id="pills-profile" role="tabpanel"
                                                aria-labelledby="pills-profile-tab" tabindex="0">
                                                <div class="course-reviews-area">
                                                    <ul class="course-reviews-list">
                                                        <li class="review p-0 m-0">
                                                            <div class="review-container">
                                                                <div class="row">
                                                                    <div class="col-md-6 p-5 pt-0">
                                                                        <iframe width="100%" height="220px"
                                                                            src="https://www.youtube.com/embed/Y01Z4XhdoQ4"
                                                                            title="Client Testimonial | Diplomatic Lawn Care"
                                                                            frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                            referrerpolicy="strict-origin-when-cross-origin"
                                                                            allowfullscreen></iframe>
                                                                        <h4 class="title">ednawatson</h4>
                                                                        <div class="review-text">
                                                                            The course identify things we want to change and
                                                                            then
                                                                            figure out
                                                                            the things that
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 p-5 pt-0">
                                                                        <iframe width="100%" height="220px"
                                                                            src="https://www.youtube.com/embed/Y01Z4XhdoQ4"
                                                                            title="Client Testimonial | Diplomatic Lawn Care"
                                                                            frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                            referrerpolicy="strict-origin-when-cross-origin"
                                                                            allowfullscreen></iframe>
                                                                        <h4 class="title">ednawatson</h4>
                                                                        <div class="review-text">
                                                                            The course identify things we want to change and
                                                                            then
                                                                            figure out
                                                                            the things that
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 p-5 pt-0">
                                                                        <iframe width="100%" height="220px"
                                                                            src="https://www.youtube.com/embed/Y01Z4XhdoQ4"
                                                                            title="Client Testimonial | Diplomatic Lawn Care"
                                                                            frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                            referrerpolicy="strict-origin-when-cross-origin"
                                                                            allowfullscreen></iframe>
                                                                        <h4 class="title">ednawatson</h4>
                                                                        <div class="review-text">
                                                                            The course identify things we want to change and
                                                                            then
                                                                            figure out
                                                                            the things that
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 p-5 pt-0">
                                                                        <iframe width="100%" height="220px"
                                                                            src="https://www.youtube.com/embed/Y01Z4XhdoQ4"
                                                                            title="Client Testimonial | Diplomatic Lawn Care"
                                                                            frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                            referrerpolicy="strict-origin-when-cross-origin"
                                                                            allowfullscreen></iframe>
                                                                        <h4 class="title">ednawatson</h4>
                                                                        <div class="review-text">
                                                                            The course identify things we want to change and
                                                                            then
                                                                            figure out
                                                                            the things that
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="Certificate" class="tab-pane">
                                    <div class="row">
                                        <div class="col-12" style={{ display: 'flex', justifyContent: 'center' }}>
                                            <img style={{ minWidth: '450px', maxWidth: '100%' }}
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvNOdyOPoSIfKCm7jtJqYW41IBcgHSlgO_8w&s"
                                                alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-12 order-lg-2 ps-3 pe-1" id="sticky-sidebar" style={{ position: 'relative' }}>
                        <div class="sidebar-widget-wrapper pr-0" style={{ position: 'sticky', top: '80px' }}>
                            <div class="sidebar-widget">
                                <div class="sidebar-widget-content">
                                    <div class="sidebar-entry-course-info">
                                        <div class="course-price ">
                                            <span class="meta-label">
                                                <i class="meta-icon fa fa-money-bill-wave"></i>
                                                Price
                                            </span>
                                            <span class="meta-value">
                                                <span class="price ">$19<span class="decimals-separator">.00</span></span>
                                            </span>
                                        </div>
                                        <div class="course-meta">
                                            <div class="course-instructor">
                                                <span class="meta-label">
                                                    <i class="fa fa-chalkboard-teacher"></i>
                                                    Instructor
                                                </span>
                                                <span class="meta-value">Maggie Strickland</span>
                                            </div>
                                            <div class="course-duration">
                                                <span class="meta-label">
                                                    <i class="fa fa-clock"></i>
                                                    Duration
                                                </span>
                                                <span class="meta-value">15 weeks</span>
                                            </div>
                                            <div class="course-lectures">
                                                <span class="meta-label">
                                                    <i class="fa fa-file-alt"></i>
                                                    Lectures
                                                </span>
                                                <span class="meta-value">24</span>
                                            </div>

                                            <div class="course-students">
                                                <span class="meta-label">
                                                    <i class="fa fa-user-alt"></i>
                                                    Enrolled
                                                </span>
                                                <span class="meta-value">629 students</span>
                                            </div>
                                            <div class="course-language">
                                                <span class="meta-label">
                                                    <i class="fa fa-language"></i>
                                                    Language
                                                </span>
                                                <span class="meta-value">English</span>
                                            </div>

                                        </div>
                                        <div class="lp-course-buttons">
                                            <button class="btn btn-primary btn-hover-secondary btn-width-100"
                                                style={{ width: '100%' }} data-toggle="modal" data-target="#modal2">Enroll</button>
                                        </div>
                                        <div class="entry-course-share">
                                            <div class="share-media">

                                                <div class="share-label">Share this course</div>
                                                <span class="share-icon fa fa-share-alt"></span>

                                                <div class="share-list">
                                                    <a class="hint--bounce hint--top hint--theme-two" aria-label="Facebook"
                                                        target="_blank" href="JavaScript:Void(0);"><i
                                                            class="fab fa-facebook-f"></i></a>

                                                    <a class="hint--bounce hint--top hint--theme-two" aria-label="Twitter"
                                                        target="_blank" href="JavaScript:Void(0);"><i
                                                            class="fab fa-twitter"></i></a>

                                                    <a class="hint--bounce hint--top hint--theme-two" aria-label="Linkedin"
                                                        target="_blank" href="JavaScript:Void(0);"><i
                                                            class="fab fa-linkedin"></i></a>

                                                    <a class="hint--bounce hint--top hint--theme-two" aria-label="Tumblr"
                                                        target="_blank" href="JavaScript:Void(0);"><i
                                                            class="fab fa-tumblr-square"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </section>

        </>
    )
}

export default CourseDetial