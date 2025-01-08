import React from 'react'
import AboutPage from '../pages/AboutPage'
export const metadata = {
  title: "About Solutions Innov8 | Leading IT Services Provider",
  description:
    "Learn about Solutions Innov8, a trusted IT solutions provider. We specialize in web development, app development, graphic design, UI/UX, SEO, SQA, and digital marketing. Discover our mission to empower businesses with cutting-edge technology.",
  keywords:
    "About Solutions Innov8, IT company, IT services provider, web development company, app development company, graphic design agency, UI/UX experts, SEO services, digital marketing agency, IT solutions",
  author: "Solutions Innov8",
  robots: "index, follow",
  og: {
    title: "About Solutions Innov8 | Leading IT Services Provider",
    description:
      "Learn about Solutions Innov8, a trusted IT solutions provider. We specialize in web development, app development, graphic design, UI/UX, SEO, SQA, and digital marketing. Discover our mission to empower businesses with cutting-edge technology.",
    type: "website",
    url: "https://www.solutionsinnov8.com/about",
    image: "/images/navbar/about-us-banner.svg", // Replace with an appropriate image for the About page
  },
  twitter: {
    card: "summary_large_image",
    title: "About Solutions Innov8 | Leading IT Services Provider",
    description:
      "Learn about Solutions Innov8, a trusted IT solutions provider. We specialize in web development, app development, graphic design, UI/UX, SEO, SQA, and digital marketing. Discover our mission to empower businesses with cutting-edge technology.",
    image: "/images/navbar/about-us-banner.svg", // Replace with an appropriate image for the About page
  },
};
export const viewport = "width=device-width, initial-scale=1";

const page = () => {
  return (
    <>
      <AboutPage />
    </>
  )
}

export default page
