import React from "react";
import Hero from "../components/Hero";
import AboutImage from "../assets/ContactImage.jpg";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Hero
        cName="hero__about"
        image={AboutImage}
        title="Contact Us"
        btnClass="none"
      />

      <Footer />
    </>
  );
}

export default Contact;
