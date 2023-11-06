import React from 'react'
import Hero from "../components/Hero";
import AboutImage from "../assets/InventoryImage.jpg"

function Inventory() {
  return (
    <>
      <Hero
        cName="hero__about"
        image={AboutImage}
        title="View Models"
        btnClass="none"
      />
    </>
  )
}

export default Inventory