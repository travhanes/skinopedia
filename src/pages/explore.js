import React from "react";
import Header from "../components/header";
import Logo from "../components/logo";
import Footer from "../components/footer";
import "../explore.css";
import FilterSearch from "../components/filterSearch";

export class Explore extends React.Component {
  render() {
    return (
      <>
        <Logo />
        <Header page="2" />
        
        {/* BODY */}
        <div>
        <h1 className="page-title">SKIN-dex</h1>
        </div>
        <div><FilterSearch /></div>

        {/* Footer */}
        <Footer />
      </>
    );
  }
}
