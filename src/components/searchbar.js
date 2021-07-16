import React from "react";

export default class Searchbar extends React.Component {
  componentDidMount() {
    var content = [
      { title: "Andorra" },
      { title: "United Arab Emirates" },
      { title: "Afghanistan" },
      { title: "Antigua" },
      { title: "Anguilla" },
      { title: "Albania" },
      { title: "Armenia" },
      { title: "Netherlands Antilles" },
      { title: "Angola" },
      { title: "Argentina" },
      { title: "American Samoa" },
      { title: "Austria" },
      { title: "Australia" },
      { title: "Aruba" },
      { title: "Aland Islands" },
      { title: "Azerbaijan" },
      { title: "Bosnia" },
      { title: "Barbados" },
      { title: "Bangladesh" },
      { title: "Belgium" },
      { title: "Burkina Faso" },
      { title: "Bulgaria" },
      { title: "Bahrain" },
      { title: "Burundi" },
      // etc
    ];
    // document.querySelector(".search").search({
    //   source: content,
    // });
  }

  render() {
    return (
      <div class="ui search">
        <div class="ui icon input">
          <input
            class=" prompt"
            type="text"
            placeholder="Search skin conditions..."
            style={{ width: "600px", height: "60px", fontSize: "20px" }}
          />
          <i class="big search icon" style={{ cursor: "pointer" }}></i>
        </div>
        <div class="results"></div>
      </div>
    );
  }
}
