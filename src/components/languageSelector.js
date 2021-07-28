import React from "react";

function LanguageSelector(props) {
  return (
    <div style={{ position: "absolute", top: "10px", right: "10px" }}>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label
          className="btn btn-secondary active"
          onClick={() => props.languageSelected("English")}
        >
          <input
            type="radio"
            name="options"
            id="option1"
            autoComplete="off"
            defaultChecked
          />
          English
        </label>
        <label
          className="btn btn-secondary"
          onClick={() => props.languageSelected("French")}
        >
          <input type="radio" name="options" id="option2" autoComplete="off" />
          French
        </label>
        <label
          className="btn btn-secondary"
          onClick={() => props.languageSelected("Kiswahili")}
        >
          <input type="radio" name="options" id="option2" autoComplete="off" />
          Kiswahili
        </label>
      </div>
    </div>
  );
}

export default LanguageSelector;
