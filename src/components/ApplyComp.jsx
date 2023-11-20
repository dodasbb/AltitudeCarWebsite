import React from "react";
import "../styles/Apply.css";
import { Link } from "react-router-dom";

function ApplyComp() {
  return (
    <div className="apply__container">
      <img
        className="apply__img"
        src="https://assets.identity.porsche.com/img/background.jpg"
        alt="Apply Image"
      />
      <div className="apply__form--container">
        <div className="apply__text">
          <h1 className="apply__header">Begin Your Journey</h1>
          <h3 className="apply__welcome">Welcome</h3>
          <form className="apply__form">
            <input placeholder="Email Address" />
            <button className="form__continue">Continue</button>
          </form>
          <p className="signup__para">Don't have an account?  <span><a className="signup__button" href="">Sign Up</a></span>
          <Link to="/">
            <p className="return__home">Return Home</p>
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ApplyComp;
