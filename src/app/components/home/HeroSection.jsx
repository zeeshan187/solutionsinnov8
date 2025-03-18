"use client";
import React from "react";
import { motion } from "framer-motion";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { Button } from "antd";

const HeroSection = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7B0B22] via-[#450087] to-[#170055] animate-gradient"></div>

      <Wrapper>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariant}
          className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-85px)] w-full justify-between relative z-10"
        >
          {/* Text Section */}
          <div className="flex flex-col w-full lg:w-[45%] gap-3 mt-5 lg:mt-0">
            <motion.h2
              variants={itemVariant}
              className="text-3xl lg:text-5xl font-semibold text-center lg:text-start text-white headings"
            >
              Build Your Dream Website – Get a Free Quote Now!
            </motion.h2>
            <motion.p
              variants={itemVariant}
              className=" text-center lg:text-start text-white text-base"
            >
              At Solutions Innov8, we bring your ideas to life with cutting-edge IT services. From web and app development to branding, graphic design, and digital marketing, our team of experts delivers tailored solutions that drive results. Whether you're launching your first project or scaling your digital presence, we’re here to innovate, create, and elevate your vision.
            </motion.p>
            <motion.div
              variants={itemVariant}
              className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Button className="min-w-[230px] h-[60px] rounded-full border-2 border-white text-white font-semibold bg-transparent text-base md:text-2xl">
                  See Our Work
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Button className="min-w-[230px] h-[60px] rounded-full border-2 border-white font-semibold text-white bg-[#7B0B22] text-base md:text-2xl">
                  Get a Free Quote
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 40 }}
            animate={{ y: [20, -20, 20] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            whileHover={{ scale: 1.05 }}
            className="w-full lg:w-[50%]"
          >
            <Image
              src="/images/home/hero-img.svg"
              alt="hero img"
              width={500}
              height={300}
              className="w-full"
              priority
            />
          </motion.div>
        </motion.div>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
