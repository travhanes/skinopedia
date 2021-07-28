// import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  let genData = props.genLanguage;

  useEffect(() => {
    const items = document.querySelectorAll(".item");

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("active");
    }

    switch (props.page) {
      case "0":
        document.querySelector(".home").classList.add("active");
        break;
      case "1":
        document.querySelector(".flash").classList.add("active");
        break;
      case "2":
        document.querySelector(".exp").classList.add("active");
        break;
      case "3":
        document.querySelector(".cont").classList.add("active");
        break;
      case "4":
        document.querySelector(".about").classList.add("active");
        break;
      default:
        document.querySelector(".home").classList.add("active");
        break;
    }
  }, []);

  return (
    <div className="ui five item menu" style={{ margin: "0" }}>
      <Link className="home item active" to="/">
        {genData[0].navbar_button_1}
      </Link>
      <Link className="flash item" to="/flashcards">
        {genData[0].navbar_button_2}
      </Link>
      <Link className="exp item" to="/explore">
        {genData[0].navbar_button_3}
      </Link>
      <Link className="about item" to="/about">
        {genData[0].navbar_button_4}
      </Link>
      <Link className="cont item" to="/contribute">
        {genData[0].navbar_button_5}
      </Link>
    </div>
  );
}

export default Navbar;
