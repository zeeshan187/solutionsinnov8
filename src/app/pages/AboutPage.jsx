import React from 'react'
import Clients from '../components/about/Clients'
import TeamSection from '../components/about/TeamSection'
import TestimonialsSection from '../components/home/Testimonials'
import ContactUs from '../components/home/ContactUs'
import AboutUsSection from '../components/home/AboutUsSection'

const AboutPage = () => {
  return (
    <div className='mt-[90px]'>
      <AboutUsSection />
      <TeamSection />
      <Clients />
      <TestimonialsSection/>
      <ContactUs />
    </div>
  )
}

export default AboutPage
