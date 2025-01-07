"use client";
import React, { useEffect, useState } from "react";
import Clients from "../components/about/Clients";
import TeamSection from "../components/about/TeamSection";
import TestimonialsSection from "../components/home/Testimonials";
import ContactUs from "../components/home/ContactUs";
import AboutUsSection from "../components/home/AboutUsSection";
import HeroSection from "../components/shared/HeroSection";
import Loader from "../components/shared/Loader";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const AboutPage = () => {
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
          <HeroSection
            title="Empowering Your Vision"
            subtitle="Discover Solutions Innov8 – a cutting-edge agency driving digital success. We help brands like yours thrive in the online world and build a future of endless opportunities."
          />
          <AboutUsSection />
          <TeamSection />
          <Clients />
          <TestimonialsSection />
          <ContactUs />
          <Footer />
        </>
      )}
    </div>
  );
};

export default AboutPage;
