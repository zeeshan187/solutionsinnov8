import React from 'react'
import CareersPage from '../pages/CareersPage';
export const metadata = {
    title: "Careers at Solutions Innov8 | Join Our Team",
    description:
      "Explore exciting career opportunities at Solutions Innov8. Join our team of experts in web development, app development, graphic design, UI/UX, SEO, SQA, and digital marketing. Discover how you can grow with us.",
    keywords:
      "Careers at Solutions Innov8, IT jobs, web development careers, app development jobs, graphic design positions, UI/UX roles, SEO jobs, digital marketing careers, SQA positions, IT opportunities",
    author: "Solutions Innov8",
    robots: "index, follow",
    og: {
      title: "Careers at Solutions Innov8 | Join Our Team",
      description:
        "Be a part of Solutions Innov8, a leading IT solutions provider. Explore career opportunities in web development, app development, graphic design, and more. Join us to create innovative solutions.",
      type: "website",
      url: "https://www.solutionsinnov8.com/careers", 
      image: "/images/navbar/careers-banner.svg", 
    },
    twitter: {
      card: "summary_large_image",
      title: "Careers at Solutions Innov8 | Join Our Team",
      description:
        "Explore career opportunities at Solutions Innov8 and join our team of IT experts. We offer roles in web development, app development, graphic design, SEO, and more.",
      image: "/images/navbar/careers-banner.svg", 
    },
  };
export const viewport = "width=device-width, initial-scale=1";  
const page = () => {
  return (
    <>
      <CareersPage />
    </>
  )
}

export default page
