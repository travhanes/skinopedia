import React, { useState } from "react";
import { Link } from "react-router-dom";
import JSONDATA from "../data/skinConditions.json";

function ExploreSearchbar() {
  const [searchTerm, setSearchTerm] = useState("");
  //let JSONDATA = props.language;

  return (
    <div className="search-container">
      
      <div
        className="left-sideline"
        style={{
          position: "absolute",
          left: "1vw",
          top: "160px",
          width: "20vw",
        }}
      >
        <h1>SKIN-dex</h1>
        <div className="ui search">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Filter skin conditions..."
            style={{ width: "336px", height: "30px", fontSize: "18px" }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="search icon" style={{ cursor: "pointer" }}></i>
        </div>
      </div>
        <div
          className="scroll-box"
          style={{ width: "100%", height: "500px", overflowY: "auto" }}
        >
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
                  to={"/skinfo"}
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
    </div>
  );
}

export default ExploreSearchbar;