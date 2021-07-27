import React, { useState } from "react";
import JSONDATA from "../data/skinConditions.json";
import { Link } from "react-router-dom";

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="ui search">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Filter skin conditions..."
            style={{ width: "600px", height: "60px", fontSize: "20px" }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="big search icon" style={{ cursor: "pointer" }}></i>
        </div>
      </div>
      <div
        className="left-sideline"
        style={{
          position: "absolute",
          left: "5vw",
          top: "160px",
          width: "20vw",
        }}
      >
        <h1>Skin Conditions</h1>
        {JSONDATA.filter((val) => {
          if (searchTerm === " ") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, _key) => {
          return (
            <div className="ui item menu" key={_key} style={{ margin: 0 }}>
              <Link
                className="item"
                to={"/eczema"}
                style={{
                  display: "block",
                  fontSize: "20px",
                  margin: "0",
                  padding: "10px",
                }}
              >
                {val.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Searchbar;
