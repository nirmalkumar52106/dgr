// AboutSection.js
import React from 'react';

// AboutItem Component
const AboutItem = ({ imageSrc, title, description }) => {
    return (
        <li>
            <div className="ed-ad-img">
                <img src={imageSrc} alt={title} />
            </div>
            <div className="ed-ad-dec">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </li>
    );
};

// AboutSection Component
const AboutSection = () => {
    const aboutItems = [
        {
            imageSrc: 'images/adv/1.png',
            title: 'Our Vision',
            description:
                'To be the most trusted IT training institute in India that offers transformative & success-oriented courses to help learners build great careers, start their own businesses, or become entrepreneurs.',
        },
        {
            imageSrc: 'images/adv/2.png',
            title: 'Our Mission',
            description:
                'To bring innovation in learning, and bridge the skills gap in the IT industry through excellence in today’s in-demand skills like digital marketing, web/app development, cyber security, and the latest technologies.',
        },
        {
            imageSrc: 'images/adv/3.png',
            title: 'Our History',
            description:
                'DGR originated after the foundation of a successful educational blog, after reaching 1 million people Digitally for career guidance we decided to launch our first full-fledged training program.',
        },
        {
            imageSrc: 'images/adv/4.png',
            title: 'Certifications',
            description:
                'The course syllabus covers the length and breadth of all topics. Along with the Globally Recognised Master Certification from DGR, the institute goes the extra mile to prepare you for globally significant certifications.',
        },
        {
            imageSrc: 'images/adv/5.png',
            title: 'Expert Faculties',
            description:
                'In the form of mentors, you have expert trainers with 12+ years of experience. Passionate about all things digital, the mentors are your friend and guide with an affable disposition.',
        },
        {
            imageSrc: 'images/adv/6.png',
            title: 'Smart Classes',
            description:
                'The virtual course format delivers a highly engaging and interactive experience. Further, the use of case studies, assignments, and brainstorming within the group makes for exciting learning.',
        },
    ];

    return (
        <section>
            <div className="container com-sp pad-bot-70">
                <div className="row">
                    <div className="cor about-sp">
                        <div className="ed-about-tit">
                            <div className="con-title">
                                <h2>
                                    About <span>DGR</span>
                                </h2>
                                <p>We Focus On Offering Quality Training and Expert Trainers For Successful Careers.</p>
                            </div>
                        </div>
                        <div className="ed-about-sec1">
                            <div className="ed-advan">
                                <ul>
                                    {aboutItems.map((item, index) => (
                                        <AboutItem
                                            key={index}
                                            imageSrc={item.imageSrc}
                                            title={item.title}
                                            description={item.description}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="ed-about-sec1">
                            <div className="col-md-6"></div>
                            <div className="col-md-6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
