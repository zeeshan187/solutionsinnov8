import React from 'react'
import PortfolioPage from '../pages/PortfolioPage';
export const metadata = {
    title: "Our Portfolio | Showcasing Solutions Innov8's IT Excellence",
    description:
      "Explore our portfolio at Solutions Innov8, showcasing our expertise in web development, app development, digital marketing, SEO, and more. Discover how our innovative IT solutions have helped businesses thrive.",
    keywords:
      "Solutions Innov8 portfolio, IT project showcase, web development portfolio, app development projects, digital marketing case studies, SEO success stories, IT company work samples",
    author: "Solutions Innov8",
    robots: "index, follow",
    og: {
      title: "Our Portfolio | Showcasing Solutions Innov8's IT Excellence",
      description:
        "Explore our portfolio at Solutions Innov8, showcasing our expertise in web development, app development, digital marketing, SEO, and more. Discover how our innovative IT solutions have helped businesses thrive.",
      type: "website",
      url: "https://www.solutionsinnov8.com/portfolio",
      image: "/images/navbar/portfolio-banner.svg", 
    },
    twitter: {
      card: "summary_large_image",
      title: "Our Portfolio | Showcasing Solutions Innov8's IT Excellence",
      description:
        "Explore our portfolio at Solutions Innov8, showcasing our expertise in web development, app development, digital marketing, SEO, and more. Discover how our innovative IT solutions have helped businesses thrive.",
      image: "/images/navbar/portfolio-banner.svg", 
    },
  };
  
export const viewport = "width=device-width, initial-scale=1";

const page = () => {
  return (
    <>
      <PortfolioPage />
    </>
  )
}

export default page
