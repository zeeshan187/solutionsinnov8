"use client";
import React, { useState, useEffect } from "react";
import Loader from "../components/shared/Loader";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import HeroSection from "../components/shared/HeroSection";
import CoursesSection from "../components/courses/CoursesSection ";

const Courses = () => {
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
            title="Unlock Your Potential"
            subtitle="Explore our expertly designed courses at Innov8 – empowering individuals and teams to master the latest technologies. Gain the skills you need to excel in the digital world and shape your future."
          />
          <CoursesSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Courses;
