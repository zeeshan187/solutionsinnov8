"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import HeroSection from "../components/shared/HeroSection";
import servicesData from "../data/servicesData";
import Loader from "../components/shared/Loader";
import ServiceDetailsSection from "../components/services/ServiceDetailsSection";

const ServicesPage = () => {
  const { service } = useParams();
  const serviceData = servicesData.find((item) => item.id === service);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
console.log(serviceData);

  if (!serviceData) {
    return (
      <div className="mt-[83px]">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <HeroSection
              title="Service Not Found"
              subtitle="The service you're looking for doesn't exist. Please explore other services we offer."
            />
            
            <Footer />
          </>
        )}
      </div>
    );
  }
  return (
    <div className="mt-[83px]">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <HeroSection
            title={serviceData.hero.title}
            subtitle={serviceData.hero.subtitle}
          />
          <ServiceDetailsSection
              title={serviceData.title}
              description={serviceData.description}
              features={serviceData.features} 
            />
          <Footer />
        </>
      )}
    </div>
  );
};

export default ServicesPage;
