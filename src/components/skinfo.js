import React from "react";
import Footer from "./footer";
import "../explore.css";
import Navbar from "./navbar";
//import from skinconditions.json

// ConditionDetails
export class Skinfo extends React.Component {
  render() {
    return (
      <>
        <Navbar page="2" genLanguage={this.props.genLanguage} />

        {/*all of this is just a placeholder */}
        <div>
          <h1 className="page-title">SKIN-fo</h1>
          <h3> What is Eczema? </h3>
        </div>
        <div className="media">
          <img
            className="d-flex mr-3"
            data-src="holder.js/64x64?theme=sky"
            alt="128x128"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17ac69cf3d8%20text%20%7B%20fill%3A%23FFFFFF%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17ac69cf3d8%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%230D8FDB%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.4609375%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true"
          />
          <div className="media-body">
            <h5 className="mt-0">Signs and Symptoms</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Skinfo;
