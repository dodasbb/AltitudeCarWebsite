import React from "react";
import "../styles/FindDealer.css";
import DealerImage from "../assets/DealerImage.jpg";

function FindDealer() {
  return (
    <section className="dealer">
      <div className="dealer__container container">
        <div className="dealer__row">
          <div className="dealer__left">
            <h1 className="dealer__title">Find Your Altitude Center</h1>
            <p className="dealer__description">
              You ready to get behind the wheel and get your hands on your next dream car? Search our network
              to find an Altitude Center near you.
            </p>
            <div className="dealer__button--container">
              <button className="dealer__button">Search now.</button>
            </div>
          </div>
          <div className="dealer__right">
            <img
              src={DealerImage}
              alt="Dealership Image"
              className="dealer__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindDealer;
