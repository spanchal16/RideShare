//@Author - RajKumar B00849566

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
    this.setState({ hoverDelete: true });
  };
  toggleHoverDeleteLeave = () => {
    this.setState({ hoverDelete: false });
  };

  renderDescription = () => {
    let { description } = this.props.eventHistory;
    return (
      (description != null && description.length >= 40 )? description.substr(0,41)+'...': description 
    )
  }

  render() {
    let myStyle = {
      // borderRadius: "7px",
      // cursor: "pointer",
      // backgroundColor: "#ffffff",
      // borderStyle: "outset",
      // borderColor: "#c3c6d8",
      borderRadius: "7px",
      cursor: "pointer",
      backgroundColor: "rgb(255, 255, 255)",
      borderTopStyle: "outset",
      borderRightStyle: "outset",
      borderBottomStyle: "outset",
      borderTopColor: "rgb(195, 198, 216)",
      borderRightColor: "rgb(195, 198, 216)",
      borderBottomColor: "rgb(195, 198, 216)"
    };
    
    if (this.state.hover) {
      myStyle = {
        // background: "linear-gradient(180deg,#c3c6d8,transparent)",
        // backgroundColor: "white",
        // borderRadius: "7px",
        // cursor: "pointer",
        // borderLeft: "0.6rem solid green",
        borderLeftColor: "green",
        borderLeftWidth: "0.6rem",
        borderRadius: "7px",
        cursor: "pointer",
        backgroundColor: "rgb(255, 255, 255)",
        borderTopStyle: "outset",
        borderRightStyle: "outset",
        borderLeftStyle: "outset",
        borderBottomStyle: "outset",
        borderTopColor: "rgb(195, 198, 216)",
        borderRightColor: "rgb(195, 198, 216)",
        borderBottomColor: "rgb(195, 198, 216)"
        
      };
    }

    if (this.state.hoverDelete) {
      myStyle = {
        borderLeftColor: "red",
        borderLeftWidth: "0.6rem",
        borderRadius: "7px",
        cursor: "pointer",
        backgroundColor: "rgb(255, 255, 255)",
        borderTopStyle: "outset",
        borderRightStyle: "outset",
        borderLeftStyle: "outset",
        borderBottomStyle: "outset",
        borderTopColor: "rgb(195, 198, 216)",
        borderRightColor: "rgb(195, 198, 216)",
        borderBottomColor: "rgb(195, 198, 216)"
      };
    }

    return (
      <div style={{ width: "100%" }}>
        <br />

        <div style={myStyle} >
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
                  <strong>{this.props.eventHistory.doj}</strong> Seats
                  available: <strong>{this.props.eventHistory.seats} </strong>
                  Estimated price:{" "}
                  <strong>{this.props.eventHistory.estPrice} </strong>
                  Description:{" "}
                  <strong>{this.renderDescription()}</strong>
                  
                </span>
              </Col>
              <Col sm={2}>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onMouseEnter={this.toggleHoverDelete}
                  onMouseLeave={this.toggleHoverDeleteLeave}
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
