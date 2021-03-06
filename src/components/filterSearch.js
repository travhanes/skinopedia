import React, { useState } from "react";
import { Link } from "react-router-dom";

function FilterSearch(props) {
  const [searchTerm, setSearchTerm] = useState("");
  let JSONDATA = props.language;
  let genData = props.genLanguage;

  return (
    <div className="container">
      <div className="ui search">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder={genData[0].searchbar_placeholder}
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
          left: "1vw",
          top: "160px",
          width: "20vw",
        }}
      >
        <h1>SKIN-dex</h1>
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
                  genLanguage={props.genLanguage}
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

export default FilterSearch;
