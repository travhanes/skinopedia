import React from "react";

export default function DailySkinCond() {
  return (
    <>
      <div className="title" style={{ marginBottom: "0" }}>
        Random Skin Condition of the Day
      </div>
      <div
        style={{
          height: "200px",
          width: "600px",
          background: "white",
          borderRadius: "10px",
          border: "solid black 10px",
          marginTop: "0",
        }}
      >
        <div className="description" style={{ height: "20%" }}>
          Eczema: blah blah
        </div>

        <div
          className="showcase"
          style={{ display: "flex", flexDirection: "row", height: "80%" }}
        >
          <div
            className="left"
            style={{ height: "100%", width: "50%", background: "blue" }}
          ></div>
          <div
            className="right"
            style={{ height: "100%", width: "50%", background: "green" }}
          ></div>
        </div>
      </div>
    </>
  );
}
