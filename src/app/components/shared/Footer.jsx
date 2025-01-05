// components/Footer.js
import { Row, Col } from "antd";
import Image from "next/image";
import Wrapper from "./Wrapper";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <Wrapper>
        <div className="container mx-auto">
          <Row gutter={[16, 16]}>
            {/* Company Info */}
            <Col xs={24} sm={12} md={8} className="flex flex-col gap-2">
              <Image
                src="/images/navbar/footer-logo.svg"
                alt="logo"
                width={200}
                height={50}
              />
              <p className="text-sm text-gray-400">
                Providing top-notch IT services like Web Development, App
                Development, UI/UX, Graphic Design, SQA, and SEO. Learn from our
                expert-led IT courses and excel in the tech industry.
              </p>
              <div className=" flex gap-4">
                <a href="#" className="text-blue-500 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-blue-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-pink-600 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-blue-700 hover:text-white">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </Col>

            {/* Services */}
            <Col xs={24} sm={12} md={5}>
              <h3 className="text-lg font-bold mb-4">Our Services</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    App Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Graphic Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    SEO Optimization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    SQA Testing
                  </a>
                </li>
              </ul>
            </Col>

            {/* Quick Links */}
            <Col xs={24} sm={12} md={5}>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </Col>

            {/* Contact Details */}
            <Col xs={24} sm={12} md={6}>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>
                  <span className="font-semibold">Email:</span>{" "}
                  info@solutionsinnov8.com
                </li>
                <li>
                  <span className="font-semibold">Phone:</span>+92 305 7567 185
                </li>
                <li>
                  <span className="font-semibold">Address:</span> National
                  Aerospace Science & Technology Park
                </li>
              </ul>
            </Col>
          </Row>

          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Solutions Innov8. All rights reserved.
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
