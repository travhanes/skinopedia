import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Sidebutton from "../components/sidebutton";
import Cardslider from "../components/cardslider";

function Flashcards() {
  const [toggle, setToggle] = useState(false);
  const [dataNum, setDataNum] = useState([3, 3, 0, 4, 4]);

  function toggleMenu() {
    setToggle(!toggle);
  }

  function onChooseDeck(array) {
    console.log(array);
    setDataNum(array);
  }

  return (
    <>
      <Navbar page="1" />
      <div>
        <Sidebutton onToggleMenu={toggleMenu} />
      </div>

      <div className="ui attached pushable" style={{ height: "730px" }}>
        <Sidebar toggleMenu={toggle} onChooseDeck={onChooseDeck} />
        <div
          className="pusher bottom"
          style={{
            height: "730px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "730px",
            }}
          >
            <Cardslider dataNum={dataNum} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Flashcards;
