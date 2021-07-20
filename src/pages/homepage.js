import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import Searchbar from "../components/searchbar";
import { DefaultButton, Stack } from "@fluentui/react";
import DailySkinCond from "../components/dailySkinCond";

export class Homepage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Navbar page="0" />

        <div
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
            <Link to="./explore">
              <DefaultButton text="Search" />
            </Link>
            <DailySkinCond />
          </Stack>
        </div>

        <Footer />
      </>
    );
  }
}
