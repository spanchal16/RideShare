import React from "react";
import "../components/style.css";
import { Col, Row, Button } from "react-bootstrap";
import CPopup from "../components/ConfirmPopup";
import Cookies from "js-cookie";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    return (
      <div className="popup">
        <div className="popupinner">
          <Row>
            <Col>
              <h2>Account settings </h2>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <span
                className="font-weight-bold"
                onClick={this.props.closePopup}
              >
                X
              </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <a href={`/resetpassword/${Cookies.get("userId")}`}>
                <Button style={{ margin: "3rem" }}>
                  Change / Reset Password
                </Button>
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className="btn-danger"
                onClick={this.togglePopup.bind(this)}
              >
                DELETE ACCOUNT
              </Button>
              {this.state.showPopup ? (
                <CPopup
                  text='Click "Close Button" to hide popup'
                  closePopup={this.togglePopup.bind(this)}
                />
              ) : null}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Popup;
