"use client";
import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import CountUp from "react-countup";
import Wrapper from "../Wrapper";

const StatisticsSection = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("stats");
      const position = element.getBoundingClientRect();

      if (position.top <= window.innerHeight && position.bottom >= 0) {
        setIsInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    {
      title: "Clients",
      value: 1200,
      icon: "fas fa-users",
      color: "bg-blue-500",
    },
    {
      title: "Projects",
      value: 500,
      icon: "fas fa-tasks",
      color: "bg-green-500",
    },
    {
      title: "Revenue",
      value: 1000000,
      icon: "fas fa-dollar-sign",
      color: "bg-yellow-500",
      prefix: "$",
    },
    {
      title: "Employees",
      value: 350,
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
        <div className=" mx-auto px-6">
          <h2 className=" text-3xl lg:text-6xl font-extrabold text-center text-gray-800 mb-12 tracking-wide">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7B0B22] to-[#c73955]">
              Our Achievements
            </span>
          </h2>
          <Row gutter={[32, 32]} justify="center">
            {stats.map((stat, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <div className="flex flex-col items-center bg-white shadow-xl rounded-xl p-8 transform transition duration-500 hover:scale-105">
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
