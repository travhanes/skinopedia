import React from "react";

function Sidebutton(props) {
  return (
    <button className="ui button" onClick={props.onToggleMenu}>
      {props.genLanguage[0].customize_deck_button} +
    </button>
  );
}

export default Sidebutton;
