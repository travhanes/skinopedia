import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  componentDidMount() {
    const items = document.querySelectorAll(".item");

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("active");
    }

    switch (this.props.page) {
      case "0":
        document.querySelector(".home").classList.add("active");
        break;
      case "1":
        document.querySelector(".flash").classList.add("active");
        break;
      case "2":
        document.querySelector(".exp").classList.add("active");
        break;
      case "4":
        document.querySelector(".about").classList.add("active");
        break;
      case "3":
        document.querySelector(".cont").classList.add("active");
        break;
      default:
        document.querySelector(".home").classList.add("active");
        break;
    }
  }

  render() {
    return (
      <div class="ui five item menu" style={{ marginTop: "0" }}>
        <Link class="home item active" to="/">
          Homepage
        </Link>
        <Link class="flash item" to="/flashcards">
          Flashcards
        </Link>
        <Link class="exp item" to="/explore">
          Explore
        </Link>
        <Link class="about item" to="/about">
          About
        </Link>
        <Link class="cont item" to="/contribute">
          Contribute
        </Link>
      </div>
    );
  }
}
