//@Author - RajKumar B00849566

//Render requests for a event

import React, { Component } from 'react';
import { Button, Row, Col, Card,Alert } from "react-bootstrap";
import { BsFillXCircleFill } from "react-icons/bs";
import { FcOk } from "react-icons/fc";

class SubReqDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: ''
        }
        //console.log(props.data)
    }

    onClickInfo = () => {

    }

    //click event for Accept button
    onClickAccept = () => {
        this.setState({status:"accept"})
    }

    //click event for Reject button
    onClickReject = () => {
        this.setState({status:"reject",showAlert:true})
    }

    render() {
        let icon = ''
        if (this.state.status == "accept") {
            icon = <div><FcOk /> <span style={{fontStyle: "italic"}}>Accepted </span></div>
        }
        else if (this.state.status == "reject") {
            icon = <div><BsFillXCircleFill style={{color:"#dc3545"}}/> <span style={{fontStyle: "italic"}}>Declined </span></div>
        }
        else {
            icon=<span style={{fontStyle: "italic"}}>No action taken </span>
        }


        return (<div>
            <br />
            <Card border="secondary">

                <Card.Body style={{ backgroundColor: "#c3c6d8" }}>

                    <Row  md={3} sm={2} xs={1}>
                        <Col>
                            <Button className="btn btn-info" type="button"
                                onClick={this.onClickInfo}>
                                Requester
                    </Button>
                        </Col>
                        <Col>
                            <Button className="btn btn-success" type="button"
                                onClick={this.onClickAccept}>
                                Accept
                    </Button>
                        </Col>
                        <Col>
                            <Button className="btn btn-danger" type="button"
                                onClick={this.onClickReject}>
                                Decline
                    </Button>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="justify-content-end">
                    <Row>
                        <Col>
                            <small className="text-muted"> {icon}</small>
                        </Col>
                        <Col>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>

        </div>);
    }
}

export default SubReqDetails;
