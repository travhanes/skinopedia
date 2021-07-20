import React from "react";
import cn from "classnames";

function Sidebar(props) {
  const classes = cn(
    "ui",
    "sidebar",
    "overlay",
    "left",
    "inverted",
    "menu",
    "animating",
    {
      visible: props.toggleMenu,
    }
  );

  return (
    <div>
      <div className={classes}>
        <ul>
          <li className="item link">A particular skin condition deck</li>
          <li className="item link">
            A different deck with different conditions
          </li>
          <li className="item link">Here's a new deck of skin conditions</li>
          <li className="item link">Skin conditions deck alpha beta etc.</li>
        </ul>
      </div>
      <div className="pusher"></div>
    </div>
  );
}

export default Sidebar;
