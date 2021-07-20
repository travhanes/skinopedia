import React from "react";

function Card() {
  return (
    <>
      <div
        className="ui cards"
        style={{
          position: "absolute",
          bottom: "50%",
          left: "50%",
          transform: "translate(-50%,10%)",
        }}
      >
        <div className="card" style={{ height: "400px", width: "600px" }}>
          <div className="content"></div>
        </div>
      </div>
    </>
  );
}

export default Card;
