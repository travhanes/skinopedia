import React from "react";
import Header from "../components/header";
import Logo from "../components/logo";
import Footer from "../components/footer";

export class Explore extends React.Component {
  render() {
    return (
      <>
        <Logo />
        <Header page="2" />
        {/* Body */}
        <div>
          <h1 className="page-title">SKIN-dex</h1>
        </div>
        {/* <div className="search-bar">
      <input type="text" className="form-control" placeholder="Search A Skin Condition..." />
      </div> */}
        <div className="ui icon input">
          <input type="text" placeholder="Search for a condition..."></input>
          <i className="search icon"></i>
        </div>
        {/* <div>{ SearchBox }</div>  */}{" "}
        {/**still figuring this component out */}
        <div className="condition-table">
          <table>
            <thead className="thead-dark">
              <tr>
                <th></th>
                <th>Condition Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>Eczema</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>Kawasaki Disease</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Footer */}
        <Footer />
      </>
    );
  }
}
