import React, { useState } from "react";
import kawasakiDiseaseBlack from "../images/kawasaki_disease_black.png";
import kawasakiDiseaseWhite from "../images/kawasaki_disease_white.png";
import jaundiceBlack from "../images/jaundice_black.png";
import jaundiceWhite from "../images/jaundice_white.png";
import stomatitisBlack from "../images/stomatitis_black.png";

let cards = [
  {
    picture: kawasakiDiseaseBlack,
    description: "Kawasaki Disease",
  },
  {
    picture: kawasakiDiseaseWhite,
    description: "Kawasaki Disease",
  },
  {
    picture: jaundiceBlack,
    description: "Jaundice",
  },
  {
    picture: jaundiceWhite,
    description: "Jaundice",
  },
  {
    picture: stomatitisBlack,
    description: "Stomatitis",
  },
];

function CardSlider() {
  let [toggle, setToggle] = useState(true);
  let [cardNumber, setCardNumber] = useState(0);

  function toggleCard() {
    setToggle(!toggle);
  }

  function addCardNumber() {
    setToggle(true);
    if (cardNumber > 3) {
      setCardNumber(0);
    } else {
      setCardNumber(++cardNumber);
    }
  }

  function subtractCardNumber() {
    setToggle(true);
    if (cardNumber < 1) {
      setCardNumber(4);
    } else {
      setCardNumber(--cardNumber);
    }
  }

  let cardSide;
  if (toggle) {
    cardSide = (
      <div
        style={{
          height: "70%",
          width: "70%",
        }}
      >
        <img src={cards[cardNumber].picture} alt="card" height="100%" />
      </div>
    );
  } else {
    cardSide = <h1>{cards[cardNumber].description}</h1>;
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
              {cardSide}
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
          onClick={subtractCardNumber}
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
          onClick={addCardNumber}
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
