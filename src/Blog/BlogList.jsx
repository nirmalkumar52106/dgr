import React from "react";
import BlogItem from "./BlogItem";

// Dummy data for the blog items
const blogData = [
  {
    id: 1,
    title: "Design and Technology Suite",
    image: "https://digitalgururavi.com/images/facilities/1.jpg",
    description:
      "The Design and Technology Suite is an ensemble of various specialist areas and rooms which offer students the potential to explore a variety of design.",
    link: "blog-detail.html",
  },
  {
    id: 2,
    title: "Design and Technology Suite",
    image: "https://digitalgururavi.com/images/facilities/1.jpg",
    description:
      "The Design and Technology Suite is an ensemble of various specialist areas and rooms which offer students the potential to explore a variety of design.",
    link: "blog-detail.html",
  },
  {
    id: 3,
    title: "Design and Technology Suite",
    image: "https://digitalgururavi.com/images/facilities/1.jpg",
    description:
      "The Design and Technology Suite is an ensemble of various specialist areas and rooms which offer students the potential to explore a variety of design.",
    link: "blog-detail.html",
  },
  {
    id: 4,
    title: "Design and Technology Suite",
    image: "https://digitalgururavi.com/images/facilities/1.jpg",
    description:
      "The Design and Technology Suite is an ensemble of various specialist areas and rooms which offer students the potential to explore a variety of design.",
    link: "blog-detail.html",
  },
  {
    id: 5,
    title: "Design and Technology Suite",
    image: "https://digitalgururavi.com/images/facilities/1.jpg",
    description:
      "The Design and Technology Suite is an ensemble of various specialist areas and rooms which offer students the potential to explore a variety of design.",
    link: "blog-detail.html",
  },
  {
    id: 6,
    title: "Design and Technology Suite",
    image: "https://digitalgururavi.com/images/facilities/1.jpg",
    description:
      "The Design and Technology Suite is an ensemble of various specialist areas and rooms which offer students the potential to explore a variety of design.",
    link: "blog-detail.html",
  }
  
  
  // Add more items as needed
];

const BlogList = () => {
  return (
    <div className="ed-res-bg">
      <div className="container com-sp pad-bot-70 ed-res-bg">
        <div className="row">
          <div className="cor about-sp" style={{ padding: 0 }}>
            <div className="ed-rsear">
              <ul className="row">
                {blogData.map((item) => (
                  <BlogItem key={item.id} blog={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
