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
            onClick={() => props.onChooseDeck([3, 9, 12, 4, 6], "3 9 12 4 6")}
          >
            3 9 12 4 6
          </li>
          <li
            className="item link"
            onClick={() => props.onChooseDeck([5, 1, 2, 6, 7], "5 1 2 6 7")}
          >
            5 1 2 6 7
          </li>
          <li
            className="item link"
            onClick={() =>
              props.onChooseDeck([12, 11, 9, 8, 10], "12 11 9 8 10")
            }
          >
            12 11 9 8 10
          </li>
          <li
            className="item link"
            onClick={() => props.onChooseDeck([13, 4, 3, 2, 0], "13 4 3 2 0")}
          >
            13 4 3 2 0
          </li>
        </ul>
      </div>
      <div className="pusher"></div>
    </div>
  );
}

export default Sidebar;
