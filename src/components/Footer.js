import React from "react";

import { footer_logo } from "../assets";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-gradient text-white py-8 pt-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="">
          <img
            src={footer_logo}
            alt="Your Alt Text"
            className="w-1/3 h-1/3 p-0 mt-[-10px]"
          />
          <p className="font-montserrat font-normal text-xs leading-4 py-10">
            {" "}
            ProSuite is a suite of cloud-based platforms which aims at
            transforming and automating enterprise tasks. Our solutions focus on
            user experience and easy-to-use tools including Asset Management,
            Risk Management and Perfomance Management.
          </p>
        </div>
        <div className="">
          <h6 className="font-bold text-base leading-4">Services</h6>
          <ul className="py-10">
            <li className="py-1">ProSuite Risk</li>
            <li className="py-1">ProSuite Docs</li>
            <li className="py-1">ProSuite Asset</li>
            <li className="py-1">ProSuote Performance</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-montserrat font-bold text-base leading-4">
            Links
          </h6>
          <ul className="font-sans py-10">
            <li className="py-1">Home</li>
            <li className="py-1">About</li>
            <li className="py-1">Solutions</li>
            <li className="py-1">Contact</li>
            <li className="py-1">Request a Demo</li>
          </ul>
        </div>
        <div className="">
          <p className="font-montserrat font-bold text-base leading-4">
            Contact Us
          </p>
          <p className="font-montserrat font-normal text-xs leading-4 py-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia
            morbi praesent nulla tempor sagittis. Curabitur donec cursus donec
            risrdum nullam orci sit dictum. Molestie nunc sed amet vulputate in.
            Condimentum mi massa id interdum risus, tortor nunc mauris.
          </p>
        </div>
      </div>
      <div className="w-full font-montserrat flex flex-col py-4 mx-auto justify-between sm:flex-row text-white">
        <p className="text-xs leading-4 py-4 px-12">
          2024&copy; ProSuite.All rights reserved{" "}
          <span className="px-20">Privacy Policy</span>
        </p>
        <div className="flex gap-4 px-12 relative">
          <BsTwitterX className="icon" />
          <FaFacebookF className="icon" />
          <FaInstagram className="icon" />
          <FaGithub className="icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
