"use client"
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formRef.current,
        "your_public_key" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div className="bg-gray-100 py-12 px-6 md:px-20 lg:px-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="bg_red_color text-white p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Let’s Connect!</h2>
          <p className="text-lg mb-6">
            Have a question or want to work with us? We'd love to hear from you!
          </p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <span className="text-2xl "><i className="fas fa-map-marker-alt"></i></span>
              <p className="m-0">National Aerospace Science & Technology Park</p>
            </li>
            <li className="flex items-center space-x-4">
              <span className="text-2xl"><i className="fas fa-envelope"></i></span>
              <p className="m-0">info@solutionsinnov8.com</p>
            </li>
            <li className="flex items-center space-x-4">
              <span className="text-2xl"><i className="fas fa-phone-alt"></i></span>
              <p className="m-0">+92 305 7567 185</p>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-[#7A0B20] mb-6">
            Contact Us
          </h2>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#7A0B20]"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#7A0B20]"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#7A0B20]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#7A0B20] text-white font-bold rounded-lg hover:bg-[#65091A] transition-all"
            >
              Send Message
            </button>
            {isSent && (
              <p className="text-center text-sm mt-4 text-green-500">
                Your message has been sent successfully. Thank you!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
