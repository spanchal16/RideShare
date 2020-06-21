import React, { Component } from 'react';  
import Login from './login'
import Register from './register'
import Description from './description'
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import './events.css'

class LoginAndReg extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                
                <Login />
                
                <Row style={{width:"100%"}}>
                    <Col >
                        <Description />
                    </Col>
                    <Col >
                        <Register />
                    </Col>
                    
                </Row>
            </div>
        );
    }
}
 
export default LoginAndReg;