import React from "react";

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        data-interval="false"
        style={{
          position: "absolute",
          bottom: "50%",
          left: "50%",
          transform: "translate(-50%,0%)",
          height: "300px",
          width: "500px",
          border: "1px black solid",
          background: "darkgrey",
          color: "white",
        }}
      ></div>
    </div>
  );
}

export default Carousel;
