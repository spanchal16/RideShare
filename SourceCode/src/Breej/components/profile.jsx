//@Author - Nishant Amoli, B00835717
import React, { Component } from "react";
import "./profcard.css";
import { Img } from "react-image";
import axios from "axios";
import Cookies from "js-cookie";
import Popup from "../components/Popup";

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Col,
  Row,
  Container,
} from "reactstrap";

import Alert from "react-bootstrap/Alert";
import { Redirect } from "react-router-dom";
class profile_card extends Component {
  constructor(props) {
    super(props);

    var isLoggedIn = true;
    const userId = Cookies.get("userId");
    if (userId == null) {
      isLoggedIn = false;
    }

    this.state = {
      fullName: "",
      email: "",
      bio: "",
      phone: "",
      profession: "",
      profileImage: "",
      isLoggedIn,
      isVerified: -2,
      showPopup: false,
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
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
          this.setState({ profileImage: resultData[0].profile_image });
          this.setState({ isVerified: resultData[0].isVerified });
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

  renderAlert = (verifiedf) => {
    if (verifiedf == -1) {
      return (
        <Alert
          variant="Danger"
          className="verify-id font-weight-bold text-secondary "
        >
          Identity Verification needed !!{" "}
          <Alert.Link href="verifyid">click here</Alert.Link> to verify now.
        </Alert>
      );
    } else if (verifiedf == 0) {
      return (
        <Alert
          variant="Primary"
          className="verify-id1 font-weight-bold text-secondary "
        >
          <Row>
            <Col style={{ textAlign: "right", marginTop: "4px" }}>
              Identity Verification Status:
            </Col>
            <Col style={{ textAlign: "left" }}>
              <h4 style={{ color: "yellow" }}> In process </h4>
            </Col>
          </Row>
        </Alert>
      );
    } else {
      return (
        <img
          src={
            "http://www.pngmart.com/files/12/Twitter-Verified-Badge-PNG-HD.png"
          }
          alt="verified"
          style={{ width: "4rem", marginTop: "4rem" }}
        />
        // <h3 style={{color:"blue"}}>Verified</h3>
      );
    }
  };

  render() {
    if (!this.state.isLoggedIn) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="main-container">
        <div className="div-image text-center">
          {/* <Img
            className="image1"
            src={}
          /> */}
          <img
            src={this.state.profileImage}
            alt="profile pic"
            className="image1"
          />
        </div>
        <Card className="main-card">
          <CardBody className="text-center">
            <div className="col-md-12" style={{ textAlign: "right" }}>
              <input
                type="image"
                name="btnAddMore"
                src={"https://icon-library.com/images/cog-icon-png-3.png"}
                style={{ width: "2rem" }}
                onClick={this.togglePopup.bind(this)}
              />
            </div>
            {this.state.showPopup ? (
              <Popup
                text='Click "Close Button" to hide popup'
                closePopup={this.togglePopup.bind(this)}
              />
            ) : null}
            {/* <Alert
              variant="Danger"
              className="verify-id font-weight-bold text-secondary "
            >
              Identity Verification needed !!{" "}
              <Alert.Link href="verifyid">click here</Alert.Link> to verify now.
            </Alert>
            <br /> */}
            {this.renderAlert(this.state.isVerified)}
            <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">
              {this.state.fullName}
            </CardTitle>
            <CardSubtitle
              className="text-secondary mb-3 font-weight-light text-uppercase"
              style={{ fontSize: "0.8rem" }}
            >
              {this.state.profession}
            </CardSubtitle>
            <CardText
              className="text-secondary mb-5"
              style={{ fontSize: "1.5rem" }}
            >
              {this.state.bio}
            </CardText>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="profile-head  text-secondary">
                  <h3
                    style={{
                      marginBottom: "2rem",
                      backgroundColor: "whitesmoke",
                      padding: "1rem",
                    }}
                  >
                    {" "}
                    Your personal information
                  </h3>
                  <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-8" style={{ textAlign: "left" }}>
                      <div className="row">
                        <div className="col-md-4">
                          <label>Full Name:</label>
                        </div>
                        <div className="col-md-8">
                          <p>{this.state.fullName}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <label>Email:</label>
                        </div>
                        <div className="col-md-8">
                          <p>{this.state.email}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <label>Phone:</label>
                        </div>
                        <div className="col-md-8">
                          <p>{this.state.phone}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <label>Profession:</label>
                        </div>
                        <div className="col-md-8">
                          <p>{this.state.profession}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                  </div>

                  <div className="row m-3">
                    <div className="col-md-12">
                      <a href="editprofile">
                        <input
                          type="submit"
                          className="myButton"
                          name="btnAddMore"
                          value="Edit Profile"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <p style={{ opacity: 0, margin: "0rem" }}>.</p>
      </div>
    );
  }
}

export default profile_card;
