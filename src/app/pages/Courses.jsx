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
