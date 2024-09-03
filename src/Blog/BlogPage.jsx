import React from "react";
import BlogList from "./BlogList";
import BlogHeader from "./Blogheader";
import Navbar from "../components/header";
import BookCourseSection from "../components/CourseBooking";
import Footer from "../components/Footer";

const BlogPage = () => {
  return (
    <>
      <section>
        <BlogHeader />
      </section>
      <section>
        <BlogList />
      </section>
    </>
  );
};

export default BlogPage;
