//@Author - Nishant Amoli, B00835717

import React, { Component } from "react";
import { Col, Form, Navbar } from "react-bootstrap";
import emailjs from "emailjs-com";
import axios from "axios";
import Cookies from "js-cookie";

export class ContactUs extends Component {
  constructor(props) {
    super(props);
    const email = Cookies.get("email");

    this.state = {
      email: "",
      feedback: "",
      error: {},
      validateEmailMsg: "",
      validateFeedbackMsg: "",
    };
  }

  redirectToHome = () => {
    this.props.history.push("/home");
  };

  emailIdFun = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  feedbackFun = (event) => {
    this.setState({
      feedback: event.target.value,
    });
  };

  feedbackSubmitted = (event) => {
    let validateEmailMsg = "";
    let validateFeedbackMsg = "";
    event.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "rideshare",
        event.target,
        "user_SZchUn5ka0898AwI2Yq1S"
      )
      .then(
        (result) => {},
        (error) => {
          console.log(error.text);
        }
      );

    if (this.state.feedback.length === 0 || this.state.feedback.trim() === "") {
      validateFeedbackMsg =
        "Feedback field cannot be empty. Please provide feedback";
      if (validateFeedbackMsg) {
        this.setState({ validateFeedbackMsg });
      }
    } else {
      this.setState({ validateFeedbackMsg });
    }

    if (this.state.email.includes("@") && this.state.email.includes(".")) {
      this.setState({ validateEmailMsg });
    } else {
      validateEmailMsg = "Email Id is invalid. Please provide valid Email Id";
      if (validateEmailMsg) {
        this.setState({ validateEmailMsg });
      }
    }

    const mydata = {
      email: this.state.email,
      feedback: this.state.feedback,
    };
    console.log(mydata);
    let url = "https://eventgoapi.herokuapp.com/insertFeedback/insertFeedback";
    //let url = "http://localhost:8080/insertFeedback/insertFeedback";
    axios
      .post(url, mydata)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <section>
        <Col align="center">
          <br />
          <header className="header justify-content-center">
            <h3>Contact Us</h3>
          </header>
          <section className="card" style={{ width: "35%" }}>
            <div className="card-body">
              <form className="form" onSubmit={this.feedbackSubmitted}>
                <br />
                <section className="form-group text-left">
                  <label>Enter your email id</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter your email id"
                    value={this.state.email}
                    onChange={this.emailIdFun}
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.validateEmailMsg}
                  </div>
                </section>

                <section className="form-group text-left">
                  <label htmlFor="exampleInputEmail1">Message</label>
                  <textarea
                    type="feedback"
                    className="form-control"
                    name="feedback"
                    placeholder="Please write your message"
                    value={this.state.feedback}
                    onChange={this.feedbackFun}
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.validateFeedbackMsg}
                  </div>
                </section>

                <section>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </section>
              </form>
              <br />
              <br />
              <footer
                type="submit"
                className="btn-custom"
                onClick={this.redirectToHome.bind(this)}
              >
                <strong>Back to Home</strong>
              </footer>
            </div>
          </section>
        </Col>
      </section>
    );
  }
}
export default ContactUs;
