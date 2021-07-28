import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../explore.css";
import ExploreSearchbar from "../components/exploreSearch";
//import FilterSearch from "../components/filterSearch";
//import OldFilterSearch from "../components/OldFilterSearch";

export class Explore extends React.Component {
  render() {
    return (
      <>
        <Navbar page="2" />
        <div><ExploreSearchbar/></div>
        <Footer />
      </>
    );
  }
}
