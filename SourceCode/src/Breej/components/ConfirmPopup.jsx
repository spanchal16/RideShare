import React from "react";
import "../components/stylecpopup.css";
import { Col, Row, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

class CPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirm: "",
      userId: Cookies.get("userId"),
      isdeleted: 0,
    };
  }

  onconfirmchange = (e) => {
    this.setState({ confirm: e.target.value });
  };

  ondelacc = (e) => {
    if (this.state.confirm === "confirm") {
      this.deleteuser();
    } else {
      alert("Please type 'confirm' in text box it is case sensitive");
    }
  };

  deleteuser = async () => {
    await axios
      .delete("http://localhost:8080/usermng/deleteUser/" + this.state.userId)
      .then((res) => {
        if (res.data == true) {
          alert("account deleted!! Please tell us where we go wrong!!");
          this.setState({ isdeleted: 1 });
        } else {
          alert("Sp wrong!!");
        }
      })
      .catch((err) => {
        console.log("Inside catch del");
        console.log(err);
      });
  };

  render() {
    if (this.state.isdeleted === 1) {
      return <Redirect to="/feedback" />;
    }
    return (
      <div className="cpopup">
        <div className="cpopupinner">
          <Row>
            <Col className="col-md-10">
              <h5>Are you sure you want to delete account ?</h5>
            </Col>
            <Col className="col-md-2" style={{ textAlign: "right" }}>
              <span
                className="font-weight-bold"
                onClick={this.props.closePopup}
              >
                X
              </span>
            </Col>
          </Row>
          <Row>
            <Col style={{ margin: "1rem" }}>
              <label for="exampletext">
                {" "}
                <b>Type confirm in the box below:</b>{" "}
              </label>
              <input
                className="form-control"
                id="TextConfirm"
                type="text"
                placeholder="confirm"
                onChange={(e) => this.onconfirmchange(e)}
                value={this.state.confirm}
              ></input>
              <h6 style={{ color: "red", marginTop: ".75rem" }}>
                Note: Once you press "delete account" the effect will be
                instantaneous and permanent! Proceed with caution!
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <button
                className="btn-danger m-0"
                onClick={(e) => this.ondelacc(e)}
              >
                DELETE ACCOUNT
              </button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CPopup;
