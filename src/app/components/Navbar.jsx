"use client";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Image from "next/image";
import Wrapper from "./Wrapper";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentService, setCurrentService] = useState({
    heading: "Web Development",
    image: "/images/navbar/service.svg",
  });

  const services = [
    {
      id: 1,
      name: "Web Development",
      heading: "Build Stunning Websites",
      image: "/images/navbar/service.svg",
    },
    {
      id: 2,
      name: "App Development",
      heading: "Create Robust Applications",
      image: "/images/navbar/service.svg",
    },
    {
      id: 3,
      name: "UI/UX Design",
      heading: "Design Intuitive Interfaces",
      image: "/images/navbar/service.svg",
    },
    {
      id: 4,
      name: "Digital Marketing",
      heading: "Design Intuitive Interfaces",
      image: "/images/navbar/service.svg",
    },
    {
      id: 5,
      name: "Software Quality Assurance",
      heading: "Design Intuitive Interfaces",
      image: "/images/navbar/service.svg",
    },
  ];

  const handleServiceHover = (service) => {
    setCurrentService({ heading: service.heading, image: service.image });
  };

  const servicesMenu = (
    <Menu
      className="bg-white shadow-md"
      items={[
        {
          label: (
            <div className="flex w-full min-h-[300px] pt-4">
              {/* Left Block */}
              <div className="w-[50%] px-4">
                <h3 className="text-base md:text-xl font-semibold mb-3">
                  {currentService.heading}
                </h3>
                <img
                  src={currentService.image}
                  alt={currentService.heading}
                  className="w-full h-auto rounded-md"
                />
              </div>

              {/* Right Block */}
              <div className="w-[50%] flex flex-col space-y-2 px-4">
                <h3 className="text-base md:text-xl font-semibold mb-3">
                  Services
                </h3>
                {services.map((service) => (
                  <Button
                    key={service.id}
                    className="text-left"
                    onMouseEnter={() => handleServiceHover(service)}
                  >
                    {service.name}
                  </Button>
                ))}
              </div>
            </div>
          ),
          key: "0",
        },
      ]}
    />
  );

  const handleMenuItemClick = () => {
    setMenuOpen(false); // Hide menu after clicking a menu item
  };

  return (
    <div className="fixed w-full top-0 px-3 py-4 bg-white shadow-md z-20">
      <Wrapper>
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold z-30">
            <Image
              src="/images/navbar/logo.svg"
              alt="logo img"
              width={200}
              height={50}
              className="hidden md:flex"
            />
            <Image
              src="/images/navbar/small-logo.svg"
              alt="logo img"
              width={200}
              height={50}
              className="flex md:hidden w-[50px]"
            />
          </Link>

          {/* Center Menu (Desktop) */}
          <div className="hidden md:flex space-x-6 z-30">
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-500">
              About
            </Link>
            <Dropdown
              overlay={servicesMenu}
              trigger={["hover"]}
              onVisibleChange={(visible) => setDropdownOpen(visible)}
              placement="bottom"
              overlayStyle={{
                width: "50%", // Set the width of the dropdown
                marginLeft: "25%", // Center the dropdown by applying margin
              }}
            >
              <Link
                href="/services"
                className="flex items-center hover:text-blue-500"
                onClick={(e) => e.preventDefault()}
              >
                Services {dropdownOpen ? <UpOutlined /> : <DownOutlined />}
              </Link>
            </Dropdown>
            <Link href="/courses" className="hover:text-blue-500">
              Courses
            </Link>
            <Link href="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </div>

          {/* Right Button (Desktop) */}
          <Button className="hidden md:block bg_red_color min-w-[150px] h-[50px] text-white font-semibold rounded-xl">
            Schedule Meeting
          </Button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center z-30">
            <Button
              type="link"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black text-2xl p-0"
            >
              {menuOpen ? <RxCross2 /> : <RiMenu3Fill />}
            </Button>
          </div>

          {/* Mobile Menu (Full Screen) */}
          {menuOpen && (
            <div className=" flex md:hidden absolute top-[85px] left-0 w-full h-[calc(100vh-70px)] bg_red_color text-white shadow-2xl  flex-col items-center justify-start transition-all duration-300 ease-in-out z-20 pt-5">
              <a
                href="#home"
                className="text-xl mb-4 hover:text-blue-500"
                onClick={handleMenuItemClick}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-xl mb-4 hover:text-blue-500"
                onClick={handleMenuItemClick}
              >
                About
              </a>
              <Dropdown
                overlay={servicesMenu}
                trigger={["click"]}
                onVisibleChange={(visible) => setDropdownOpen(visible)}
                placement="bottomCenter"
                overlayStyle={{
                  width: "100%", // Full width dropdown in mobile view
                }}
              >
                <Link
                  href="/services"
                  className="flex items-center mb-4 text-xl hover:text-blue-500"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuItemClick(); // Hide menu on click
                  }}
                >
                  Services {dropdownOpen ? <UpOutlined /> : <DownOutlined />}
                </Link>
              </Dropdown>
              <a
                href="#courses"
                className="text-xl mb-4 hover:text-blue-500"
                onClick={handleMenuItemClick}
              >
                Courses
              </a>
              <Link
                href="/contact"
                className="text-xl mb-4 hover:text-blue-500"
                onClick={handleMenuItemClick}
              >
                Contact
              </Link>

              {/* Schedule Meeting (Mobile) */}
              <Button
                className="bg_red_color min-w-[150px] h-[50px] text-white font-semibold rounded-xl mt-4"
                onClick={handleMenuItemClick}
              >
                Schedule Meeting
              </Button>
            </div>
          )}
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;