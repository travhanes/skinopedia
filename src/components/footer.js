import React from "react";
import SkinopediaBackground from "../images/skinopedia-background.png";

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
        background: `url(${SkinopediaBackground}) no-repeat`,
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
