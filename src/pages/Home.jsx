import React from "react";
import Hero from "../components/Hero";
import HomeImage from "../assets/HomeImage.jpg"

function Home() {
  return (
    <>
      <Hero
        cName="hero"
        image={HomeImage}
        title="Altitude Motors"
        text="Adrenaline Inducing Speed"
        btnText="Inventory"
        url="/inventory"
        btnClass="show"
      />
    </>
  );
}

export default Home;
