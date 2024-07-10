import React from "react";
import { Banner, Service, Testimonial, Information } from "../../components";
import Package from "../Package";
import Kontak from "../Contact";

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <Service />
      <Package />
      <Testimonial />
      <Information />
      <Kontak />
    </div>
  );
};

export default Home;