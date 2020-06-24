import React, { Component } from 'react';
import MediaQuery from 'react-responsive'
import { Navbar, Nav } from "react-bootstrap";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import './events.css';
import logo from '../images/logo.png'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoggedIn: false,
            isInvalidCred:false
        }
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        const { username, password } = this.state;

        if (username.length > 0 && password.length > 0) {
            sessionStorage.setItem( "username", username );
            this.setState({ isLoggedIn: true, isInvalidCred: false });
        }
        else {
            this.setState({isInvalidCred:true})
        }
    }

    onFieldChange = (event) => {
        let usr = event.target.name;
        let val = event.target.value;
        this.setState({ [usr]: val });
    }

    render() {
        if (this.state.isLoggedIn) {
            return <Redirect to="/home"/>
        }

        let errMsg = this.state.isInvalidCred ? <span style={{ fontStyle: "italic", color:"#dc3545" }}><span style={{fontWeight:"bold"}}>Invalid username or password</span></span> : null;
        return (
            <Navbar className="navbg">
                <Col >
                    <Navbar.Brand href="login">
                        <img src={logo} alt="logo" style={{ height: "135px" }} />
                        <MediaQuery  maxWidth="690px" >
                            {(matches) =>
                                matches
                                    ? null
                                    : <strong style={{ fontFamily: "unset", fontSize: "xxx-large" }}>RideShare</strong>
                            }
                        </MediaQuery>
                    </Navbar.Brand>
                </Col>
                <Col >
                    <Form onSubmit={this.mySubmitHandler} className="loginForm">
                        <Form.Group as={Row} controlId="usr">
                            <Form.Label column sm="3.5" className="loginLabel" style={{ color: "white" }}>Username:</Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" placeholder=""
                                              name="username"
                                              value={this.state.username}
                                              onChange={this.onFieldChange}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="pwd">
                            <Form.Label column sm="3.5" className="loginLabel" style={{ color: "white" }}>Password:</Form.Label>
                            <Col sm="5">
                                <Form.Control type="password" placeholder=""
                                              name="password"
                                              value={this.state.password}
                                              onChange={this.onFieldChange}
                                />
                                {errMsg}
                            </Col>
                        </Form.Group>
                        <div style={{ paddingLeft: "27%" }}>
                            <Row>
                                <Col sm="2">

                                    <Button variant="primary" type="submit">
                                        Login
                                    </Button>
                                </Col>
                                <Col>
                                    <a href="/forgotpassword">Forgot Password?</a>
                                </Col>
                            </Row>
                        </div>
                    </Form>
                </Col>
            </Navbar>
        );
    }
}

export default Login;
