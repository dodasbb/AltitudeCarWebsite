import React from "react";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Hero
        cName="hero"
        image="https://images.unsplash.com/photo-1617814086906-d847a8bc6fca?auto=format&fit=crop&q=80&w=2042&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Altitude Motors"
        text="Adrenaline Inducing Speed"
        btnText="Inventory"
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default Home;
