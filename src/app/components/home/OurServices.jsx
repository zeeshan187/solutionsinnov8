"use client";

import { Card, Button } from "antd";
import { useState } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaBullhorn,
  FaCheckCircle,
  FaImage,
} from "react-icons/fa"; 
import Wrapper from "../shared/Wrapper";
import Link from "next/link";

const servicesData = [
  {
    id: 1,
    name: "Web Development",
    description:
      "Build scalable and visually stunning websites tailored to your needs.",
    icon: <FaLaptopCode className="text-4xl" />,
    link: "/services/web-development",
  },
  {
    id: 2,
    name: "App Development",
    description:
      "Create robust and user-friendly applications for all platforms.",
    icon: <FaMobileAlt className="text-4xl " />,
    link: "/services/app-development",
  },
  {
    id: 3,
    name: "UI/UX Design",
    description:
      "Design intuitive and engaging user interfaces with top-notch user experiences.",
    icon: <FaPaintBrush className="text-4xl " />,
    link: "/services/ui-ux",
  },
  {
    id: 4,
    name: "Digital Marketing",
    description:
      "Boost your online presence with effective marketing strategies.",
    icon: <FaBullhorn className="text-4xl " />,
    link: "/services/digital-marketing",
  },
  {
    id: 5,
    name: "Software Quality Assurance",
    description:
      "Ensure the highest quality standards for your software solutions.",
    icon: <FaCheckCircle className="text-4xl " />,
    link: "/services/sqa",
  },
  {
    id: 6,
    name: "Graphic Design",
    description:
      "Create stunning visuals and graphics to captivate your audience.",
    icon: <FaImage className="text-4xl" />,
    link: "/services/graphic-designing",
  },
];

const OurServices = () => {
  return (
    <div className="py-12 bg-gray-50">
      <Wrapper>
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-6xl font-extrabold text-center text-gray-800 mb-12 tracking-wide">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7B0B22] to-[#c73955]">
              Our Services
            </span>
          </h2>
          <div className="flex flex-wrap -mx-3 justify-between">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="w-full sm:w-1/2 lg:w-[33%] px-3 mb-6"
              >
                <Card
                  hoverable
                  className="border-2 border-[#7B0B22] rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col items-center text-center "
                >
                  <div className="flex justify-center items-center mb-4 text-[#7B0B22]">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{service.description}</p>
                  <Link href={service.link}>
                    <Button className="w-full bg_red_color text-white font-semibold hover:bg-red-700 transition-all">
                      Learn More
                    </Button>
                  </Link>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OurServices;
