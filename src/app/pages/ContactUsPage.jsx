"use client"
import React, { useEffect, useState } from "react";
import ContactUs from "../components/home/ContactUs";
import TestimonialsSection from "../components/home/Testimonials";
import HeroSection from "../components/HeroSection";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/home/Footer";

const ContactUsPage = () => {
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
