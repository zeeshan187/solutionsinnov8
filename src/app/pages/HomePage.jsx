"use client";
import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import HeroSection from "../components/home/HeroSection";
import StatisticsSection from "../components/home/StatisticsSection";
import AboutUsSection from "../components/home/AboutUsSection";
import OurServices from "../components/home/OurServices";
import TestimonialsSection from "../components/home/Testimonials";
import ContactUs from "../components/home/ContactUs";
import Navbar from "../components/Navbar";
import Footer from "../components/home/Footer";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 2000); 
  }, []);

  return (
    <div className="mt-[85px]">
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
