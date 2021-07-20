import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import "../explore.css";
import FilterSearch from "../components/filterSearch";

export class Explore extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Navbar page="2" />

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
