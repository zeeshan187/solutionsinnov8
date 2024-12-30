"use client";

import { Card, Button } from "antd";
import { useState } from "react";
import Image from "next/image";
import Wrapper from "../Wrapper";

const servicesData = [
  {
    id: 1,
    name: "Web Development",
    description:
      "Build scalable and visually stunning websites tailored to your needs.",
    image: "/images/navbar/service.svg",
  },
  {
    id: 2,
    name: "App Development",
    description:
      "Create robust and user-friendly applications for all platforms.",
    image: "/images/navbar/service.svg",
  },
  {
    id: 3,
    name: "UI/UX Design",
    description:
      "Design intuitive and engaging user interfaces with top-notch user experiences.",
    image: "/images/navbar/service.svg",
  },
  {
    id: 4,
    name: "Digital Marketing",
    description:
      "Boost your online presence with effective marketing strategies.",
    image: "/images/navbar/service.svg",
  },
  {
    id: 5,
    name: "Software Quality Assurance",
    description:
      "Ensure the highest quality standards for your software solutions.",
    image: "/images/navbar/service.svg",
  },
  {
    id: 6,
    name: "Graphic Designer",
    description:
      "Create stunning visuals and graphics to captivate your audience.",
    image: "/images/navbar/service.svg",
  },
];

const OurServices = () => {
  return (
    <div className="py-12 bg-gray-50">
      <Wrapper>
        <div className="container mx-auto px-4">
          <h2 className=" text-3xl lg:text-6xl font-extrabold text-center text-gray-800 mb-12 tracking-wide">
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
                  className="rounded-lg shadow-md transition-transform transform hover:scale-105"
                  cover={
                    <div className="relative h-48 bg-gray-100">
                      <Image
                        src={service.image}
                        alt={service.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                  }
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button className="w-full bg_red_color text-white font-semibold">
                    Learn More
                  </Button>
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
