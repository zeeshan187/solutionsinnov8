import React from "react";
import { Button, Card } from "antd";
import Wrapper from "../shared/Wrapper";

const ServiceDetailsSection = ({ title, description, features }) => {
  return (
    <div className="bg-gray-100 ">
      <Wrapper>
        <div className="py-12 ">
          <div className=" mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-lg text-gray-600 mb-8">{description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="shadow-lg border-2 border-[#7B0B22]"
                hoverable
              >
                <Card.Meta
                  title={
                    <div className="flex flex-col items-center text-center">
                      <span className="red_color text-4xl mb-4">{feature.icon}</span>{" "}
                      <span className="text-xl font-semibold text-gray-800">
                        {feature.title}
                      </span>
                    </div>
                  }
                  description={
                    <div className="flex flex-col items-center text-center">
                      <p className="text-sm text-gray-600 mt-2">
                        {feature.description}
                      </p>
                      <Button
                        type="primary"
                        className="mt-4 w-full"
                        style={{
                          backgroundColor: "#7B0B22",
                          borderColor: "#7B0B22",
                        }}
                        onClick={() => alert(`Enrolled in ${course.title}`)}
                      >
                        Enroll Now
                      </Button>
                    </div>
                  }
                />
              </Card>
            ))}
          </div>
        </div>
      </Wrapper>
      {/* <Button>Contact Us</Button> */}
    </div>
  );
};

export default ServiceDetailsSection;
