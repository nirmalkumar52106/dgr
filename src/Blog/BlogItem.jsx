import React from "react";

const BlogItem = ({ blog }) => {
  const { title, image, description, link } = blog;

  return (
    <li className="col-md-6 col-lg-4 mb-4" style={{marginBottom:"15px"}}>
      <div className="ed-rese-grid">
        <div className="ed-rsear-img ed-faci-full-top">
          <img src={image} alt={title} />
        </div>
        <div className="ed-rsear-dec ed-faci-full-bot">
          <h4>
            <a href={link}>{title}</a>
          </h4>
          <p>{description}</p>
          <a href={link} className="read-line-btn">
            Read more
          </a>
        </div>
      </div>
    </li>
  );
};

export default BlogItem;
