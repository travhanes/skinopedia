import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Contribute(props) {
  let data = props.genLanguage;

  return (
    <>
      <Navbar page="3" genLanguage={props.genLanguage} />

      <div style={{ height: "746px", padding: "40px 400px" }}>
        <h2>{data[0].contribute_form_title}</h2>
        <p>{data[0].contribute_form_request}</p>
        <form className="ui form">
          <div className="field">
            <label>{data[0].contribute_form_your_name}</label>
            <input type="text" name="first-name" placeholder="First Name" />
          </div>
          <div className="field">
            <label>{data[0].contribute_form_your_email}</label>
            <input type="text" name="last-name" placeholder="Email" />
          </div>
          <div className="field">
            <label>{data[0].contribute_form_your_credentials}</label>
            <input type="text" name="last-name" placeholder="Credentials" />
          </div>
          <div className="field">
            <label>{data[0].contribute_form_your_feedback}</label>
            <textarea></textarea>
          </div>
          <div className="field">
            <label>{data[0].contribute_form_your_pictures}</label>
            <input type="file" name="last-name" placeholder="Last Name" />
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" />
              <label>{data[0].contribute_form_terms}</label>
            </div>
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Contribute;
