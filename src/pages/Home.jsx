import React from "react";
import Hero from "../components/Hero";
import HomeImage from "../assets/HomeImage.jpg";
import Navbar from "../components/Navbar";
import Models from "../components/Models";
import FindDealer from "../components/FindDealer";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        image={HomeImage}
        title="Altitude Motors"
        text="Adrenaline Inducing Speed"
        btnText="Inventory"
        url="/inventory"
        btnClass="show"
      />
      <Models />
      <FindDealer />
      <Footer />
    </>
  );
}

export default Home;
