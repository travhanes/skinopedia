import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../explore.css";
import ExploreSearchbar from "../components/exploreSearch";
import SkinfoPopup from "../components/skinfo_popup";

export class Explore extends React.Component {
  render() {
    return (
      <>
        <Navbar page="2" />
        <div className="explore-box">
        <div className="skindex"><ExploreSearchbar/></div>
        <div><SkinfoPopup /></div>
        </div>
        <Footer />
      </>
    );
  }
}
