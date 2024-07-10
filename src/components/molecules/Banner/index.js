import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import bannerImg from "../../../assets/images/banner-msn-production.svg"
import "../../../pages/shared/Shared.css";
import { SecondaryBtn } from "../../../components";

const Banner = () => {
  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="mb-0 text-4xl font-bold">KodoLab</h1>
        <h2 className="my-6 text-2xl font-bold text-primary">Digital solutions for you!</h2>
        {/* </div> */}
        <p className="max-w-md mb-10 font-medium text-accent">
        At KodoLab, we are dedicated to providing top-tier technical solutions tailored to meet your business needs. From ERP solutions to mobile development, we are your trusted partner in navigating the digital landscape.
        </p>

        <div className="flex items-center mb-20">
          <a
            href="https://wa.me/6282125664554"
            target="blank"
          >
            <button className="primary-button">
              <span className="text-button-mobile">
              Free Consultation</span>
              <span>
                <FaAngleRight />
              </span>
            </button>
          </a>
          <Link to="/package" className="ml-4">
            <SecondaryBtn>
              <span className="text-button-mobile ">View Offers
              </span>
              <span>
                <FaAngleRight />
              </span>
            </SecondaryBtn>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="order-1 pt-10 lg:order-3 lg:pt-0 md:pt-0 sm:pt-0">
          <img src={bannerImg} alt="kodolab banner"></img>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
