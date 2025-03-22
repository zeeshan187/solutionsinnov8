"use client"
import React, { useEffect, useState } from "react";
import ContactUs from "../components/home/ContactUs";
import TestimonialsSection from "../components/home/Testimonials";
import HeroSection from "../components/shared/HeroSection";
import Loader from "../components/shared/Loader";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const ContactUsPage = () => {
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
            title="Get in Touch with Us"
            subtitle="We’re here to help you bring your ideas to life. Reach out to Solutions Innov8 and let's discuss how we can drive your digital success."
          />
          <TestimonialsSection />
          <ContactUs />
          <Footer />
        </>
      )}
    </div>
  );
};

export default ContactUsPage;
