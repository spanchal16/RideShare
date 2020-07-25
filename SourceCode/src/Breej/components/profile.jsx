import React from "react";
import "./profcard.css";
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
import { Link } from "react-router-dom";

const profile_card = (props) => (
  <div className="main-container">
    <div className="div-image text-center">
      <img
        top
        className="image1"
        src={
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/526c51c5-f409-49d6-8db3-3c14fce69897/dbr1scd-7be0a9ad-97a9-461f-afe2-eb0486c30fad.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi81MjZjNTFjNS1mNDA5LTQ5ZDYtOGRiMy0zYzE0ZmNlNjk4OTcvZGJyMXNjZC03YmUwYTlhZC05N2E5LTQ2MWYtYWZlMi1lYjA0ODZjMzBmYWQuanBnIn1dXX0.c0a71BbaoJT3eCBivmtoG1oJ6os5EvY4kfE-ZKLp7Vk"
        }
        alt="banner"
      />
    </div>
    <Card className="main-card">
      <CardBody className="text-center">
        <Alert
          variant="Danger"
          className="verify-id font-weight-bold text-secondary "
        >
          Identity Verification needed !!{" "}
          <Alert.Link href="verifyid">click here</Alert.Link> to verify now.
        </Alert>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">
          @Rdj_229
        </CardTitle>
        <CardSubtitle
          className="text-secondary mb-3 font-weight-light text-uppercase"
          style={{ fontSize: "0.8rem" }}
        >
          Actor, Avenger
        </CardSubtitle>
        <CardText
          className="text-secondary mb-4"
          style={{ fontSize: "0.75rem" }}
        >
          Hi! Welcome to my Bio. I am an actor | Loving husband | proud father and Ohh!! Also an Avenger!
        </CardText>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="profile-head  text-secondary">
              <h3>Your personal information</h3>

              <div className="row" style={{ marginTop: "3em" }}>
                <div className="col-md-6">
                  <label>Username:</label>
                </div>
                <div className="col-md-6">
                  <p>@Rdj_229</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Name:</label>
                </div>
                <div className="col-md-6">
                  <p>Robert Downey jr.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Email:</label>
                </div>
                <div className="col-md-6">
                  <p>user@dal.ca</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Phone:</label>
                </div>
                <div className="col-md-6">
                  <p>123 456 7890</p>
                </div>
              </div>
              <div className="row m-3">
                <div className="col-md-12">
                  <h4>Your Social Media handles:</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Twitter Id:</label>
                </div>
                <div className="col-md-6">
                  <p>Rdj_229</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Instagram Id:</label>
                </div>
                <div className="col-md-6">
                  <p>Rdj_229</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Facebook Username:</label>
                </div>
                <div className="col-md-6">
                  <p>Robert jr. Downey</p>
                </div>
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
export default profile_card;
