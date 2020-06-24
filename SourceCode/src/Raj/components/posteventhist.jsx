import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "./events.css";

class PostEventHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      hoverDelete: false,
    };
  }

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  toggleHoverDelete = () => {
    this.setState({ hoverDelete: !this.state.hoverDelete });
  };

  render() {
    let myStyle = {
      borderRadius: "7px",
      cursor: "pointer",
      backgroundColor: "#ffffff",
      borderStyle: "outset",
      borderColor: "#c3c6d8",
    };
    let myStyleDelete = {
      backgroundColor: "yellow",
      borderRadius: "7px",
      cursor: "pointer",
    };
    if (this.state.hover) {
      myStyle = {
        // background: "linear-gradient(180deg,#c3c6d8,transparent)",
        backgroundColor: "#f2f2f2",
        borderRadius: "7px",
        cursor: "pointer",
        borderLeft: "0.6rem solid green",
      };
    }

    if (this.state.hoverDelete) {
      myStyleDelete = {
        backgroundColor: "red",
        borderRadius: "7px",
        cursor: "pointer",
      };
    }

    return (
      <div style={{ width: "100%" }}>
        <br />

        <div style={myStyle}>
          <Col>
            <Row>
              <Col sm={10}>
                <span
                  onMouseEnter={this.toggleHover}
                  onMouseLeave={this.toggleHover}
                  onClick={() =>
                    this.props.onPostedEvetClicked(this.props.eventHistory)
                  }
                  style={{ wordWrap: "break-word" }}
                >
                  From <strong>{this.props.eventHistory.fromAddress}</strong> to{" "}
                  <strong>{this.props.eventHistory.toAddress}</strong> on{" "}
                  <strong>{this.props.eventHistory.dateToDisplay}</strong> Seats
                  available: <strong>{this.props.eventHistory.seats} </strong>
                  Estimated price:{" "}
                  <strong>{this.props.eventHistory.estPrice} </strong>
                  Description:{" "}
                  <strong>{this.props.eventHistory.description}</strong>
                </span>
              </Col>
              <Col sm={2}>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={() =>
                    this.props.onDeleteEvetClicked(this.props.eventHistory)
                  }
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </Col>
            </Row>
          </Col>
        </div>
      </div>
    );
  }
}

export default PostEventHistory;
