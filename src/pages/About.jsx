import React from "react";
import Hero from "../components/Hero";
import AboutImage from "../assets/AboutImage.jpg";
import AboutComponent from "../components/AboutComp"
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Hero
        cName="hero__about"
        image={AboutImage}
        title="Our Mission"
        btnClass="none"
      />
      <AboutComponent/>
      <Footer />
    </>
  );
}

export default About;
