import React from "react";
import skinConditionData from "../data/skinConditions.json";
import kawasakiDiseaseBlack from "../images/kawasaki_disease_black.png";
import kawasakiDiseaseWhite from "../images/kawasaki_disease_white.png";

export default function DailySkinCond() {
  return (
    <>
      <div className="title" style={{ marginBottom: "0" }}>
        Random Skin Condition of the Day
      </div>
      <div
        style={{
          height: "300px",
          width: "600px",
          background: "white",
          borderRadius: "10px",
          border: "solid black 10px",
          marginTop: "0",
        }}
      >
        <div className="description" style={{ height: "25%" }}>
          <h4 style={{ margin: "0" }}>{skinConditionData[0].name}</h4>
          <p style={{ fontSize: "10px", margin: "0", padding: "0" }}>
            {skinConditionData[0].description}
          </p>
        </div>

        <div
          className="showcase"
          style={{
            display: "flex",
            flexDirection: "row",
            height: "75%",
            padding: "10px",
          }}
        >
          <div
            className="left"
            style={{
              height: "100%",
              width: "50%",
              backgroundImage: `url(${kawasakiDiseaseBlack})`,
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="right"
            style={{
              height: "100%",
              width: "50%",
              backgroundImage: `url(${kawasakiDiseaseWhite})`,
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
