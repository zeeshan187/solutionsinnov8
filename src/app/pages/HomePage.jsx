import React from 'react'
import HeroSection from '../components/home/HeroSection'
import StatisticsSection from '../components/home/StatisticsSection'
import AboutUsSection from '../components/home/AboutUsSection'
import OurServices from '../components/home/OurServices'

const HomePage = () => {
  return (
    <div className='mt-[90px]'>
      <HeroSection />
      <StatisticsSection />
      <AboutUsSection />
      <OurServices />
    </div>
  )
}

export default HomePage
