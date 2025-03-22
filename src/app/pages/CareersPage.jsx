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
import CareersSection from "../components/careers/CareersSection";

const CareersPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="mt-[70px] md:mt-[83px]">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <HeroSection
            title="Join Our Team, Shape the Future"
            subtitle="Be a part of Solutions Innov8 – where innovation meets opportunity. Collaborate, grow, and make an impact as we redefine digital success together."
          />
          <CareersSection />
          <TestimonialsSection />
          <ContactUs />
          <Footer />
        </>
      )}
    </div>
  );
};

export default CareersPage;
