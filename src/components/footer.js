import React from "react";
import Background from "../skin_shade_background.JPG";

function Footer() {
  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "20px",
        height: "60px",
        width: "100%",
        position: "fixed",
        bottom: "0px",
        background: `url(${Background}) no-repeat`,
        backgroundSize: " 100% 70px",
      }}
    >
      <p style={{ fontSize: "16px", color: "rgb(254, 239, 227)" }}>
        created by New Technologist interns 2021
      </p>
    </div>
  );
}

export default Footer;
