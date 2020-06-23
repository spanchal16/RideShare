import React, { Component } from "react";
import NavbarHeader from "./navbarHeader";
import createeventContainer from "./createeventContainer";
import FindEventContainer from "./findeventContainer";
import home from "./home";
import Error from "./errorpage";
import "./events.css";
import profilepage from "../../Breej/components/profile";
import bookingdetails from "../../Breej/components/booking_details";
import verifyid from "../../Breej/components/verify_id";
import editprofile from "../../Breej/components/EditProfile";
import { Route, Switch } from "react-router-dom";
import AboutUs from "../../Nishant/components/AboutUs";
import Terms from "../../Nishant/components/Terms";
import PrivacyPolicies from "../../Nishant/components/PrivacyPolicies";
import ContactUs from "../../Nishant/components/ContactUs";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Col,
  Container,
  Row,
} from "react-bootstrap";

class NavbarTemplate extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <NavbarHeader />
        </div>

        <div className="content" style={{ overflow: "auto", height: "100%" }}>
          <Switch>
            <Route exact path="/" component={home} />
            <Route
              exact
              path="/createevent"
              component={createeventContainer}
            ></Route>
            <Route
              exact
              path="/findevent"
              component={FindEventContainer}
            ></Route>
            <Route exact path="/home" component={home}></Route>
            <Route exact path="/profile" component={profilepage}></Route>
            <Route
              exact
              path="/bookingdetails"
              component={bookingdetails}
            ></Route>
            <Route exact path="/verifyid" component={verifyid}></Route>
            <Route exact path="/editprofile" component={editprofile}></Route>
            <Route exact path="/aboutus" component={AboutUs}></Route>
            <Route exact path="/privacy" component={PrivacyPolicies}></Route>
            <Route exact path="/terms" component={Terms}></Route>
            <Route exact path="/contactus" component={ContactUs}></Route>
            <Route exact path="/*" component={Error} />
          </Switch>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default NavbarTemplate;
