import React, { useState } from "react";
import { Link } from "react-router-dom";
import JSONDATA from "./skindexdict.json";

function FilterSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="disease-list">
        <input
          type="text"
          placeholder="Search skin condition..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        {JSONDATA.filter((val) => {
          if (searchTerm === " ") {
            return val;
          } else if (
            val.Disease.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, _key) => {
          return (
            <div className="user" key={_key}>
              {/* <h1>{val.Disease}</h1> */}
              <Link to={"/eczema"}>{val.Disease}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FilterSearch;
