import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FilterSearch from "../components/filterSearch";
import { Stack } from "@fluentui/react";
import DailySkinCond from "../components/dailySkinCond";

function Homepage(props) {
  return (
    <>
      <Navbar page="0" />

      <div
        className="homepage"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "773px",
          textAlign: "center",
        }}
      >
        <Stack tokens={{ childrenGap: 40 }}>
          <FilterSearch language={props.language} />
          <DailySkinCond language={props.language} />
        </Stack>
      </div>

      <Footer />
    </>
  );
}

export default Homepage;
