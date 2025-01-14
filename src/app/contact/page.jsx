import React from 'react'
import ContactUsPage from '../pages/ContactUsPage'
export const metadata = {
  title: "Contact Solutions Innov8 | Get in Touch with Our IT Services Team",
  description:
    "Have questions or need support? Contact Solutions Innov8, your trusted IT services provider. Reach out for inquiries about web development, app development, digital marketing, SEO, and more. Our team is here to help you with all your IT needs.",
  keywords:
    "contact Solutions Innov8, IT services contact, web development inquiry, app development support, SEO questions, digital marketing contact, IT company contact, get in touch with IT team",
  author: "Solutions Innov8",
  robots: "index, follow",
  og: {
    title: "Contact Solutions Innov8 | Get in Touch with Our IT Services Team",
    description:
      "Have questions or need support? Contact Solutions Innov8, your trusted IT services provider. Reach out for inquiries about web development, app development, digital marketing, SEO, and more. Our team is here to help you with all your IT needs.",
    type: "website",
    url: "https://www.solutionsinnov8.com/contact",
    image: "/images/navbar/contact-us-banner.svg", 
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Solutions Innov8 | Get in Touch with Our IT Services Team",
    description:
      "Have questions or need support? Contact Solutions Innov8, your trusted IT services provider. Reach out for inquiries about web development, app development, digital marketing, SEO, and more. Our team is here to help you with all your IT needs.",
    image: "/images/navbar/contact-us-banner.svg", 
  },
};
export const viewport = "width=device-width, initial-scale=1";

const page = () => {
  return (
    <>
      <ContactUsPage />
    </>
  )
}

export default page
