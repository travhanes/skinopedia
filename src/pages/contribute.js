import React from "react";
import Header from "../components/header";
import Logo from "../components/logo";
import Footer from "../components/footer";

export class Contribute extends React.Component {
  render() {
    return (
      <>
        <Logo />
        <Header page="3" />

        <div style={{ height: "746px", padding: "40px 400px" }}>
          <h2>Want to give us feedback or help contribute to our cause?</h2>
          <p>
            Please fill out the form below to send us a message. We'll get back
            to you as soon as we can. 🙂
          </p>
          <form class="ui form">
            <div class="field">
              <label>Your Name</label>
              <input type="text" name="first-name" placeholder="First Name" />
            </div>
            <div class="field">
              <label>Your Email</label>
              <input type="text" name="last-name" placeholder="Last Name" />
            </div>
            <div class="field">
              <label>Your Credentials or Organization</label>
              <input type="text" name="last-name" placeholder="Last Name" />
            </div>
            <div class="field">
              <label>Your feedback or contribution</label>
              <textarea></textarea>
            </div>
            <div class="field">
              <label>Pictures You'd Like to Contribute</label>
              <input type="file" name="last-name" placeholder="Last Name" />
            </div>
            <div class="field">
              <div class="ui checkbox">
                <input type="checkbox" tabindex="0" class="hidden" />
                <label>I agree to the Terms and Conditions</label>
              </div>
            </div>
            <button class="ui button" type="submit">
              Submit
            </button>
          </form>
        </div>

        <Footer />
      </>
    );
  }
}
