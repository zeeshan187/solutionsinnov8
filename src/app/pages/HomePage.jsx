import React from 'react'
import HeroSection from '../components/home/HeroSection'
import StatisticsSection from '../components/home/StatisticsSection'
import AboutUsSection from '../components/home/AboutUsSection'
import OurServices from '../components/home/OurServices'
import TestimonialsSection from '../components/home/Testimonials'
import ContactUs from '../components/home/ContactUs'

const HomePage = () => {
  return (
    <div className='mt-[90px]'>
      <HeroSection />
      <StatisticsSection />
      <AboutUsSection />
      <OurServices />
      <TestimonialsSection />
      <ContactUs />
    </div>
  )
}

export default HomePage
