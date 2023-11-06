import React from "react";
import GTRModel from "../assets/GTRModel.jpg";
import HuracanModel from "../assets/GTRModel.jpg";
import "../styles/Models.css";
import ModelData from "./ModelData";

function Models() {
  return (
    <section id="models">
      <div className="container">
        <div className="row">
          <h1 className="models__title">Models</h1>
          <p className="models__title--paragraph">
            Browse your favorite supercars
          </p>
          <ul class="models__list">
            <ModelData
              heading="Nissan GT-R"
              text="An unmatched blend of power and soul: the Nissan GT-R. Experience the singular supercar that sculpts the wind."
              price="120,990"
              img={GTRModel}
            />

            <ModelData
              heading="Lamborghini Huracan"
              text="The finest Italian craftsmanship lavished on finishes of unprecedented prestige and quality."
              price="220,000"
              img={GTRModel}
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Models;
