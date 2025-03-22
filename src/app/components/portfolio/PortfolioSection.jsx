import React from "react";
import { Button } from "antd";
import Wrapper from "../shared/Wrapper";

const portfolioProjects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A fully functional online store with seamless checkout experience.",
    image: "/images/portfolio/project1.jpeg",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "A powerful analytics dashboard for business insights and tracking.",
    image: "/images/portfolio/project2.jpeg",
  },
  {
    id: 3,
    title: "Mobile App UI",
    description: "An elegant mobile app design for enhanced user engagement.",
    image: "/images/portfolio/project3.png",
  },
  {
    id: 4,
    title: "Corporate Website",
    description: "A sleek, modern website for a corporate business.",
    image: "/images/portfolio/project4.jpg",
  },
  {
    id: 5,
    title: "Landing Page",
    description: "A high-converting landing page for marketing campaigns.",
    image: "/images/portfolio/project5.jpg",
  },
  {
    id: 6,
    title: "Brand Identity Design",
    description: "Complete brand identity with logo, typography, and guidelines.",
    image: "/images/portfolio/project6.jpg",
  },
];

const PortfolioSection = () => {
  return (
    <Wrapper>
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#7B0B22]">
          Our Portfolio
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6 transition-transform transform hover:scale-105"
              style={{ border: "2px solid #7B0B22" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-2 text-center">{project.description}</p>
              <Button
                type="primary"
                className="mt-4 w-full"
                style={{ backgroundColor: "#7B0B22", borderColor: "#7B0B22" }}
              >
                View Project
              </Button>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default PortfolioSection;
