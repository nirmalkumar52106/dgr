import React from 'react';

// CourseCard Component to represent individual courses
const CourseCard = ({ href, imgSrc, altText, description }) => (
  <div className="col-md-3 col-sm-4 col-xs-12">
    <div className="ed-course-in">
      <a className="course-overlay" href={href}>
        <img src={imgSrc} alt={altText} />
        <span>{description}</span>
      </a>
    </div>
  </div>
);

// TrainingOverview Component
const TrainingOverview = () => {
  const courses = [
    {
      href: '#',
      imgSrc: 'https://digitalgururavi.com/images/training%20overview/Blended%20Training.png',
      altText: 'Blended Training',
      description: 'Online & Offline Blended Training',
    },
    {
      href: '#',
      imgSrc: 'https://digitalgururavi.com/images/training%20overview/Practical%20Oriented%20Training.png',

      altText: 'Practical Oriented Training',
      description: '100% Practical Oriented Training',
    },
    {
      href: '#',
      imgSrc: 'https://digitalgururavi.com/images/training%20overview/Complete%20Job%20Assistance.png',

      altText: 'Job Assistance',
      description: 'Complete Job Assistance',
    },
    {
      href: 'research.html',
      imgSrc: 'https://digitalgururavi.com/images/training%20overview/10+%20Years%20Experienced%20Trainers.png',

      altText: 'Experienced Trainers',
      description: '10+ Years Experienced Trainers',
    },
    {
      href: 'all-courses.html',
      imgSrc: 'https://digitalgururavi.com/images/training%20overview/Easy%20EMI%20option.png',

      altText: 'EMI Option',
      description: 'Easy EMI’s option',
    },
    {
      href: 'db-time-line.html',
      imgSrc: 'https://digitalgururavi.com/images/h-adm.jpg',

      altText: 'Live Projects',
      description: 'Complete Training on Live Projects',
    },
    {
      href: 'seminar.html',
      imgSrc: 'https://digitalgururavi.com/images/training%20overview/LEARNING.png',

      altText: 'In-depth Learning',
      description: 'Extensive in-depth learning',
    },
    {
      href: 'events.html',
      imgSrc: 'https://digitalgururavi.com/images/training%20overview/individual%20Doubt%20Clearing%20Sessions.png',

      altText: 'Doubt Clearing Sessions',
      description: 'Individual Doubt Clearing Sessions',
    },
  ];

  return (
    <section>
      <div className="container com-sp pad-bot-70">
        <div className="row">
          <div className="con-title">
            <h2>
              Training <span>Overview</span>
            </h2>
            <h4>
              We focus on the bright future of students, Deliver courses with several features
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="ed-course">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                href={course.href}
                imgSrc={course.imgSrc}
                altText={course.altText}
                description={course.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const Training = () => {
  return (
    <div>
      <TrainingOverview />
    </div>
  );
};

export default Training;
