import React from "react";
import logo from "../../../assets/images/kodolab-logo.png";
import { Link } from 'react-router-dom'
import {
  FaPhoneAlt,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {ButtonWa} from "../../../components";

const Footer = () => {
  return (
    <div>
      <footer className="p-20 footer text-base-100"
        style={{ backgroundColor: "#e5e7eb" }}
      >
        <div>
          <Link to='/'><img src={logo} alt="KODOLab LOGO" className="w-32 sm:w-46" /></Link>
          <h1 className="text-2xl font-bold text-black "></h1>
          <span className="text-accent"> No-1, Malar Street,
          Thamine Township,Yangon, 11041, Myanmar (Burma).</span>
          <div className="flex items-center my-1">
            <FaPhoneAlt className="mr-6 text-2xl text-accent"></FaPhoneAlt>
            <h3 className="font-medium text-accent">+95 9772066277, +95 9974133003</h3>
          </div>
          <div className="flex items-center my-1">
            <MdEmail className="mr-6 text-2xl text-accent"></MdEmail>
            <h3 className="font-medium text-accent">info@kodolab.com</h3>
          </div>
        </div>
        {/* Tautan */}
        <div>
          <span className="font-bold text-black">Link</span>
          <Link
            to="/"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Home page</span>
          </Link>
          <Link
            to="/about"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>About</span>
          </Link>
          <Link
            to="/package"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Package</span>
          </Link>
          <Link
            to="/contact"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Contact</span>
          </Link>
          <Link
            to="/blog"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Blog</span>
          </Link>
        </div>
        {/* Fokus & Layanan */}
        <div>
          <span className="font-bold text-accent">Focus & Service</span>
          <Link
            to="/package"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Web Wedding</span>
          </Link>
          <Link
            to="/package"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Web E-Commerce</span>
          </Link>
          <Link
            to="/package"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Web Company Profile</span>
          </Link>
          <Link
            to="/package"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Web & Mobile Applications</span>
          </Link>
          <Link
            to="/package"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Branding & Content Creative</span>
          </Link>
          <Link
            to="/package"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Digital Marketing & Advertising</span>
          </Link>
        </div>
        <div className="flex items-center mt-4">
          <a
            href="#"
            target="blank"
            className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            href="#"
            target="blank"
            className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaFacebookSquare></FaFacebookSquare>
          </a>
          <a
            href="#"
            target="blank"
            className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaTwitterSquare></FaTwitterSquare>
          </a>
          <a
            href="#"
            target="blank"
            className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaInstagramSquare></FaInstagramSquare>
          </a>
        </div>
      </footer>
      <footer className="px-10 py-6 text-sm text-center text-base-100 border-base-300 bg-neutral ">
        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col items-center justify-center mt-6 md:flex-row text-accent">
          <p>&copy; Copyright 2024, KodoLab. All Rights Reserved</p>
        </div>

      </footer>
      {/* <ButtonWa /> */}
    </div>
  );
};

export default Footer;