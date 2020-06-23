import React, { Component } from "react";
import {
  Row,
  Card,
  Col,
  InputGroup,
  Button,
  FormControl,
} from "react-bootstrap";

class booking_details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: 1,
    };
  }

  onClickIncreasehandler = () => {
    if (this.state.counterValue === 4) {
      alert("no more than 4 people allowed for current booking!!");
    } else {
      this.setState({ counterValue: this.state.counterValue + 1 });
    }
  };

  onClickDecreasehandler = () => {
    if (this.state.counterValue === 1) {
      alert("need atleast 1 booking");
    } else {
      this.setState({ counterValue: this.state.counterValue - 1 });
    }
  };

  bookingSuccess = () => {
    alert("Organiser has been notified. Booking Successful");
  };
  render() {
    return (
      <div>
        <Row>
          <Col className="col-lg-7 col-md-7 col-sm-11 col-xs-11 col-11">
            <Card
              style={{
                margin: "3rem 1rem 2rem 4rem ",
                border: "0",
                borderLeft: "0.6rem solid",
                // boxShadow: "1rem 1rem 0.5rem #a2a2a2",
                boxShadow:
                  "0 4.8px 4.2px rgba(0, 0, 0, 0.034), 0 8.7px 7.3px rgba(0, 0, 0, 0.048), 0 14.5px 12px rgba(0, 0, 0, 0.06), 0 24.3px 19.9px rgba(0, 0, 0, 0.072), 0 43.8px 35.4px rgba(0, 0, 0, 0.086), 0 102px 82px rgba(0, 0, 0, 0.12)",
              }}
            >
              <h1 className="m-3" style={{ textAlign: "start" }}>
                {" "}
                Book-A-Ride
              </h1>
              <br />

              <Row className="m-3">
                <h6>Ride details</h6>
              </Row>
              <Row>
                <Col className="col-lg-5 col-md-11 col-sm-11 col-xs-11 col-11">
                  <InputGroup className="m-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">From:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="HaliFax"
                      aria-describedby="basic-addon1"
                      readOnly
                    />
                  </InputGroup>
                </Col>
                <Col className="col-lg-5 col-md-11 col-sm-11 col-xs-11 col-11">
                  <InputGroup className="m-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">
                        Destination:
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="Montreal"
                      aria-describedby="basic-addon1"
                      readOnly
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col className="col-lg-5 col-md-11 col-sm-11 col-xs-11 col-11">
                  <InputGroup className="m-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Date:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="14 JUN,2020"
                      aria-describedby="basic-addon1"
                      readOnly
                    />
                  </InputGroup>
                </Col>
                <Col className="col-lg-5 col-md-11 col-sm-11 col-xs-11 col-11">
                  <InputGroup className="m-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Time:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="3:00PM AST"
                      aria-describedby="basic-addon1"
                      readOnly
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col className="col-lg-5 col-md-11 col-sm-11 col-xs-11 col-11">
                  <InputGroup className="m-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">
                        Max people:
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="4"
                      aria-describedby="basic-addon1"
                      readOnly
                    />
                  </InputGroup>
                </Col>
                <Col className="col-lg-5 col-md-11 col-sm-11 col-xs-11 col-11">
                  <InputGroup className="m-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">
                        Total Trip Time:
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="20hrs"
                      aria-describedby="basic-addon1"
                      readOnly
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row className="m-3">
                <h6> Rules!!</h6>
              </Row>
              <Row className="m-3">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid quidem debitis exercitationem ex fugiat fuga dolores
                  perferendis ut deleniti! Alias harum expedita, fugit doloribus
                  odit sunt earum nostrum ex ullam.
                </p>
              </Row>
              <Row className="m-3">
                <h6>Payment Plan</h6>
              </Row>
              <Row className="m-3">
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Radio />
                  </InputGroup.Prepend>
                  <FormControl
                    style={{ color: "black" }}
                    plaintext
                    readOnly
                    defaultValue="  Price at full Capacity -- 10$ CAD"
                  />
                </InputGroup>
              </Row>
              <Row className="m-3 mb-5">
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Radio />
                  </InputGroup.Prepend>
                  <FormControl
                    style={{ color: "black" }}
                    plaintext
                    readOnly
                    defaultValue="  Price at half Capacity -- 25$ CAD"
                  />
                </InputGroup>
              </Row>
            </Card>
          </Col>
          <Col className="col-lg-4 col-md-4 col-sm-11 col-xs-11 col-11">
            <Row>
              <Card
                style={{
                  margin: "3rem 1rem 2rem 4rem ",
                  //   boxShadow: "1rem 1rem 0.5rem #a2a2a2",
                  boxShadow:
                    "0 4.8px 4.2px rgba(0, 0, 0, 0.034), 0 8.7px 7.3px rgba(0, 0, 0, 0.048), 0 14.5px 12px rgba(0, 0, 0, 0.06), 0 24.3px 19.9px rgba(0, 0, 0, 0.072), 0 43.8px 35.4px rgba(0, 0, 0, 0.086), 0 102px 82px rgba(0, 0, 0, 0.12)",
                  border: "0",
                  borderLeft: "0.6rem solid #ffae00",
                  width: "100%",
                }}
              >
                <Row className="m-3 justify-content-center">
                  <h4> Number Of People</h4>
                </Row>
                <Row className="m-3 justify-content-center">
                  <Button
                    variant="warning"
                    onClick={() => this.onClickDecreasehandler()}
                  >
                    <h3>-</h3>
                  </Button>
                  <span className="text-center mt-1" style={{ width: "3rem" }}>
                    <h3>{this.state.counterValue}</h3>
                  </span>
                  <Button
                    variant="warning"
                    onClick={() => this.onClickIncreasehandler()}
                  >
                    <h3>+</h3>
                  </Button>
                </Row>
                <Row className="m-3 justify-content-center">
                  <h4>Total : ${this.state.counterValue * 10} CAD</h4>
                </Row>
                <Row className="justify-content-center mb-5">
                  <Button
                    variant="outline-warning"
                    onClick={() => this.bookingSuccess()}
                  >
                    <h4>Book and Pay</h4>
                  </Button>
                </Row>
              </Card>
            </Row>
            <Row>
              <Card
                style={{
                  margin: "3rem 1rem 2rem 4rem ",
                  //   boxShadow: "1rem 1rem 0.5rem #a2a2a2",
                  boxShadow:
                    "0 4.8px 4.2px rgba(0, 0, 0, 0.034), 0 8.7px 7.3px rgba(0, 0, 0, 0.048), 0 14.5px 12px rgba(0, 0, 0, 0.06), 0 24.3px 19.9px rgba(0, 0, 0, 0.072), 0 43.8px 35.4px rgba(0, 0, 0, 0.086), 0 102px 82px rgba(0, 0, 0, 0.12)",
                  border: "0",
                  borderLeft: "0.6rem solid #2B85FD",
                  width: "100%",
                }}
              >
                <Row className="m-3">
                  <h3 style={{ color: "#2B85FD", textAlign: "center" }}>
                    Organiser's Contact Information
                  </h3>
                </Row>
                <hr />
                <Row className="mb-2 p-2 justify-content-center">
                  <Col className="col-5 text-center">
                    <img
                      src={
                        "https://cdn.freebiesupply.com/logos/large/2x/twitter-logo-black-and-white.png"
                      }
                      alt="twitter logo"
                      width="60rem"
                    />
                  </Col>
                  <Col>
                    <h4 style={{ color: "black" }}>@Rdj_229</h4>
                  </Col>
                </Row>
                <Row className=" p-2 justify-content-center mb-3">
                  <Col className="col-5 text-center">
                    <img
                      src={
                        "https://sguru.org/wp-content/uploads/2018/01/instagram-logo-black-transparent.png"
                      }
                      alt="twitter logo"
                      width="60Rem"
                    />
                  </Col>
                  <Col>
                    <h4 style={{ color: "black" }}>@Rdj_insta_229</h4>
                  </Col>
                </Row>
              </Card>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default booking_details;
