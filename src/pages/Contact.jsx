import React from "react";
import Hero from "../components/Hero";
import AboutImage from "../assets/ContactImage.jpg"

function Contact() {
  return (
    <>
      <Hero
        cName="hero__about"
        image={AboutImage}
        title="Contact Us"
        btnClass="none"
      />
    </>
  );
}

export default Contact;
