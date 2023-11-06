import React from 'react'
import Hero from "../components/Hero";
import AboutImage from "../assets/AboutImage.jpg"

function About() {
  return (
    <>
      <Hero
        cName="hero__about"
        image={AboutImage}
        title="Our Mission"
        btnClass="none"
      />
    </>
  )
}

export default About