import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button, InputGroup, Col, Row } from "react-bootstrap";
import './events.css'

 

class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    
    renderByEventdd = (etype) => {
        if (etype === "car") {
            return this.props.eventTypeVal === "cj" ? <Row>
                <Form.Group as={Col}>
                    <Form.Label>Seats available: {this.rengerOptionalinLabel()}</Form.Label>
                    <div className="def-number-input number-input">
                        <Form.Control
                            value={this.props.seats}
                            name="seats"
                            onChange={this.props.onNumInputChange}
                            type="number"
                            placeholder="0" />
                                               
                    </div>
                </Form.Group>
                <Form.Group as={Col} controlId="toAddr">
                    <Form.Label>Estimated price: {this.rengerOptionalinLabel()}</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">CAD $</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="number"
                            placeholder="0"
                            name="estPrice"
                            onChange={this.props.onNumInputChange}
                            aria-describedby="inputGroupPrepend"
                            value={this.props.estPrice} />
                    </InputGroup>
                </Form.Group> </Row> : null;
        }
    }
    
    renderDescription = () => {
        console.log(this.props.isCreate)
        return (this.props.isCreate ? <Form.Row>
            <Form.Group as={Col} controlId="txtarea">
                <Form.Label>Description: <span className="fstyle">{100 - this.props.description.length} words remaining</span>{this.rengerOptionalinLabel()}</Form.Label>
                <Form.Control as="textarea"
                    placeholder="Max 100 words.."
                    name="description"
                    value={this.props.description}
                    onChange={this.props.onDescriptionEnter}
                />
            </Form.Group>
        </Form.Row> : null);
    }

    renderDateRange = () => {
        if (!this.props.isCreate) {
            return (<Form.Group as={Col} controlId="date">
                <Form.Label>Date Range <span className="fstyle">(Optional)</span></Form.Label>
                <div>
                    <DatePicker className="calenderpicker form-control"
                        value={this.props.journeyDate2}
                        name="journeyDate2"
                        selected={this.props.journeyDate2}
                        onChange={this.props.handleDateChange2}
                    />
                </div>
                
            </Form.Group>)
        }
        else {
            return null;
        }
        
    };

    rengerOptionalinLabel = () => {
        return this.props.isCreate ? <span className="fstyle">(Optional)</span> : null;
    }

    render() {
        const myStyle = {
            width: "100%",
            height:"100%",
            backgroundColor: "#c3c6d8",
            borderRadius:"7px"
            
        }
        
        
        let buttonText = this.props.isCreate ? (this.props.isUpdate ? 'Update' : 'Create'): ('Find Event');
        let hedingText = this.props.isCreate ? 'Create Event' : 'Find Event';

        

        return (
            <div>
                <br />
                <div style={myStyle}>
                
                    <div>
                        <Col>
                            <h3>{hedingText}</h3>
                        </Col>
                    </div>
                
                    <Col>
                        <Form noValidate validated={this.props.isValidated} onSubmit={this.props.mySubmitHandler}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="eventId">
                                    <Form.Label>Event type:</Form.Label>
                                    <Form.Control as="select" value={this.props.eventTypeVal} onChange={this.props.onEventddChange} required>
                                        <option value="">Choose...</option>
                                        <option value="cj">Car journey</option>
                                        <option value="fj">Flight journey</option>
                                        <option value="oe">Organizing event</option>

                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid type.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="fromAddr">
                                    <Form.Label>From:</Form.Label>
                                    <Form.Control type="text" placeholder="From"
                                        value={this.props.fromAddress}
                                        name="fromAddress"
                                        onChange={this.props.onFromToEnter} required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid city.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="toAddr">
                                    <Form.Label>To:</Form.Label>
                                    <Form.Control type="text" placeholder="To"
                                        value={this.props.toAddress}
                                        name="toAddress"
                                        onChange={this.props.onFromToEnter} required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid city.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="date">
                                    <Form.Label>Date of journey:  {this.rengerOptionalinLabel()}</Form.Label>
                                    <div>
                                        <DatePicker className="calenderpicker form-control"
                                            value={this.props.journeyDate}
                                            name="journeyDate"
                                            selected={this.props.journeyDate}
                                            onChange={this.props.handleDateChange}
                                        />
                                    </div>
                                        
                                </Form.Group>
                                {this.renderDateRange()}
                            </Form.Row>
                            
                            <Form.Row>
                                {this.renderByEventdd("car")}
                            </Form.Row>
                            {this.renderDescription()}
                            <div style={{paddingBottom:"10px"}}>

                            
                            <Button variant="primary" type="submit">
                                {buttonText}
                                </Button>
                                </div>
                        </Form>
                    </Col>
                    
                
                </div>
            </div>
        );
    }
}
 
export default CreateEvent;