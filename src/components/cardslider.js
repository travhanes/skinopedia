import React, { useState } from "react";

function CardSlider() {
  let [toggle, setToggle] = useState(true);

  function toggleCard() {
    setToggle(!toggle);
  }

  function toggleCardTrue() {
    setToggle(true);
  }

  let cardSide;
  if (toggle) {
    cardSide = <h1>picture</h1>;
  } else {
    cardSide = <h1>description</h1>;
  }

  return (
    <>
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
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "300px",
                width: "500px",
              }}
              onClick={toggleCard}
            >
              <h1>Card 1</h1>
              {cardSide}
            </div>
          </div>
          <div className="carousel-item">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "300px",
                width: "500px",
              }}
              onClick={toggleCard}
            >
              <h1>Card 2</h1>
              {cardSide}
            </div>
          </div>
          <div className="carousel-item">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "300px",
                width: "500px",
              }}
              onClick={toggleCard}
            >
              <h1>Card 3</h1>
              {cardSide}
            </div>
          </div>
          <div className="carousel-item">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "300px",
                width: "500px",
              }}
              onClick={toggleCard}
            >
              <h1>Card 4</h1>
              {cardSide}
            </div>
          </div>
          <div className="carousel-item">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "300px",
                width: "500px",
              }}
              onClick={toggleCard}
            >
              <h1>Card 5</h1>
              {cardSide}
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
          onClick={toggleCardTrue}
          style={{
            left: "-100px",
            border: "black 1px solid",
            background: "darkgrey",
          }}
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
          onClick={toggleCardTrue}
          style={{
            right: "-100px",
            border: "black 1px solid",
            background: "darkgrey",
          }}
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default CardSlider;
