import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../cardslider.css";

function CardSlider(props) {
  const [flip, setFlip] = useState(true);
  const num0 = props.dataNum[0];
  const num1 = props.dataNum[1];
  const num2 = props.dataNum[2];
  const num3 = props.dataNum[3];
  const num4 = props.dataNum[4];
  let Data = props.language;

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
                  src={Data[num0].picture_1}
                  alt="First Card"
                  style={{ height: "100%" }}
                />
              )}
              {!flip && (
                <div>
                  <h1 style={{ fontSize: "60px", color: "white" }}>
                    {Data[num0].name}
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
                  src={Data[num1].picture_2}
                  alt="Second Card"
                  style={{ height: "100%" }}
                />
              )}
              {!flip && (
                <div>
                  <h1 style={{ fontSize: "60px", color: "white" }}>
                    {Data[num1].name}
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
                  src={Data[num2].picture_1}
                  alt="Third Card"
                  style={{ height: "100%" }}
                />
              )}
              {!flip && (
                <div>
                  <h1 style={{ fontSize: "60px", color: "white" }}>
                    {Data[num2].name}
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
                  src={Data[num3].picture_2}
                  alt="Third Card"
                  style={{ height: "100%" }}
                />
              )}
              {!flip && (
                <div>
                  <h1 style={{ fontSize: "60px", color: "white" }}>
                    {Data[num3].name}
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
                  src={Data[num4].picture_1}
                  alt="Third Card"
                  style={{ height: "100%" }}
                />
              )}
              {!flip && (
                <div>
                  <h1 style={{ fontSize: "60px", color: "white" }}>
                    {Data[num4].name}
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
