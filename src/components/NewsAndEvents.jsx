import React from 'react'

const NewsAndEvents = () => {
    // Data for the photo gallery
    const photoGalleryImages = [
      "https://digitalgururavi.com/images/ami/12.jpg",
      "https://digitalgururavi.com/images/ami/9.jpg",
      "https://digitalgururavi.com/images/ami/10.jpg",
      "https://digitalgururavi.com/images/ami/11.jpg",
      "https://digitalgururavi.com/images/ami/1.jpg",
      "https://digitalgururavi.com/images/ami/2.jpg",
      "https://digitalgururavi.com/images/ami/3.jpg",
      "https://digitalgururavi.com/images/ami/4.jpg",
      "https://digitalgururavi.com/images/ami/5.jpg",
      "https://digitalgururavi.com/images/ami/6.jpg",
      "https://digitalgururavi.com/images/ami/7.jpg",
      "https://digitalgururavi.com/images/ami/8.jpg",
    ];
  
    // Data for news and events
    const newsEvents = [
      {
        date: "07",
        month: "Jan, 2023",
        title: "Top 5 SEO Tools",
        description: "Learn and Earn more with advance seo tools",
        time: "9:15 am – 5:00 pm",
      },
      {
        date: "12",
        month: "Jan, 2023",
        title: "Importance Of Digital Marketing",
        description:
          "IF anyone want to get success in digital marketing, must to get course.",
        time: "9:15 am – 5:00 pm",
      },
      {
        date: "26",
        month: "Jan, 2023",
        title: "What is diffrence between frontend and fullstack",
        description:
          "The main diffrence between full stack and front end is , frontend is a part of fullstack.",
        time: "9:15 am – 5:00 pm",
      },
      {
        date: "18",
        month: "Jan, 2023",
        title: "How to Become A influencer Marketer.",
        description: "You must to have Maximum followers on your account or page",
        time: "9:15 am – 5:00 pm",
      },
    ];
  
    return (
      <section>
        <div className="container" style={{ padding: "4rem 0" }}>
          <div className="row">
            <div className="con-title">
              <h2>
                News and <span>Events</span>
              </h2>
              <p>Here you can visit on latest news and events of DGR.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="bot-gal h-gal ho-event-mob-bot-sp">
                <h4>Photo Gallery</h4>
                <ul>
                  {photoGalleryImages.map((image, index) => (
                    <li key={index}>
                      <img
                        className="materialboxed"
                        data-caption="Education master image captions"
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bot-gal h-vid ho-event-mob-bot-sp">
                <h4>Video Gallery</h4>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/QSqsPrlxZps"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <center>
                  <h5>DGR- Best Digital Marketing & Development Training Course.</h5>
                </center>
                <p align="justify">
                  "DGR stands out as an exceptional learning platform, positioning
                  itself as a top choice for those seeking comprehensive
                  knowledge. With its meticulously curated courses, expert
                  instructors, and user-friendly interface, DGR offers a dynamic
                  learning experience. The platform's commitment to staying
                  current with industry trends ensures that learners receive
                  up-to-date insights into the realms of development and digital
                  marketing."
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bot-gal h-blog ho-event">
                <h4>News & Events</h4>
                <div className="ho-event">
                  <ul>
                    {newsEvents.map((event, index) => (
                      <li key={index}>
                        <div className="ho-ev-date">
                          <span>{event.date}</span>
                          <span>{event.month}</span>
                        </div>
                        <div className="ho-ev-link">
                          <a href="#">
                            <h4>{event.title}</h4>
                          </a>
                          <p>{event.description}</p>
                          <span>{event.time}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
export default NewsAndEvents