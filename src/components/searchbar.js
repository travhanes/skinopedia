import React from "react";

export default class Searchbar extends React.Component {
  // componentDidMount() {
  //   var content = [
  //     { title: "Andorra" },
  //     { title: "United Arab Emirates" },
  //     { title: "Afghanistan" },
  //     { title: "Antigua" },
  //     { title: "Anguilla" },
  //     { title: "Albania" },
  //     { title: "Armenia" },
  //     { title: "Netherlands Antilles" },
  //     { title: "Angola" },
  //     { title: "Argentina" },
  //     { title: "American Samoa" },
  //     { title: "Austria" },
  //     { title: "Australia" },
  //     { title: "Aruba" },
  //     { title: "Aland Islands" },
  //     { title: "Azerbaijan" },
  //     { title: "Bosnia" },
  //     { title: "Barbados" },
  //     { title: "Bangladesh" },
  //     { title: "Belgium" },
  //     { title: "Burkina Faso" },
  //     { title: "Bulgaria" },
  //     { title: "Bahrain" },
  //     { title: "Burundi" },
  //     // etc
  //   ];
  //   // document.querySelector(".search").search({
  //   //   source: content,
  //   // });
  // }

  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input
            className=" prompt"
            type="text"
            placeholder="Search skin conditions..."
            style={{ width: "600px", height: "60px", fontSize: "20px" }}
          />
          <i className="big search icon" style={{ cursor: "pointer" }}></i>
        </div>
        <div className="results"></div>
      </div>
    );
  }
}
