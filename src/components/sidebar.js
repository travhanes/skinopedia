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
          <li
            className="item link"
            onClick={() => props.onChooseDeck([3, 3, 0, 4, 4])}
          >
            3 3 0 4 4
          </li>
          <li
            className="item link"
            onClick={() => props.onChooseDeck([4, 3, 0, 3, 4])}
          >
            4 3 0 3 4
          </li>
          <li
            className="item link"
            onClick={() => props.onChooseDeck([4, 4, 0, 3, 3])}
          >
            4 4 0 3 3
          </li>
          <li
            className="item link"
            onClick={() => props.onChooseDeck([3, 4, 3, 4, 0])}
          >
            3 4 3 4 0
          </li>
        </ul>
      </div>
      <div className="pusher"></div>
    </div>
  );
}

export default Sidebar;
