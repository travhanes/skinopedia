import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Trav from "../Trav.jpg";
import Dani from "../Daniela.jpg";
import isim from "../Isimbi.png";
import john from "../Jonathan.png";
import marc from "../Marcella.png";
import "../image.css";
import { Stack } from "@fluentui/react";

function About() {
  return (
    <>
      <Navbar page="4" />

      <Footer />

      {/* Body */}
      <div style={{ height: "746px", padding: "40px 100px" }}>
        <h2>About Us</h2>
        <Stack gap="10px">
          <p style={{ fontSize: "18px" }}>
            Our Problem Statement: Most medical literature focuses on patients
            with fair skin, heightening disparities in the way patients of color
            are treated. Health Professionals and Pre-health students need
            accessible information about Brown and Black skin conditions so that
            they can better diagnose and treat skins of color.
          </p>
          <h2>Our goal</h2>
          <p style={{ fontSize: "18px" }}>
            We aim to provide pre-medical students and healthcare professionals
            in the industry with an accessible compendium of different skin
            conditions on patients of color. In this way, we’ll fill a gap in
            medical knowledge with both an awareness of its existence as well as
            examples of specific skin conditions.
          </p>

          <h2>The team</h2>
          <Stack horizontal tokens={{ childrenGap: "40px" }}>
            <div>
              <img
                src={Trav}
                alt=""
                style={{
                  height: "205px",
                  width: "210px",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div>
              <img
                style={{
                  height: "205px",
                  width: "210px",
                  borderRadius: "50%",
                }}
                src={Dani}
                alt=""
              />
            </div>
            <div>
              <img
                style={{
                  height: "205px",
                  width: "210px",
                  borderRadius: "50%",
                }}
                src={isim}
                alt=""
              />
            </div>
            <div>
              <img
                style={{
                  height: "205px",
                  width: "210px",
                  borderRadius: "50%",
                }}
                src={john}
                alt=""
              />
            </div>
            <div>
              <img
                style={{
                  height: "205px",
                  width: "210px",
                  borderRadius: "50%",
                }}
                src={marc}
                alt=""
              />
            </div>
          </Stack>
        </Stack>
      </div>
    </>
  );
}

export default About;
