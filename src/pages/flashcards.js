import React, { useState } from "react";
import Header from "../components/header";
import Logo from "../components/logo";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Sidebutton from "../components/sidebutton";
import Cardslider from "../components/cardslider";

function Flashcards() {
  // these are hooks
  const [toggle, setToggle] = useState(false);

  function toggleMenu() {
    setToggle(!toggle);
  }

  return (
    <>
      <Logo />
      <Header page="1" />
      <div>
        <Sidebutton onToggleMenu={toggleMenu} />
      </div>

      <div className="ui attached pushable" style={{ height: "100vh" }}>
        <Sidebar toggleMenu={toggle} />
        <div className="pusher bottom">
          <Cardslider />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Flashcards;
