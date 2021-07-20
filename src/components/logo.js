import React from "react";
import SkinopediaBackground from "../images/skinopedia-background.png";

export default class Logo extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            textAlign: "center",
            height: "70px",
            background: `url(${SkinopediaBackground}) no-repeat`,
            backgroundSize: " 100% 70px",
          }}
        >
          <h1 style={{ fontSize: "50px", color: "rgb(254, 239, 227)" }}>
            S K I N - O - P E D I A
          </h1>
        </div>
      </>
    );
  }
}
