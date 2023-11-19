import React from "react";
import "../styles/Models.css";
import ModelExtend from "./ModelExtend";
import { ModelData } from "./ModelData";

function Models() {
  return (
    <section id="models">
      <div className="container model__container">
        <div className="row">
          <h1 className="models__title">Models</h1>
          <p className="models__title--paragraph">
            Browse your favorite supercars
          </p>
          <ul class="models__list">
            {ModelData.map((item) => {
              return (
                <ModelExtend
                  heading={item.name}
                  text={item.description}
                  price={item.price}
                  img={item.img}
                  btntext={item.buttontext}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
} /* Use array mapping to make this even better */

export default Models;
