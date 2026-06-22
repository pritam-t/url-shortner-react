import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-custom-gradient text-white py-8 z-40 relative">
      <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row lg:justify-between items-center gap-4">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-2">LinkForgee</h2>
          <p>
            Smart URL Management Platform for Link Shortening,
            QR Code Generation, and Analytics Tracking
          </p>
        </div>

        <p className="mt-4 lg:mt-0">
          © {new Date().getFullYear()} LinkForgee. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-4 lg:mt-0">

          <a
            href="https://github.com/pritam-t"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/pritam-thopate/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://pritamportfolio-five.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaGlobe size={24} />
          </a>

          <a
            href="mailto:pritamthopate27@gmail.com"
            className="hover:text-gray-200 transition"
          >
            <FaEnvelope size={24} />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;