import React, { Component } from "react";
import "../style/ForgotPassword.css";
import { ErrorMsg } from "../../Jigar/Components/Validation/ErrorMsg";
import { validateEmail } from "../../Jigar/Components/Validation/ValidateProperties";
import { Col, Navbar } from "react-bootstrap";
import logo from "../../Raj/images/logo.png";
import MediaQuery from "react-responsive";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      feedback: "",
      error: {},
      isEmailValid: false,
      isFormValid: false,
    };
  }

  redirectToHome = () => {
    this.props.history.push("/home");
  };

  feedbackSubmitted = (e) => {
    e.preventDefault();
    console.log("Function called");
    this.setState({
      email: "",
      message: "",
      error: {},
      isEmailValid: false,
      isFormValid: false,
    });
    alert(
      "Here dialog with below confirmation will be implemented\n " +
        "Email sent successfully!\n Thank You."
    );
  };

  updateProperties(name, value) {
    switch (name) {
      case "email":
        this.setState({ [name]: value }, validateEmail);
        break;
      case "message":
        this.setState({ [name]: value });
        break;
      default:
        break;
    }
  }

  validateForm = () => {
    const { isEmailValid } = this.state;
    this.setState({
      isFormValid: isEmailValid,
    });
  };

  render() {
    console.log("ContactUs called!");
    return (
      <section>
        <Col align="center">
          <br />
          <header className="header justify-content-center">
            <h3>Contact Us</h3>
          </header>
          <section className="card forgot-password-card mt-2 hv-center">
            <form className="form">
              <br />
              <section className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Enter your email id</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email id"
                  value={this.state.email}
                  onChange={(e) =>
                    this.updateProperties("email", e.target.value)
                  }
                />
                <ErrorMsg
                  valid={this.state.isEmailValid}
                  message={this.state.error.email}
                />
              </section>

              <section className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Message</label>
                <textarea
                  type="feedback"
                  className="form-control"
                  id="feedback"
                  placeholder="Please write your message here..."
                  value={this.state.feedback}
                  onChange={(e) =>
                    this.updateProperties("feedback", e.target.value)
                  }
                />
              </section>

              <section>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!this.state.isFormValid}
                  onClick={this.feedbackSubmitted}
                >
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
          </section>
        </Col>
      </section>
    );
  }
}
export default ContactUs;
