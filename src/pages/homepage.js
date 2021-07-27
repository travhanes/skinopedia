import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Searchbar from "../components/searchbar";
import { Stack } from "@fluentui/react";
import DailySkinCond from "../components/dailySkinCond";

export class Homepage extends React.Component {
  render() {
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
            <Searchbar />
            <DailySkinCond />
          </Stack>
        </div>

        <Footer />
      </>
    );
  }
}
