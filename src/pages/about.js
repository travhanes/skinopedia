import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import Trav from "../Trav.jpg";
import Dani from "../Daniela.jpg";
import isim from '../Isimbi.png';
import john from "../Jonathan.png";
import marc from '../Marcella.png';
import "../image.css";
import { DefaultButton, Stack } from "@fluentui/react";




export class About extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Navbar page="4" />

        <Footer />

        {/* Body */}
        <div style={{ height: "746px", padding: "40px 400px" }}>
          <h2>About Us</h2>
          <Stack gap="10px">
          <p style={{fontSize:"18px"}}>
            Our Problem Statement:  Most medical literature focuses on patients with fair skin, 
            heightening disparities in the way patients of color are treated. Health Professionals 
            and Pre-health students need accessible information about Brown and Black skin conditions 
            so that they can better diagnose and treat skins of color.  
          </p>
          <h2>Our goal</h2>
          <p style={{fontSize:"18px"}}>
          We aim to provide pre-medical students and healthcare professionals in the industry with an accessible 
          compendium of different skin conditions on patients of color. In this way, we’ll fill a gap 
          in medical knowledge with both an awareness of its existence as well as examples of specific skin conditions.  
          </p>
          </Stack>

          <h2>The team</h2>
            <div className="row">
              <div className="column">
            <img style={{height: "205px", width:"210px",borderRadius:"50%"}} src={Trav} /> 
              </div>
              <div className="column">
            <img style={{height: "205px", width:"210px",borderRadius:"50%"}} src={Dani} /> 
              </div>
              <div className="column">
            <img style={{height: "205px", width:"210px",borderRadius:"50%"}} src={isim} /> 
              </div>
              <div className="column">
            <img style={{height: "205px", width:"210px",borderRadius:"50%"}} src={john} /> 
              </div>
              <div className="column">
            <img style={{height: "205px", width:"210px",borderRadius:"50%"}} src={marc} /> 
              </div>
            </div>
    
          </div>
      </>
    );
  }
}

