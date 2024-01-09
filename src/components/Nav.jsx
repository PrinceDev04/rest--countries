import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Nav() {
  let contrastToggle = false;
  let contrastMode = "";
  function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark--theme";
    } else {
      document.body.classList.remove("dark--theme");
    }
  }
  return (
    <div className="nav__bar">
      <h1 className="title">Where in the world?</h1>
      <div>
        <FontAwesomeIcon
          icon="fa-solid fa-circle-half-stroke"
          onClick={toggleContrast}
        />
        <span>{contrastMode}</span>
      </div>
    </div>
  );
}

export default Nav;
