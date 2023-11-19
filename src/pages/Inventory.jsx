import React from "react";
import Hero from "../components/Hero";
import AboutImage from "../assets/InventoryImage.jpg";
import Models from "../components/Models";
import Footer from "../components/Footer";

function Inventory() {
  return (
    <>
      <Hero
        cName="hero__about"
        image={AboutImage}
        title="View Models"
        btnClass="none"
      />
      <Models/>
      <Footer />
    </>
  );
}

export default Inventory;
