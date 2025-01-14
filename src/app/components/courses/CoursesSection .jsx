import React from "react";
import { Button } from "antd";
import {
  CodeOutlined,
  AppstoreAddOutlined,
  AppstoreOutlined,
  EditOutlined,
  UserAddOutlined,
} from "@ant-design/icons"; 
import Wrapper from "../shared/Wrapper";

const courses = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Master the art of building modern websites and web applications.",
    icon: <CodeOutlined />,
  },
  {
    id: 2,
    title: "App Development",
    description:
      "Learn to create dynamic mobile applications for iOS and Android.",
    icon: <AppstoreAddOutlined />,
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "Unleash your creativity with graphic design skills, using Adobe tools.",
    icon: <EditOutlined />,
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Understand user behavior and design exceptional digital experiences.",
    icon: <AppstoreOutlined />,
  },
  {
    id: 5,
    title: "Digital Marketing",
    description:
      "Learn to grow brands using SEO, social media, and content marketing.",
    icon: <UserAddOutlined />,
  },
];

const CoursesSection = () => {
  return (
    <Wrapper>
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#7B0B22]">
          Our Courses
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6"
              style={{ border: "2px solid #7B0B22" }}
            >
              <div className="text-4xl text-[#7B0B22] mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {course.title}
              </h3>
              <p className="text-gray-600 mt-2 text-center">
                {course.description}
              </p>
              <Button
                type="primary"
                className="mt-4 w-full"
                style={{ backgroundColor: "#7B0B22", borderColor: "#7B0B22" }}
                onClick={() => alert(`Enrolled in ${course.title}`)}
              >
                Enroll Now
              </Button>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default CoursesSection;
