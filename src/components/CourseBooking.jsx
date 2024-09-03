// BookCourseSection.js


const BookCourseSection = () => {
  return (
    <section className="book-course-section">
      <div className="full-bot-book">
        <div className="container">
          <div className="row">
            <div className="bot-book">
              <div className="col-md-2 bb-img">
                <img src="https://digitalgururavi.com/images/3.png" alt="Course Image" />
              </div>
              <div className="col-md-7 bb-text">
                <h4 style={{ fontSize: '25px' }}>GET THE COURSE AND BECOME A CERTIFIED EXPERTS</h4>
                <p>DGR provides certified courses with 100% satisfaction.</p>
              </div>
              <div className="col-md-3 bb-link">
                <a href="course-details.html">Book This Course</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCourseSection;
