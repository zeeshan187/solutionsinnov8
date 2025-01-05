import React from "react";
import Wrapper from "../shared/Wrapper";
import { Button } from "antd";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-85px)] w-full justify-between">
          <Image
            src="/images/home/about.svg"
            alt="hero img"
            width={500}
            height={300}
            className="w-full lg:w-[45%]"
          />
          <div className="flex flex-col w-full lg:w-[50%] gap-5 mt-5 lg:mt-0">
            <h2 className="text-3xl lg:text-6xl lg:!leading-[70px] font-semibold text-center lg:text-start">
              Your Business Partner
            </h2>
            <p className="basic_text text-center lg:text-start">
              Solutions Innov8. stands at the intersection of innovation and
              excellence in the app development landscape. As a premier agency,
              we specialize in transforming ideas into dynamic digital
              solutions. 
            </p>
            <p className="basic_text text-center lg:text-start">
            Our team of developers and strategists work
              collaboratively to craft applications that not only meet but
              exceed client expectations. With a focus on user-centric design
              and cutting-edge technology, Solutions Innov8. is your trusted partner
              in navigating the digital future
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
              <Button className="min-w-[230px] h-[60px] rounded-full border-2 border-[#7B0B22] text-white font-semibold bg_red_color">
                Explore Our Services
              </Button>
              <Button className="min-w-[230px] h-[60px] rounded-full border-2 border-[#7B0B22] font-semibold text-[#7B0B22] ">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutUsSection;
