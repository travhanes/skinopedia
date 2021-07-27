import React, { useEffect } from "react";
import Data from "../data/skinConditions.json";

export default function DailySkinCond() {
  let num = Math.trunc(Math.random() * 14);

  return (
    <>
      <div className="title" style={{ marginBottom: "0" }}>
        Random Skin Condition
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
          <h4 style={{ margin: "0" }}>{Data[num].name}</h4>
          <p style={{ fontSize: "10px", margin: "0", padding: "0" }}>
            {Data[num].description}
          </p>
        </div>

        <div
          className="showcase"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "75%",
            padding: "10px",
          }}
        >
          <img
            src={Data[num].picture_1}
            alt="Left"
            style={{ height: "100%" }}
          />
          <img
            src={Data[num].picture_2}
            alt="Right"
            style={{ height: "100%" }}
          />
        </div>
      </div>
    </>
  );
}
