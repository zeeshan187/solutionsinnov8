"use client";
import React from "react";
import { motion } from "framer-motion";
import Wrapper from "../shared/Wrapper";

const teamMembers = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    description: "Passionate about crafting elegant user interfaces.",
    image: "/images/about/ceo.jpg",
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
  },
  {
    name: "Jane Smith",
    role: "Backend Developer",
    description: "Building robust and scalable backend systems.",
    image: "/images/about/ceo.jpg",
    social: {
      linkedin: "https://linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
      twitter: "https://twitter.com/janesmith",
    },
  },
  {
    name: "Jane Smith",
    role: "Backend Developer",
    description: "Building robust and scalable backend systems.",
    image: "/images/about/ceo.jpg",
    social: {
      linkedin: "https://linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
      twitter: "https://twitter.com/janesmith",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-24 px-6 sm:px-12 lg:px-24">
      <Wrapper>
{/* Title */}
<div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold red_color tracking-tight mb-4">
          Meet The Visionaries
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          A team of forward-thinking professionals who innovate and inspire.
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="relative bg-white rounded-xl p-8 overflow-hidden shadow-xl flex flex-col items-center space-y-4"
          >
            <div className="relative mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full border-4 border-[#7B0B22] shadow-2xl transition-transform transform hover:scale-105"
              />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-2xl font-semibold text-[#7B0B22]">{member.name}</h3>
              <p className="text-sm text-[#D77A3D]">{member.role}</p>
              <p className="text-sm text-gray-700">{member.description}</p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4 mt-4">
              {member.social.linkedin && (
                <motion.a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7B0B22] hover:text-[#D77A3D] transition-transform transform hover:scale-110"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </motion.a>
              )}
              {member.social.github && (
                <motion.a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7B0B22] hover:text-gray-500 transition-transform transform hover:scale-110"
                >
                  <i className="fab fa-github fa-lg"></i>
                </motion.a>
              )}
              {member.social.twitter && (
                <motion.a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7B0B22] hover:text-[#1DA1F2] transition-transform transform hover:scale-110"
                >
                  <i className="fab fa-twitter fa-lg"></i>
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      </Wrapper>
      
    </section>
  );
};

export default TeamSection;
