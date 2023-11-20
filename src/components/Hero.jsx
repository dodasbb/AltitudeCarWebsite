import React from "react";
import "../styles/Hero.css";

function Hero(items) {
  return (
    <>
      <div className={items.cName}>
        <img alt="Hero Image" src={items.image} />

        <div className="hero__text">
          <h1>{items.title}</h1>
          <p>{items.text}</p>
          <a className={items.btnClass}>{items.btnText}</a>
        </div>
      </div>
    </>
  );
}

export default Hero;
