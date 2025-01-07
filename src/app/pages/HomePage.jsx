"use client";
import React, { useState, useEffect } from "react";
import Loader from "../components/shared/Loader";
import HeroSection from "../components/home/HeroSection";
import StatisticsSection from "../components/home/StatisticsSection";
import AboutUsSection from "../components/home/AboutUsSection";
import OurServices from "../components/home/OurServices";
import TestimonialsSection from "../components/home/Testimonials";
import ContactUs from "../components/home/ContactUs";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false); 
    }, 1000); 
  }, []);

  return (
    <div className="mt-[83px]">
      {loading ? ( 
        <Loader />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <StatisticsSection />
          <AboutUsSection />
          <OurServices />
          <TestimonialsSection />
          <ContactUs />
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomePage;
