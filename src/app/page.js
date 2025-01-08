import React from 'react'
import HomePage from './pages/HomePage'
import './home.css'
export const metadata = {
  title: "Solutions Innov8 | Expert IT Services - Web, App, UI/UX, SEO & More",
  description: "Discover top-notch IT services at Solutions Innov8. We specialize in web development, app development, UI/UX design, SEO, graphic design, SQA, digital marketing, and more. Your one-stop IT solutions provider.",
  keywords: "IT services, web development, app development, UI/UX design, SEO services, graphic design, SQA, digital marketing, IT company, software solutions, Solutions Innov8",
  author: "Solutions Innov8",
  robots: "index, follow",
  og: {
    title: "Solutions Innov8 | Expert IT Services - Web, App, UI/UX, SEO & More",
    description: "Discover top-notch IT services at Solutions Innov8. We specialize in web development, app development, UI/UX design, SEO, graphic design, SQA, digital marketing, and more. Your one-stop IT solutions provider.",
    type: "website",
    url: "https://www.solutionsinnov8.com",
    image: "/images/navbar/services.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions Innov8 | Expert IT Services - Web, App, UI/UX, SEO & More",
    description: "Discover top-notch IT services at Solutions Innov8. We specialize in web development, app development, UI/UX design, SEO, graphic design, SQA, digital marketing, and more. Your one-stop IT solutions provider.",
    image: "/images/navbar/services.svg",
  },
};
export const viewport = "width=device-width, initial-scale=1";
const page = () => {
  return (
    <div>
      <HomePage />
    </div>
  )
}

export default page
