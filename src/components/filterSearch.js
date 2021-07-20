import React, { useState } from "react";
import JSONDATA from "./skindexdict.json";


function FilterSearch() {
const [searchTerm, setSearchTerm] = useState("");
  return (
  <>
            <div className="disease-list">
            <input type="text" placeholder="Search skin condition..." onChange={(event) => {
              setSearchTerm(event.target.value);
              }}
              />
            {JSONDATA.filter((val) => {
              if(searchTerm === " "){
                return val;
              } else if (val.Disease.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }
      
            }).map((val,_key) => {
              return (
              <div className="user" key={_key}> 
                <p>{val.Disease}</p>
                </div>
              );
            })} 
        </div>
        </>
  )
}

export default FilterSearch