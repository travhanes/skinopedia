import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Sidebutton from "../components/sidebutton";
import Cardslider from "../components/cardslider";
import { Stack } from "@fluentui/react";

function Flashcards(props) {
  const [toggle, setToggle] = useState(false);
  const [dataNum, setDataNum] = useState([3, 3, 0, 4, 4]);
  const [deckName, setDeckName] = useState("3 3 0 4 4");

  function toggleMenu() {
    setToggle(!toggle);
  }

  function onChooseDeck(array, deckName) {
    setDataNum(array);
    setDeckName(deckName);
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
            <Stack>
              <h2>{deckName}</h2>
              <Cardslider dataNum={dataNum} language={props.language} />
            </Stack>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Flashcards;
