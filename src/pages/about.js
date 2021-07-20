import React from "react";
import Header from "../components/header";
import Logo from "../components/logo";
import Footer from "../components/footer";
import Trav from "../Trav.jpg";
import { DefaultButton, Stack } from "@fluentui/react";



export class About extends React.Component {
  render() {
    return (
      <>
        <Logo />
        <Header page="4" />

        <Footer />

        {/* Body */}
        <div style={{ height: "746px", padding: "40px 400px" }}>
          <h2>About us</h2>
          <p>
            Our Problem Statement:  Most medical literature focuses on patients with fair skin, 
            heightening disparities in the way patients of color are treated. Health Professionals 
            and Pre-health students need accessible information about Brown and Black skin conditions 
            so that they can better diagnose and treat skins of color.  
          </p>
          <p>
             We are a group of people who aim to
          </p>
          <img className='rounder' src={Trav} height={200} width={300}/>        </div>
      </>


    );
  }
}
