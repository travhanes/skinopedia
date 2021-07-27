import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Sidebutton from "../components/sidebutton";
import Cardslider from "../components/cardslider";

function Flashcards() {
  const [toggle, setToggle] = useState(false);

  function toggleMenu() {
    setToggle(!toggle);
  }

  return (
    <>
      <Navbar page="1" />
      <div>
        <Sidebutton onToggleMenu={toggleMenu} />
      </div>

      <div className="ui attached pushable" style={{ height: "100vh" }}>
        <Sidebar toggleMenu={toggle} />
        <div className="pusher bottom">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "730px",
            }}
          >
            <Cardslider />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Flashcards;
