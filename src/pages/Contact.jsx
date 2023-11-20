import React from "react";
import Hero from "../components/Hero";
import AboutImage from "../assets/ContactImage.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero__about"
        image={AboutImage}
        title="Contact Us"
        btnClass="none"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
