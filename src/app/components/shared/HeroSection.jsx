import React from 'react';
import Image from 'next/image';

const HeroSection = ({ title, subtitle }) => {
  return (
    <div className="relative bg-[#7B0B22] text-white min-h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/navbar/service.svg" // Replace with your image path
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={80}
        />
      </div>

      {/* Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#7B0B22] via-[#7B0B22cc] to-transparent"></div>

      {/* Content */}
      <div className="relative text-center max-w-5xl px-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-2xl mb-6 text-gray-200">
            {subtitle}
          </p>
        )}
        <button className="bg-white text-[#7B0B22] px-8 py-3 rounded-md text-lg font-semibold shadow-md transition-transform transform hover:scale-105 animate-button-fade">
          Get Started
        </button>
      </div>

      {/* Animated Decorative Elements */}
      {/* Floating Circles */}
      <div className="absolute top-16 left-16 w-20 h-20 bg-white rounded-full blur-md opacity-20 animate-floating"></div>
      <div className="absolute bottom-16 right-16 w-16 h-16 bg-white rounded-full blur-md opacity-30 animate-floating-reverse"></div>

      {/* Rotating Squares */}
      <div className="absolute top-10 right-1/4 w-16 h-16 bg-transparent border-2 border-white opacity-50 animate-rotate"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-transparent border-2 border-white opacity-50 animate-rotate-reverse"></div>

      {/* Expanding Rings */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-32 h-32 border-2 border-dashed border-white rounded-full opacity-40 animate-expand"></div>
        <div className="w-40 h-40 border-2 border-dashed border-white rounded-full opacity-30 animate-expand-reverse"></div>
      </div>
    </div>
  );
};

export default HeroSection;
