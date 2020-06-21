import React, { Component } from 'react';
import { Card, Accordion, Button, Row, Col } from "react-bootstrap";
import { BsFillXCircleFill } from "react-icons/bs";
import { FcOk } from "react-icons/fc";
import { MdHourglassFull } from "react-icons/md";

class ResponseMainCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderHeader = () => {
        if (this.props.eventDetail.status == 1) {
            return (<Accordion.Toggle as={Button} variant="link" eventKey="0">
                From <strong>{this.props.eventDetail.fromAddress}</strong> to <strong>{this.props.eventDetail.toAddress}</strong> on <strong>{this.props.eventDetail.dateToDisplay}</strong> Seats available: <strong>{this.props.eventDetail.seats} </strong>
                            Estimated price: <strong>$ {this.props.eventDetail.estPrice} </strong>
                            Description: <strong>{this.props.eventDetail.description}</strong>
            </Accordion.Toggle>)
        }
        else {
            return <button type="button" className="btn" style={{cursor:"auto"}}>
            From <strong>{this.props.eventDetail.fromAddress}</strong> to <strong>{this.props.eventDetail.toAddress}</strong> on <strong>{this.props.eventDetail.dateToDisplay}</strong> Seats available: <strong>{this.props.eventDetail.seats} </strong>
                        Estimated price: <strong>$ {this.props.eventDetail.estPrice} </strong>
                        Description: <strong>{this.props.eventDetail.description}</strong>
        </button>
        }
    }

    renderFooterText = () => {
        if (this.props.eventDetail.status == 1) {
            return <div><FcOk /> <span style={{fontStyle: "italic"}}>Accepted </span></div>
        }
        else if (this.props.eventDetail.status == 0) {
            return <div><BsFillXCircleFill style={{color:"#dc3545"}}/> <span style={{fontStyle: "italic"}}>Rejected </span></div>
        }
        else {
            return <div><MdHourglassFull style={{color:"#ed9106"}}/> <span style={{fontStyle: "italic"}}>pending </span></div>
        }
    }

    render() { 
        return (<div>
            <Accordion>
            <Card border="secondary" >
                    <Card.Header  style={{padding:"0"}}>
                        
                    {this.renderHeader()}
                        
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            event owner details to contact...
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Footer className="justify-content-end">
                    <Row>
                        <Col>
                            <small className="text-muted">  {this.renderFooterText()}</small>
                        </Col>
                        <Col>
                            <small className="text-muted">updated 3 days ago</small>
                        </Col>
                    </Row>
                </Card.Footer>
                </Card>
                </Accordion>
            <br/>
        </div> );
    }
}
 
export default ResponseMainCard;