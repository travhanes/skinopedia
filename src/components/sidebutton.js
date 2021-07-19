import React from "react";

function Sidebutton(props) {
  return (
    <button className="ui button" onClick={props.onToggleMenu}>
      Customize Deck +
    </button>
  );
}

export default Sidebutton;
