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
import Corporates from "../sub-section/Corporate";
import Breathing from "../sub-section/Breathing";
import Use from "../sub-section/Use";
import Mode from "../sub-section/Modes"
import Science from "../sub-section/Science"
const HomePage = () => {
  return (
    <>
      <Hero />
      <Press />

      <Testimonials /> 
    <Science />
      <Mode />
      <Use />
      <Breathing />
      <Founders />
      <Corporates />
      <Gift />
      <Footer />
    </>
  );
};

export default HomePage;