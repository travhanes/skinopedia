import React from "react";

export default class Logo extends React.Component {
  render() {
    return (
      <>
        <div style={{ height: "100%", zIndex: "-1" }}>
          <div style={{ background: "brown", width: "20%" }}></div>
          <div style={{ background: "brown", width: "20%" }}></div>
          <div style={{ background: "brown", width: "20%" }}></div>
          <div style={{ background: "brown", width: "20%" }}></div>
          <div style={{ background: "brown", width: "20%" }}></div>
        </div>
        <div style={{ textAlign: "center", height: "70px" }}>
          <h1 style={{ fontSize: "50px" }}>S K I N - O - P E D I A</h1>
        </div>
      </>
    );
  }
}
