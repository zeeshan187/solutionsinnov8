"use client";
import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import CountUp from "react-countup";
import Wrapper from "../shared/Wrapper";

const StatisticsSection = ({ loading }) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (loading) return; // Skip logic until loader is hidden

    const element = document.getElementById("stats");
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing once in view
        }
      },
      {
        threshold: 0.1, // Adjust visibility threshold as needed
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [loading]);

  const stats = [
    { title: "Clients", value: 65, icon: "fas fa-users", color: "bg-blue-500" },
    {
      title: "Projects",
      value: 500,
      icon: "fas fa-tasks",
      color: "bg-green-500",
    },
    {
      title: "Revenue",
      value: 100000,
      icon: "fas fa-dollar-sign",
      color: "bg-yellow-500",
      prefix: "$",
    },
    {
      title: "Glorious Years",
      value: 4,
      icon: "fas fa-briefcase",
      color: "bg-red-500",
    },
  ];

  return (
    <section
      id="stats"
      className="py-10 lg:py-20 bg-gradient-to-br from-gray-100 to-gray-200"
    >
      <Wrapper>
        <div className="mx-auto">
          <h2 className="text-3xl lg:text-6xl font-extrabold text-center text-gray-800 mb-12 tracking-wide">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7B0B22] to-[#c73955]">
              Our Achievements
            </span>
          </h2>
          <Row gutter={[32, 32]} justify="center">
            {stats.map((stat, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <div className=" flex flex-col items-center bg-white shadow-xl rounded-xl p-8 transform transition duration-500 hover:scale-105">
                  <div
                    className={`w-16 h-16 flex items-center justify-center text-white text-3xl rounded-full ${stat.color} shadow-md mb-6`}
                  >
                    <i className={stat.icon}></i>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-700">
                      {stat.title}
                    </h3>
                    <p className="text-4xl font-extrabold text-gray-900 mt-4">
                      {stat.prefix && <span>{stat.prefix}</span>}
                      {isInView ? (
                        <>
                          <CountUp
                            start={0}
                            end={stat.value}
                            duration={3}
                            separator=","
                          />
                          +
                        </>
                      ) : (
                        0
                      )}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Wrapper>
    </section>
  );
};

export default StatisticsSection;
