import React, { Component } from "react";
import "./EditProfile.css";
import { Link } from "react-router-dom";

class EditProfile extends Component {
  render() {
    return (
      <div className="container edit-profile">
        <form action="/profile" style={{ display: "inline" }}>
          <div className="row">
            <div className="col-md-2">
              <a href="profile">
                <input className="myButton" name="btnAddMore" value="Go Back" />
              </a>
            </div>
            <div className="col-md-2"></div>
            <div
              className="col-md-6"
              style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "center",
              }}
            >
              <div className="edit-profile-head ">
                <h3>Edit your information</h3>
                <div className="row" style={{ marginTop: "3em" }}>
                  <div className="col-md-3">
                    <label>Username:</label>
                  </div>
                  <div className="col-md-6">
                    <input id="username" name="username" type="text" required />
                    <p id="input_uname"></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>Name:</label>
                  </div>
                  <div className="col-md-6">
                    <input id="name" name="name" type="text" required />
                    <p id="input_name"></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>Email:</label>
                  </div>
                  <div className="col-md-6">
                    <input id="email" name="email" type="email" required />
                    <p id="input_email"></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>Phone:</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                    />
                    <p id="input_phone"></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>Bio:</label>
                  </div>
                  <div className="col-md-6">
                    <textarea
                      maxlength="280"
                      placeholder="Describe yourself in 280 characters... (optional)"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <a href="profile">
                <input
                  type="submit"
                  className="myButton"
                  name="btnAddMore"
                  value="Update"
                />
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditProfile;
