import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="row row__column">
        <div class="footer__heading">
          <a className="footer__heading--a" href="#">
            <h1 className="footer__heading--text">Altitude</h1>
          </a>
          <p className="footer__heading--p">Find Your Dream Car</p>
        </div>
        <div className="footer__list">
          <div>
            <a className="link__hover-effect link__hover-effect--white" href="/about">
              ABOUT
            </a>
            <a className="link__hover-effect link__hover-effect--white" href="/inventory">
              INVENTORY
            </a>
            <a className="link__hover-effect link__hover-effect--white" href="/contact">
              CONTACT
            </a>
            <a className="link__hover-effect link__hover-effect--white" href="/apply">
              APPLY
            </a>
          </div>
          <div>
            <a
              className="link__hover-effect link__hover-effect--white"
              href="#models"
            >
              MODELS
            </a>
            <a
              className="link__hover-effect link__hover-effect--white no__cursor"
              href="#dealer"
            >
              FIND CENTER
            </a>
            <a className="link__hover-effect link__hover-effect--white no__cursor" href="">
              FINANCIALS
            </a>
            <a className="link__hover-effect link__hover-effect--white no__cursor" href="">
              COOKIE SETTINGS
            </a>
          </div>
          <div>
            <a className="link__hover-effect link__hover-effect--white no__cursor" href="">
              INSTAGRAM
            </a>
            <a className="link__hover-effect link__hover-effect--white no__cursor" href="">
              FACEBOOK
            </a>
            <a className="link__hover-effect link__hover-effect--white no__cursor" href="">
              TWITTER
            </a>
            <a className="link__hover-effect link__hover-effect--white no__cursor" href="">
              GITHUB
            </a>
          </div>
          <div>
            <a className="link__hover-effect link__hover-effect--white no__cursor" href="">
              CONTACT US
            </a>
            <a className="link__hover-effect link__hover-effect--white no__cursor" href="">
              COMPANY
            </a>
            <a className="link__hover-effect link__hover-effect--white no__cursor" href="">
              SUSTAINABILITY
            </a>
            <a className="link__hover-effect link__hover-effect--white no__cursor" href="">
              PRIVACY AND LEGAL
            </a>
          </div>
        </div>
        <div class="footer__copyright">Copyright © 2023 Denis Doda</div>
      </div>
    </footer>
  );
}

export default Footer;
