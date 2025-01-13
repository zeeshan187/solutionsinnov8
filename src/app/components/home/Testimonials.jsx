"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import "antd/dist/reset.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Wrapper from "../shared/Wrapper";

const Carousel = dynamic(() => import("antd").then((mod) => mod.Carousel), { ssr: false });

const testimonials = [
  {
    name: "Joseph Smith",
    designation: "Startup Founder",
    review: "The team delivered an exceptional product that exceeded our expectations. Highly recommend their services!",
    image: "/images/home/clients/client1.jpeg", // Male Image
  },
  {
    name: "Jane Smith",
    designation: "Marketing Manager, Digital Marketing Agency",
    review: "Outstanding experience! The developers were knowledgeable and delivered quality work on time.",
    image: "/images/home/clients/client4.webp", // Female Image
  },
  {
    name: "Michael Johnson",
    designation: "Startup Founder",
    review: "Professional, reliable, and creative. They made the entire process seamless. I couldn't have asked for a better experience.",
    image: "/images/home/clients/client2.jpeg", // Male Image
  },
  {
    name: "Sophia Brown",
    designation: "IT Director, Startup Enterprises",
    review: "Great attention to detail and excellent communication throughout the project. The final result was better than we expected.",
    image: "/images/home/clients/client3.webp", // Female Image
  },
  {
    name: "Roman",
    designation: "CEO, AlpinX Enterprises Ltd.",
    review: "Fantastic service and results. They truly understood our vision and delivered on time. A top-notch team!",
    image: "/images/home/clients/client5.webp", // Male Image
  },
  {
    name: "Emma Williams",
    designation: "Creative Director, PixelArt Studios",
    review: "A talented team that combines technical expertise with creative insight. I highly recommend their work to anyone in need of a skilled team.",
    image: "/images/home/clients/client8.jpeg", // Female Image
  },
  {
    name: "Oliver Harris",
    designation: "CTO, InnovateHub Solutions",
    review: "The collaboration was seamless, and the results were beyond our expectations. Great job, team!",
    image: "/images/home/clients/client6.webp", // Male Image
  },
  {
    name: "Liam Wilson",
    designation: "Freelance Consultant, Digital Strategies",
    review: "The team was extremely professional and responsive. A pleasure to work with! The outcome was exactly what we envisioned.",
    image: "/images/home/clients/client7.webp", // Male Image
  },
  {
    name: "Ram Chella",
    designation: "HR Head, BrightFuture Technologies",
    review: "Their ability to understand our requirements and translate them into reality is outstanding. Highly professional and reliable team.",
    image: "/images/home/clients/client5.webp", // Female Image
  },
];


const TestimonialsSection = () => {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-50 py-5 lg:py-16">
      <Wrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-40 items-center">
        {/* Left Block */}
        <div className="space-y-4 flex flex-col items-center lg:items-start text-center lg:text-start">
          <h3 className="text-xl red_color font-bold">TESTIMONIALS</h3>
          <h2 className="text-4xl font-bold">Look What Our Customers Say!</h2>
          <p className="text-lg text-gray-700">
          Discover why our clients trust Solutions Innov8 for exceptional results and impactful solutions. Hear their stories and experiences working with us.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              className="flex justify-center items-center text-white bg_red_color hover:bg-red-700 rounded-full w-10 h-10 p-2 shadow-lg"
            >
              <FaArrowLeftLong />
            </button>
            <button
              onClick={handleNext}
              className="flex justify-center items-center text-white bg_red_color hover:bg-red-700 rounded-full w-10 h-10 p-2 shadow-lg"
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        {/* Right Block */}
        <div>
          <Carousel
            autoplay
            dots={false}
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
            ref={carouselRef}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 1 } },
              { breakpoint: 768, settings: { slidesToShow: 1 } },
              { breakpoint: 640, settings: { slidesToShow: 1 } },
            ]}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} >
                <div className="bg-white rounded-lg shadow-md p-6 !min-h-[300px] flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold red_color mb-2">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{testimonial.designation}</p>
                  <p className="text-sm text-gray-600 italic">"{testimonial.review}"</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      </Wrapper>
    </div>
  );
};

export default TestimonialsSection;
