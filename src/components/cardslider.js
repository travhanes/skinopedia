import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../cardslider.css";
import Data from "../data/skinConditions.json";

function CardSlider() {
  const [flip, setFlip] = useState(true);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Carousel
          variant="dark"
          interval={null}
          style={{
            border: "1px solid black",
            width: "1000px",
            background: "brown",
          }}
          onSlide={() => setFlip(true)}
        >
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "500px",
                width: "100%",
              }}
              onClick={() => setFlip(!flip)}
            >
              {flip && (
                <img
                  src={Data[3].picture_1}
                  alt="First Card"
                  style={{ height: "100%" }}
                />
              )}
              {!flip && (
                <div>
                  <h1 style={{ fontSize: "60px", color: "white" }}>
                    {Data[3].name}
                  </h1>
                </div>
              )}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "500px",
                width: "100%",
              }}
              onClick={() => setFlip(!flip)}
            >
              {flip && (
                <img
                  src={Data[3].picture_2}
                  alt="Second Card"
                  style={{ height: "100%" }}
                />
              )}
              {!flip && (
                <div>
                  <h1 style={{ fontSize: "60px", color: "white" }}>
                    {Data[3].name}
                  </h1>
                </div>
              )}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "500px",
                width: "100%",
              }}
              onClick={() => setFlip(!flip)}
            >
              {flip && (
                <img
                  src={Data[0].picture_1}
                  alt="Third Card"
                  style={{ height: "100%" }}
                />
              )}
              {!flip && (
                <div>
                  <h1 style={{ fontSize: "60px", color: "white" }}>
                    {Data[0].name}
                  </h1>
                </div>
              )}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "500px",
                width: "100%",
              }}
              onClick={() => setFlip(!flip)}
            >
              {flip && (
                <img
                  src={Data[4].picture_2}
                  alt="Third Card"
                  style={{ height: "100%" }}
                />
              )}
              {!flip && (
                <div>
                  <h1 style={{ fontSize: "60px", color: "white" }}>
                    {Data[4].name}
                  </h1>
                </div>
              )}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "500px",
                width: "100%",
              }}
              onClick={() => setFlip(!flip)}
            >
              {flip && (
                <img
                  src={Data[4].picture_1}
                  alt="Third Card"
                  style={{ height: "100%" }}
                />
              )}
              {!flip && (
                <div>
                  <h1 style={{ fontSize: "60px", color: "white" }}>
                    {Data[4].name}
                  </h1>
                </div>
              )}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CardSlider;
