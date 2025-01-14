import React from 'react'
import Courses from '../pages/Courses'
export const metadata = {
  title: "IT Courses by Solutions Innov8 | Web Development, App Development, SEO & More",
  description:
    "Explore professional IT courses at Solutions Innov8. Learn web development, app development, SEO, UI/UX design, digital marketing, and more. Our expert instructors will guide you to success in the tech industry. Enroll now to enhance your skills!",
  keywords:
    "IT courses in islamabad, web development courses in islamabad, web development courses in rawalpindi, web development courses in pakistan, graphic designing courses in islamabad,graphic designing courses in rawalpindi, graphic designing courses in pakistan, app development courses, SEO courses, UI/UX design courses, digital marketing courses, online IT training, software development courses, tech education, Solutions Innov8 courses, uiux courses in islamabad, uiux courses in rawalpindi, uiux courses in pakistan, ",
  author: "Solutions Innov8",
  robots: "index, follow",
  og: {
    title: "IT Courses by Solutions Innov8 | Web Development, App Development, SEO & More",
    description:
      "Explore professional IT courses at Solutions Innov8. Learn web development, app development, SEO, UI/UX design, digital marketing, and more. Our expert instructors will guide you to success in the tech industry. Enroll now to enhance your skills!",
    type: "website",
    url: "https://www.solutionsinnov8.com/courses",
    image: "/images/navbar/courses-banner.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Courses by Solutions Innov8 | Web Development, App Development, SEO & More",
    description:
      "Explore professional IT courses at Solutions Innov8. Learn web development, app development, SEO, UI/UX design, digital marketing, and more. Our expert instructors will guide you to success in the tech industry. Enroll now to enhance your skills!",
    image: "/images/navbar/courses-banner.svg",
  },
};
export const viewport = "width=device-width, initial-scale=1";

const page = () => {
  return (
    <div>
      <Courses />
    </div>
  )
}

export default page
