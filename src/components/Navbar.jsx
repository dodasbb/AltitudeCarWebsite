import React, { useState } from "react";
import "../styles/Navbar.css";
import { MenuData } from "./MenuData";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <h1 className="navbar__logo">Altitude</h1>

      <div className="menu__icons" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={click ? "navbar__links active" : "navbar__links"}>
        {/* Cannot use dot, use space ^ */}
        {MenuData.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i class={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <Link to={"/apply"}>
          <button className="navbar__button--apply">Apply</button>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
