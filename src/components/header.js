import React from "react";
import Background from "../skin_shade_background.JPG";

function Header() {
  function handleClick() {
    window.location = "/home";
  }

  return (
    <>
      <div
        style={{
          textAlign: "center",
          height: "70px",
          background: `url(${Background}) no-repeat`,
          backgroundSize: "100% 70px",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            color: "rgb(254, 239, 227)",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          S K I N - O - P E D I A
        </h1>
      </div>
    </>
  );
}

export default Header;
