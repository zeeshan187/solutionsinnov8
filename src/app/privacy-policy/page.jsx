import React from "react";
import PrivacyPolicy from "../pages/PrivacyPolicy";
export const metadata = {
  title: "Privacy Policy | Solutions Innov8",
  description:
    "Read the Privacy Policy of Solutions Innov8 to understand how we collect, use, and protect your data. Learn more about your rights and how we ensure data security and privacy.",
  keywords:
    "Privacy policy, Solutions Innov8, data protection, GDPR, privacy, user data, terms and conditions, data security, IT services privacy",
  author: "Solutions Innov8",
  robots: "index, follow",
  og: {
    title: "Privacy Policy | Solutions Innov8",
    description:
      "Our Privacy Policy explains how we handle your personal information and data security, outlining our commitment to protecting your privacy.",
    type: "website",
    url: "https://www.solutionsinnov8.com/privacy-policy", 
    image: "/images/navbar/privacy-policy-banner.svg", 
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Solutions Innov8",
    description:
      "Learn how Solutions Innov8 protects your personal data and ensures privacy and security across our services.",
    image: "/images/navbar/privacy-policy-banner.svg", 
  },
};
export const viewport = "width=device-width, initial-scale=1";
const page = () => {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
};

export default page;
