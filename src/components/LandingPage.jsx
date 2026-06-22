import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";

let desc =
  "Generate short, memorable links with ease using LinkForgee's intuitive interface. Share URLs effortlessly across platforms. Optimize your sharing strategy with LinkForgee. Track clicks and manage your links seamlessly to enhance your online presence. Generate short, memorable links with ease using LinkForgee's intuitive interface. Share URLs effortlessly across platforms.";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();
  console.log("TOKEN FROM LANDING PAGE: " + token);

  const dashBoardNavigateHandler = () => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/register");
    }
  };
  return (
    <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4">
      <div className="lg:flex-row flex-col    lg:py-5   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
        <div className=" flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl   md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
          >
            Create Smart Links, Track Performance, and Share With Confidence.
          </motion.h1>
          <p className="text-slate-700 text-sm my-5">
            LinkForgee is a modern URL management platform that helps you create
            branded short links, generate QR codes, monitor click analytics, and
            manage link lifecycles from a single dashboard. Whether you are sharing
            portfolios, projects, marketing campaigns, or business resources,
            LinkForgee provides the tools needed to track engagement and improve
            link performance.
          </p>
          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="bg-custom-gradient  w-40 text-white rounded-md  py-2"
            >
              Go To Dashboard
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="border-btnColor border w-40 text-btnColor rounded-md  py-2 "
            >
              Get Started
            </motion.button>
          </div>
        </div>
        <div className="   flex-1 flex   justify-center w-full">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-[480px] w-[400px] object-cover rounded-md"
            src="/images/img2.png"
            alt=""
          />
        </div>
      </div>
      <div id="features" className="sm:pt-12 pt-7">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-slate-800 font-roboto font-bold lg:w-[60%]  md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
        >
          Everything you need to create, manage, and analyze your shortened links{" "}
        </motion.p>
        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          <Card
            title="Custom Short Links"
            desc="Create clean and memorable URLs with optional custom aliases. Improve readability and make your links easier to recognize and share."
          />
          <Card
            title="QR Code Generation"
            desc="Generate QR codes automatically for every shortened link, enabling quick access from mobile devices and printed materials."
          />
          <Card
            title="Real Time Analytics"
            desc="Track clicks and engagement through interactive analytics dashboards that help you understand how your links perform."
          />
          <Card
            title="Link Expiration & Security"
            desc="Protect resources with expiring links and secure user authentication powered by JWT based authorization."
          />
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-600">Custom</h2>
            <p className="text-slate-600">Aliases</p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-600">QR</h2>
            <p className="text-slate-600">Code Support</p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-600">Real Time</h2>
            <p className="text-slate-600">Analytics</p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-purple-600">Secure</h2>
            <p className="text-slate-600">Authentication</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;