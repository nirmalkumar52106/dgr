import React from 'react'
import Hero from '../components/Hero'
import Training from '../components/Training'
import PopularCourse from '../components/PopularCourse'
import Hiring from '../components/Hiring'
import BookCourseSection from '../components/CourseBooking'
import Footer from '../components/Footer'
import SocialMediaSection from '../components/SocialMedia'
import Login from '../components/Login'
import Coursehome from '../Course/Coursehome'
import HiringPartners from '../components/Hiring'
import NewsAndEvents from '../components/NewsAndEvents'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Training />
      {/* <PopularCourse /> */}
      <Coursehome/>
      <HiringPartners/>
      <NewsAndEvents/>
    </>

  )
}

export default HomePage