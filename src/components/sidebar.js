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
          <li className="item link">Item 1</li>
          <li className="item link">Item 2</li>
          <li className="item link">Item 3</li>
          <li className="item link">Item 4</li>
        </ul>
      </div>
      <div className="pusher"></div>
    </div>
  );
}

export default Sidebar;
