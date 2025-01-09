import React from "react";
import { Button } from "antd"; // Import Ant Design Button
import {
  TeamOutlined,
  LaptopOutlined,
  ClockCircleOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons"; // Ant Design icons
import Wrapper from "../shared/Wrapper";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "Build interactive user interfaces with React.js and Tailwind.",
    icon: <LaptopOutlined />,
    type: "Full-Time",
    salary: "PKR 100,000 - 120,000",
  },
  {
    id: 2,
    title: "Backend Developer",
    description: "Develop scalable APIs and manage databases with Node.js.",
    icon: <LaptopOutlined />,
    type: "Part-Time",
    salary: "PKR 60,000 - 80,000",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    description: "Design user-friendly and aesthetically pleasing interfaces.",
    icon: <TeamOutlined />,
    type: "Full-Time",
    salary: "PKR 90,000 - 110,000",
  },
  {
    id: 4,
    title: "Project Manager",
    description: "Oversee project deliverables and manage client communications.",
    icon: <ClockCircleOutlined />,
    type: "Contract",
    salary: "Negotiable",
  },
  // Add more jobs here
];

const CareersSection = () => {
  return (
    <Wrapper>
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-semibold text-center mb-8 red_color">
          Careers at Our Company
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6 border-2 border-[#7B0B22]"
            >
              <div className="text-4xl red_color mb-4">{job.icon}</div>
              <h3 className="text-xl font-semibold text-black">
                {job.title}
              </h3>
              <p className="text-black mt-2 text-center">
                {job.description}
              </p>
              <div className="flex justify-between w-full text-sm text-black mt-4">
                <span className="flex items-center">
                  <ClockCircleOutlined className="mr-2" />
                  {job.type}
                </span>
                <span className="flex items-center">
                  <DollarCircleOutlined className="mr-2" />
                  {job.salary}
                </span>
              </div>
              <Button
                type="primary"
                className="mt-4 w-full bg_red_color"
                onClick={() => alert(`Applied for ${job.title}`)}
              >
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default CareersSection;
