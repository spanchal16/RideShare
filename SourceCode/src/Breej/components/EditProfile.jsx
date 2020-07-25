import React, { Component } from "react";
import "./EditProfile.css";
import { Link } from "react-router-dom";
import { Img } from "react-image";
import axios from "axios";
import Cookies from "js-cookie";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      fullName: "",
      email: "",
      bio: "",
      phone: "",
      profession: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }
  handleSubmission(event) {
    const re = /[0-9]{10}/;
    console.log(this.state);
    if (
      this.state.fullName.length > 0 &&
      this.state.profession &&
      re.test(String(this.state.email))
    ) {
      console.log(this.state);
      let url = "/usermng/updateUser/:userId";
    }

    //*************************************** */
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  getUserDetails = () => {
    // console.log(user);
    const _email = Cookies.get("email");
    const _userId = Cookies.get("userId");
    this.setState({ userId: _userId });
    //console.log(_email);
    const user = {
      email: _email,
    };
    //let url = "https://eventgoapi.herokuapp.com/usermng/getSpecificUser";
    let url = "http://localhost:8080/usermng/getSpecificUser";
    console.log("email \t" + _email);
    axios
      .post(url, { user })
      .then((res) => {
        let resultData = res.data;
        console.log("Fetched data");
        console.log(resultData);
        if (resultData.length > 0) {
          this.setState({ fullName: resultData[0].userName });
          this.setState({ email: resultData[0].email });
          this.setState({ phone: resultData[0].phone });
          this.setState({ profession: resultData[0].profession });
          this.setState({ bio: resultData[0].bio });
        } else {
          throw new Error("Bad response from server");
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isInvalidCred: true });
      });
  };
  componentDidMount() {
    this.getUserDetails();
  }
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
              <div>
                <h3>Edit your information</h3>
              </div>
            </div>
            <div className="col-md-2">
              {/* <a href="profile"> */}
              <input
                type="submit"
                className="myButton"
                name="btnAddMore"
                value="Update"
                onClick={this.handleSubmission}
              />
              {/* </a> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div
                className="row profile-img"
                style={{ marginTop: "4em", marginLeft: "4em" }}
              >
                <Img top src={require("../../Nishant/images/solitary.jpeg")} />
              </div>
              <div className="row file " style={{ marginLeft: "4em" }}>
                {/* Change Photo */}
                {/* <label for="file">Change Photo</label> */}
                <input type="file" name="file" />
              </div>
            </div>
            <div className="col-md-8 edit-profile-head">
              <div className="row" style={{ marginTop: "3em" }}>
                <div className="col-md-3">
                  <label>Name:</label>
                </div>
                <div className="col-md-6">
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={this.state.fullName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <label>Email:</label>
                </div>
                <div className="col-md-6">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                    value={this.state.email}
                    disabled
                  />
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
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <label>Profession:</label>
                </div>
                <div className="col-md-6">
                  <input
                    id="profession"
                    name="profession"
                    type="text"
                    required
                    value={this.state.profession}
                    onChange={this.handleChange}
                  />
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
                    id="bio"
                    name="bio"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditProfile;
