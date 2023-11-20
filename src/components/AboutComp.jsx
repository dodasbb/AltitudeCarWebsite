import React from "react";
import "../styles/AboutComp.css";

function AboutComp() {
  return (
    <div className="container about__container">
      <div className="about__info--container">
        <h1 className="about__info--title">About Altitude</h1>
        <p className="about__info--para">
          Altitude Motors was founded in 2023 by software engineer and car
          enthusiast Denis Doda. We seek to bridge the gap between what is
          achieveable, and what isn't. Altitude strongly believes in the future
          of super sports cars and works to preserve these values to push them
          into a third millenium which requires new concepts, innovative
          solutions and adoption of beauty.
        </p>

        <h1 className="about__info--title">Our Values</h1>
        <p className="about__info--para">
          Here at Altitude Motors, it's more than just a car. We decided to
          forge our brand as a symbol of inspiration and motivation to empower
          the greatest virtue of mankind: always going beyond limits, standards
          and conventions, because this is what humanity has been doing ever
          since. We took the mantle for the greatest challenge ever: moving
          forward and always raising the bar, going beyond the status quo to
          build a brand new limitless world.
        </p>

        <h1 className="about__info--title">Mission</h1>
        <p className="about__info--para">
          Our mission is quite simple: turning our visionary ideas into stunning
          creations for everyone to enjoy. This world is our canvas, and we seek
          to present the opportunity for everyone to appreciate our fine art. We
          are constantly dreaming up new ways to disrupt and reinvent the norm.
          Moving beyond supercars by creating new, unprecedented and exciting
          experiences anyone can get their hands on.
        </p>
      </div>
    </div>
  );
}

export default AboutComp;
