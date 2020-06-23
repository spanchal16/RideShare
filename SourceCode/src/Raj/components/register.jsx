import React, { Component } from 'react';
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Redirect } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import './events.css'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dob: '',
            genderVal: '',
            username: '',
            password: '',
            email: '',
            validated: false,
            invalidPwd: false,
            invalidEmail: false,
            isValid:false

        }
    }

    onFromToEnter = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    onPasswordEnter = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if (value.length > 4) {
            this.setState({ invalidPwd: false });
        }
        else {
            this.setState({ invalidPwd: true });
        }
        this.setState({ [name]: value });
    }

    onEmailEnter = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(String(value).toLowerCase())) {
            this.setState({ invalidEmail: false });
        }
        else {
            this.setState({ invalidEmail: true });
        }
        this.setState({ [name]: value });
    }

    handleDateChange = date => {
        this.setState({
            dob: date
        });
    };

    onGenderChange = (event) => {
        this.setState({ genderVal: event.target.value })

    }

    mySubmitHandler = (event) => {
        const form = event.currentTarget;
        const { invalidPwd, invalidEmail, username } = this.state;
        console.log(invalidPwd,invalidEmail)
        if (form.checkValidity() === false || invalidPwd || invalidEmail) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            sessionStorage.setItem( "username", username );
            this.setState({ isValid: true });
        }

        this.setState({ validated: true });
    };

    render() {

        const myBordeSrtyle = {
            width: "100%",
            height:"100%",
            backgroundColor: "#c3c6d8",
            borderRadius:"7px"

        }

        let pwdbstyle = this.state.invalidPwd ? "invalidValuebStyle" : "validValuebStyle";
        let emailbstyle = this.state.invalidEmail ? "invalidValuebStyle" : "validValuebStyle";
        let errMsgPwd = this.state.invalidPwd ? <span style={{ fontStyle: "italic" }}><small className="text-muted" >Password must be atleast 5 Characters long</small></span> : null;
        let errMsgEmail = this.state.invalidEmail ? <span style={{fontStyle: "italic"}}><small  className="text-muted" >Please enter a valid email address</small></span> : null;

        if (this.state.isValid) {
            return <Redirect to="/home"/>
        }
        return (
            <div style={{height:"100%"}}>
                <br/>
                <Col style={{height:"100%"}}>
                    <Container style={myBordeSrtyle}>
                        <h2>Create new account</h2>
                        <Form noValidate validated={this.state.validated} onSubmit={this.mySubmitHandler}>

                            <Form.Group as={Row} controlId="usrname">
                                <Form.Label column sm="3.5" className="loginLabel">Username:</Form.Label>
                                <Col sm="5">
                                    <Form.Control type="text" placeholder=""
                                                  name="username"
                                                  value={this.state.username}
                                                  onChange={this.onFromToEnter}
                                                  required
                                    />
                                </Col>
                            </Form.Group>


                            <Form.Group as={Row} controlId="pwd">
                                <Form.Label column sm="3.5"  className="loginLabel">Password:</Form.Label>
                                <Col sm="5">
                                    <Form.Control type="password" placeholder=""
                                                  name="password" className={pwdbstyle}
                                                  value={this.state.password}
                                                  onChange={this.onPasswordEnter}
                                                  required
                                    />

                                </Col>
                                <Col>
                                    {errMsgPwd}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="em">
                                <Form.Label column sm="3.5" className="loginLabel">Email:</Form.Label>
                                <Col sm="5">
                                    <Form.Control type="text" placeholder=""
                                                  name="email"
                                                  value={this.state.email}
                                                  onChange={this.onEmailEnter}
                                                  required
                                                  className={emailbstyle}
                                    />
                                </Col>
                                <Col>
                                    {errMsgEmail}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="date">
                                <Form.Label column sm="3.5" className="loginLabel">Date of birth:</Form.Label>
                                <Col sm="5">
                                    <DatePicker className="calenderpicker form-control"
                                                selected={this.state.dob}
                                                onChange={this.handleDateChange}
                                                value={this.state.dob}
                                                required
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="gender">
                                <Form.Label column sm="3.5" className="loginLabel">Gender:</Form.Label>
                                <Col sm="5">
                                    <Form.Control as="select" value={this.state.genderVal} onChange={this.onGenderChange} required>
                                        <option value=''>Choose...</option>
                                        <option value="ma">Male</option>
                                        <option value="fe">Female</option>
                                        <option value="ot">Other</option>

                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <div style={{ paddingLeft: "27%"}}>
                                <Button variant="primary" type="submit">
                                    Register
                                </Button>
                            </div>
                        </Form>
                    </Container>
                </Col>
            </div>);
    }
}

export default Register;