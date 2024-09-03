import { useEffect, useState } from 'react'
import './App.css'
import './css/mainstyle.css'
import './css/font-awesome.min.css'
import './css/materialize.css'
import './css/bootstrap.css'
import './css/style.css'
import './css/style-mob.css'
import './css/style.min.css'
import BlogPage from './Blog/BlogPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ReviewPage from './pages/ReviewPage.jsx'
import AboutPage from './pages/Aboutus.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Login from './components/Login.jsx'
import BookCourseSection from './components/CourseBooking.jsx'
import Footer from './components/Footer.jsx'
import SocialMediaSection from './components/SocialMedia.jsx'
import Navbar from './components/header.jsx'
import Placementpage from './pages/Placementpage.jsx'
import Internship from './pages/Internship.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CourseSub from './Course/CourseSub.jsx'
import CourseDetial from './Course/CourseDetial.jsx'
import AllCourses from './pages/AllCourses.jsx'
import CourseBanner from './Course/CourseBanner.jsx'
import CoursePage from './pages/CourseDetail.jsx'



function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />

        <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/placement" element={<Placementpage />}></Route>
        <Route path="/internship" element={<Internship />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/review" element={<ReviewPage />}></Route>
        <Route path="/subcourse/:productId" element={<AllCourses/>}></Route>

        </Routes>
        <Login />
      <BookCourseSection />
      <Footer />
      <SocialMediaSection />
      </BrowserRouter>
    </>
  )
}

export default App
