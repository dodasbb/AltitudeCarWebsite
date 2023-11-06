import {Component} from "react";
import "../styles/Models.css";
import GTRModel from "../assets/GTRModel.jpg";

class ModelData extends Component {
    render() {
        return (
            <li class="model">
              <div className="model__wrapper">
                <img src={this.props.img} class="model__img" alt="Model Image" />
                <div class="model__description">
                  <h2 class="model__description--title">{this.props.heading}</h2>
                  <p class="model__description--paragraph">
                    {this.props.text}
                  </p>
                  <p className="model__description--paragraph-cost">From ${this.props.price}</p>
                  <button className="model__description--button">View Models</button>
                </div>
              </div>
            </li>
        )
    }
}

export default ModelData;