"use client";
import React, { useEffect, useState } from "react";
import TestimonialsSection from "../components/home/Testimonials";
import ContactUs from "../components/home/ContactUs";
import HeroSection from "../components/shared/HeroSection";
import Loader from "../components/shared/Loader";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import PrivacyPolicyPage from "../components/privacypolicy/PrivacyPolicyPage";
import SupportSection from "../components/shared/SupportSection";

const PrivacyPolicy = () => {
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
            title="Your Privacy Matters"
            subtitle="At Solutions Innov8, we prioritize your privacy and are committed to safeguarding your personal information. Our privacy policy outlines how we collect, use, and protect your data, ensuring a transparent and secure experience for all users."
          />
            <PrivacyPolicyPage />
            <SupportSection />
          <TestimonialsSection />
          <ContactUs />
          <Footer />
        </>
      )}
    </div>
  );
};

export default PrivacyPolicy;
