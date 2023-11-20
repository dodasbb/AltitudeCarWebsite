import { Component } from "react";
import "../styles/Models.css";

class ModelExtend extends Component {
  render() {
    return (
      <li class="model">
        <div className="model__wrapper">
          <img src={this.props.img} class="model__img" alt="Model Image" />
          <div className="model__description">
            <div className="model__description--wrapper">
              <h2 className="model__description--title">
                {this.props.heading}
              </h2>
              <p className="model__description--paragraph">{this.props.text}</p>
              <p className="model__description--paragraph-cost">
                From ${this.props.price}
              </p>
              <div className="model__description--button-wrapper">
                <button className="model__description--button model__description--button-primary">
                  Build your {this.props.btntext}
                </button>
                <button className="model__description--button">
                  All {this.props.btntext} Models
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default ModelExtend;
