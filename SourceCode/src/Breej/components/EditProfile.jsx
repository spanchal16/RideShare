//@Author - Nishant Amoli, B00835717
import React, { Component } from "react";
import "./EditProfile.css";
import { Link } from "react-router-dom";
import { Img } from "react-image";
import axios from "axios";
import Cookies from "js-cookie";
import { storage } from "../../Raj/firebase";
import { Row, Container, Card, Col, Form, Button } from "react-bootstrap";

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
      files: [],
      imagePreviewUrl1: "",
      imageError: "",
      url: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }
  handleSubmission(event) {
    // this.ImageUpload();
    let evt = this.state;
    console.log(evt);
    const re = /[0-9]{10}/;
    console.log(this.state);
    if (
      this.state.fullName.length > 0 &&
      this.state.profession &&
      re.test(String(this.state.phone))
    ) {
      console.log(this.state);
      this.updateProfile(evt);
    }
  }
  updateProfile = async (evt1) => {
    let evt = this.state;
    console.log("inside updateProfile");
    let url = `https://eventgoapi.herokuapp.com/usermng/updateUserProfile/${this.state.userId}`;
    await axios
      .put(url, evt)
      .then((res) => {
        if (res.data == true) {
          alert("sucessfully updated the profile");
        } else {
          alert("Something went wrong try again!!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
    let url = "https://eventgoapi.herokuapp.com/usermng/getSpecificUser";
    //let url = "http://localhost:8080/usermng/getSpecificUser";
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

  handleImgFiles = (e) => {
    if (e.target.files.length > 1) {
      e.preventDefault();
      this.setState({ imageError: "Only 1 image allowed..." });
    } else {
      let reader1 = new FileReader();
      let file1 = e.target.files[0];
      if (
        file1.name.slice(-3) == "jpg" ||
        file1.name.slice(-3) == "png" ||
        file1.name.slice(-4) == "jpeg"
      ) {
        this.state.files.push(file1);
        reader1.onloadend = () => {
          this.setState({
            imagePreviewUrl1: reader1.result,
            imageError: "",
          });
        };
        reader1.readAsDataURL(file1);
      } else {
        this.setState({
          imageError: "Only jpg, jpeg and png formats allowed..",
        });
      }
    }
  };

  onClearImgBtnClick = (e) => {
    e.preventDefault();
    this.setState({
      imageError: "",
      imagePreviewUrl1: "",
      files: [],
    });
    document.getElementById("file").value = null;
  };

  renderClearImgBtn = (img) => {
    return img != "" && img != null ? (
      <button onClick={this.onClearImgBtnClick}>clear</button>
    ) : null;
  };

  ImageUpload = () => {
    //event.preventDefault();
    let urls = [];
    let counter = -1;
    // this.setState({ imageurls: [] })
    let { files } = this.state;
    // return new Promise((resolve, reject) =>
    // if (files.length > 0) {
    files.forEach((file, index) => {
      //Upload images to Firebase
      storage
        .ref(`images/${file.name}`)
        .put(file)
        .on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(file.name)
              .getDownloadURL()
              .then((url) => {
                console.log(url);
                //get the image URL
                urls.push(url);
                counter = counter + 1;
                if (counter == files.length - 1) {
                  // resolve(urls)
                  //data base url
                  // this.updateProfilePicture(urls)
                  this.setState({ url: urls });
                  //this.handleSubmission();
                  this.updateProfile();
                }
              });
          }
        );
    });
  };

  renderError = (err) => {
    return err != "" && err != null ? (
      <p style={{ color: "red" }}>{this.state.imageError}</p>
    ) : null;
  };

  renderCurrentPicture = (img1) => {
    return img1 != "" && img1 != null ? null : (
      <Img
        top
        src={require("../../Nishant/images/solitary.jpeg")}
        style={{ width: "215px", height: "200px", marginTop: "3em" }}
      />
    );
  };

  renderImgPreview = (img) => {
    return img != "" && img != null ? (
      <img
        className="uploadimg"
        src={img}
        style={{ width: "215px", height: "200px", marginTop: "3em" }}
        border="1"
      />
    ) : null;
  };

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
                onClick={() => this.ImageUpload()}
              />
              {/* </a> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              {/* <div
                className="row profile-img"
                style={{ marginTop: "4em", marginLeft: "4em" }}
              >
                
                {this.renderCurrentPicture(this.state.imagePreviewUrl1)}
                {this.renderImgPreview(this.state.imagePreviewUrl1)}
              </div>
              <div className="row file" style={{ marginLeft: "4em" }}>
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={this.handleImgFiles}
                  accept="image/*"
                />
              </div> */}
              <Form>
                <Form.Group style={{ textAlign: "center" }}>
                  {this.renderCurrentPicture(this.state.imagePreviewUrl1)}

                  {this.renderImgPreview(this.state.imagePreviewUrl1)}

                  {this.renderClearImgBtn(this.state.imagePreviewUrl1)}
                  {this.renderError(this.state.imageError)}

                  <Form.File
                    id="file"
                    style={{ marginLeft: "3em" }}
                    onChange={this.handleImgFiles}
                    accept="image/*"
                  />
                </Form.Group>
              </Form>
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
