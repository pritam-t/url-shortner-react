import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";
const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2">
      <div className="bg-white w-full sm:py-10 py-8  ">
        <h1 className="sm:text-4xl text-slate-800 text-3xl font-bold italic mb-3">
            About LinkForgee
          </h1>

          <p className="text-gray-700 text-sm mb-8 xl:w-[70%] lg:w-[80%] sm:w-[90%] w-full">
            LinkForgee is a modern URL management platform designed to help users create,
            organize, and track shortened links efficiently. Built using React, Spring
            Boot, PostgreSQL, Redis, and Kafka, the platform provides a secure and
            scalable solution for link sharing while delivering valuable insights through
            real time analytics. Users can create custom aliases, generate QR codes,
            monitor engagement, and manage links from a centralized dashboard.
          </p>

          <div className="space-y-6 xl:w-[70%] lg:w-[80%] sm:w-[90%] w-full">

            <div className="flex items-start">
              <FaLink className="text-blue-500 text-3xl mr-4" />
              <div>
                <h2 className="sm:text-2xl font-bold text-slate-800">
                  Custom URL Shortening
                </h2>
                <p className="text-gray-600">
                  Create short and meaningful links with optional custom aliases.
                  Personalized URLs improve readability, branding, and user trust while
                  making links easier to remember and share.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaShareAlt className="text-green-500 text-3xl mr-4" />
              <div>
                <h2 className="sm:text-2xl font-bold text-slate-800">
                  QR Code Generation
                </h2>
                <p className="text-gray-600">
                  Every shortened link can be accompanied by a downloadable QR code,
                  enabling instant access from mobile devices. This feature is useful for
                  events, presentations, marketing campaigns, and printed materials.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaChartLine className="text-red-500 text-3xl mr-4" />
              <div>
                <h2 className="sm:text-2xl font-bold text-slate-800">
                  Real Time Analytics
                </h2>
                <p className="text-gray-600">
                  Monitor link performance through detailed click analytics. LinkForgee
                  records user interactions and visualizes engagement trends, helping
                  users understand how their shared content performs over time.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaEdit className="text-purple-500 text-3xl mr-4" />
              <div>
                <h2 className="sm:text-2xl font-bold text-slate-800">
                  Secure Link Management
                </h2>
                <p className="text-gray-600">
                  User authentication is secured using JWT based authorization. Each user
                  can manage only their own links, ensuring privacy and protection of
                  personal data.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaLink className="text-orange-500 text-3xl mr-4" />
              <div>
                <h2 className="sm:text-2xl font-bold text-slate-800">
                  Link Expiration Support
                </h2>
                <p className="text-gray-600">
                  Set expiration dates for temporary links. Once expired, the shortened
                  URL automatically becomes inactive, making it suitable for limited time
                  campaigns, private sharing, and secure resource access.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaChartLine className="text-cyan-500 text-3xl mr-4" />
              <div>
                <h2 className="sm:text-2xl font-bold text-slate-800">
                  Scalable Architecture
                </h2>
                <p className="text-gray-600">
                  LinkForgee leverages Redis caching to improve response times and Kafka
                  event processing for click tracking. This architecture separates
                  analytics processing from user requests, providing a smooth and
                  responsive experience even under increased traffic.
                </p>
              </div>
            </div>

          </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Technology Stack
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-slate-100 p-4 rounded-lg">
            <h3 className="font-semibold text-lg">Frontend</h3>
            <p>React, React Query, Tailwind CSS, Chart.js</p>
          </div>

          <div className="bg-slate-100 p-4 rounded-lg">
            <h3 className="font-semibold text-lg">Backend</h3>
            <p>Spring Boot, Spring Security, JWT Authentication</p>
          </div>

          <div className="bg-slate-100 p-4 rounded-lg">
            <h3 className="font-semibold text-lg">Database</h3>
            <p>PostgreSQL hosted on Neon</p>
          </div>

          <div className="bg-slate-100 p-4 rounded-lg">
            <h3 className="font-semibold text-lg">Infrastructure</h3>
            <p>Redis, Apache Kafka, Docker, Render, Netlify</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default AboutPage;