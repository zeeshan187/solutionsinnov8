"use client";
import React, { useState, useEffect } from "react";
import Loader from "../components/shared/Loader";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import HeroSection from "../components/shared/HeroSection";
import PortfolioSection from "../components/portfolio/PortfolioSection";

const PortfolioPage = () => {
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
            title="Innovative Solutions, Proven Results"
            subtitle="At Innov8, we transform ideas into reality with cutting-edge web and software solutions. Explore our portfolio to see how we've helped businesses thrive with technology-driven excellence."
          />
          <PortfolioSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default PortfolioPage
