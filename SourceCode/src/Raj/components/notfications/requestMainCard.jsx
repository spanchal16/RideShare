import React, { Component } from 'react';
import { Card,Accordion,Button,Row,Col } from "react-bootstrap";
import SubReqDetails from './subReqDetails'

class RequestMainCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (<div>
            <Accordion>
                <Card border="secondary" >
                    <Card.Header style={{padding:"0"}}>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            From <strong>{this.props.eventDetail.fromAddress}</strong> to <strong>{this.props.eventDetail.toAddress}</strong> on <strong>{this.props.eventDetail.doj}</strong> Seats available: <strong>{this.props.eventDetail.seats} </strong>
                            Estimated price: <strong>$ {this.props.eventDetail.estPrice} </strong>
                            Description: <strong>{this.props.eventDetail.description}</strong>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {this.props.eventDetail.requests.map(item => <SubReqDetails
                                key={item.requesteventId}
                                data={item}
                            />)}
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Footer className="justify-content-end">
                    <Row>
                        <Col>
                            <small className="text-muted"> {this.props.eventDetail.requests.length} Requests for this event</small>
                        </Col>
                        <Col>
                            <small className="text-muted">updated 3 days ago</small>
                        </Col>
                    </Row>
                </Card.Footer>
                </Card>
            </Accordion>
            <br />
        </div>);
    }
}
 
export default RequestMainCard;