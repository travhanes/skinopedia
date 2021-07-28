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

function About(props) {
  let genData = props.genLanguage;

  return (
    <>
      <Navbar page="4" genLanguage={props.genLanguage} />

      <Footer />

      {/* Body */}
      <div style={{ height: "746px", padding: "40px 100px" }}>
        <h2>{genData[0].team_about_us_title}</h2>
        <Stack gap="10px">
          <p style={{ fontSize: "18px" }}>{genData[0].team_about_us_content}</p>
          <h2>{genData[0].team_our_goal_title}</h2>
          <p style={{ fontSize: "18px" }}>{genData[0].team_our_goal_content}</p>

          <h2>{genData[0].team_pictures_title}</h2>
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
