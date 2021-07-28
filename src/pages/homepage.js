import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FilterSearch from "../components/filterSearch";
import { Stack } from "@fluentui/react";
import DailySkinCond from "../components/dailySkinCond";

function Homepage(props) {
  return (
    <>
      <Navbar page="0" genLanguage={props.genLanguage} />

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
          <FilterSearch
            language={props.language}
            genLanguage={props.genLanguage}
          />
          <DailySkinCond
            language={props.language}
            genLanguage={props.genLanguage}
          />
        </Stack>
      </div>

      <Footer />
    </>
  );
}

export default Homepage;
