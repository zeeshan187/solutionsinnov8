import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import { Button } from "antd";

const HeroSection = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-85px)] w-full justify-between">
          <div className="flex flex-col w-full lg:w-[45%] gap-5 mt-5 lg:mt-0">
            <h2 className="text-3xl lg:text-6xl lg:!leading-[70px] font-semibold text-center lg:text-start">All-in-One Web, App, and Social Solutions</h2>
            <p className="basic_text text-center lg:text-start">
              Receive guidance on digital strategy, direct access to design and
              development experts, and a platform that’s successfully launched
              over 100+ apps, websites, and social campaigns globally
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
              <Button className="min-w-[230px] h-[60px] rounded-full border-2 border-[#7B0B22] text-white font-semibold bg_red_color">Explore Our Services</Button>
              <Button className="min-w-[230px] h-[60px] rounded-full border-2 border-[#7B0B22] font-semibold text-[#7B0B22] ">Get Started Today</Button>
            </div>
          </div>
          <Image
            src="/images/home/hero-img.png"
            alt="hero img"
            width={500}
            height={300}
            className="w-full lg:w-[50%]"
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
