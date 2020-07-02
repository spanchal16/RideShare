import React, { Component } from "react";
import { Nav, Button, Row, Col, Navbar } from "react-bootstrap";
import { Redirect, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { MdNotificationsActive } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Cookies from "js-cookie";

class NavbarHeader extends Component {
  constructor(props) {
    super(props);

    let isLoggedin = true;
    //const username = sessionStorage.getItem("username");
    const username = Cookies.get("username")
    if (username == null) {
      isLoggedin = false;
    }

    this.state = {
      isLoggedin,
      username,
      isLogoutClicked: false,
    };
  }

  onButtonClick = () => {
    if (this.state.isLoggedin) {
      //sessionStorage.clear();
      Cookies.remove("username");
      this.setState({ isLoggedin: false, isLogoutClicked: true });
    } else {
      this.setState({ isLoggedin: false, isLogoutClicked: true });
    }
  };

  render() {
    const signinText = this.state.isLoggedin ? (
      <div>
        <FaUserCircle
          style={{ color: "white", height: "29px", width: "35px" }}
        />
        <a style={{ color: "white", fontSize: "20px" }} href="profile">
          {this.state.username}
        </a>
      </div>
    ) : null;

    const buttonText = this.state.isLoggedin ? "Logout" : "Login/Register";

    if (this.state.isLogoutClicked) {
      return <Redirect to="/login" />;
    }

    return (
      <section>
        <Navbar className="navbg" expand="lg" sticky="top">
          <section>
            <Navbar.Brand href="home">
              <img src={logo} alt="logo" style={{ height: "35px" }} />
              <strong style={{ fontFamily: "unset", fontSize: "medium" }}>
                RideShare
              </strong>
            </Navbar.Brand>
          </section>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav">
              <Nav className="ml-auto" variant="pills">
                <NavLink
                  exact
                  activeClassName="nav-link active"
                  className="nav-link"
                  to="/createevent"
                  style={{ color: "white" }}
                >
                  Offer a Ride
                </NavLink>
                <NavLink
                  exact
                  activeClassName="nav-link active"
                  className="nav-link"
                  to="/findevent"
                  style={{ color: "white" }}
                >
                  Find a Ride
                </NavLink>
              </Nav>
            </ul>
            <ul className="navbar-nav mr-auto"></ul>
            <Nav className="ml-auto" variant="pills">
              {signinText}
              &nbsp; &nbsp;
              <NavLink
                exact
                activeClassName="nav-link active"
                className="nav-link"
                to="/home"
                style={{ color: "white" }}
              >
                <MdNotificationsActive
                  style={{ color: "white", height: "29px", width: "35px" }}
                />
              </NavLink>
              &nbsp; &nbsp;
              <Button
                variant="primary"
                type="submit"
                onClick={this.onButtonClick}
                style={{ backgroundColor: "transparent" }}
              >
                {buttonText}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>
    );
  }
}

export default NavbarHeader;
