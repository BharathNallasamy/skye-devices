import React from "react";
import Hero from "../sub-section/Hero";
import MicroMeditation from "../sub-section/MicroMeditation";
import AncientIndia from "../sub-section/AncientIndia";
import HowItWorks from "../sub-section/HowItWorks";
import Comparison from "../sub-section/Comparison";
import Modes from "../sub-section/DeviceMode";
import NoPhone from "../sub-section/NoPhone";
import Press from "../sub-section/Press";
import Founders from "../sub-section/Founder";
import Features from "../sub-section/Features";
import Testimonials from "../sub-section/Testimonials";
import Gift from "../sub-section/Gift";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <MicroMeditation />
      <AncientIndia />
      <HowItWorks />
      <Comparison />
      <Modes />
      <NoPhone />
      <Press />
      <Founders />
      <Features />
      <Testimonials />
      <Gift />
      <Footer />
    </>
  );
};

export default HomePage;