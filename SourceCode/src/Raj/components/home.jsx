import React, { Component } from 'react';
import RequestsReceived from './notfications/requestsReceived'
import ResponsesReceived from './notfications/responsesReceived'
import { Col, Container, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        let isLoggedin = true;
        const username = sessionStorage.getItem("username");
        if (username == null) {
            isLoggedin = false;
        }
        this.state = { 
            isLoggedin
         }
    } 

    render() { 
        if (!this.state.isLoggedin) {
            return <Redirect to="/login"/>
        }
        return (<div>
            <Container>
            <br/>
                <Row>
                    <Col>
                        <RequestsReceived />
                    </Col>
                    <Col>
                        <ResponsesReceived />
                    </Col>
                </Row>
            </Container>
        </div>);
    }
}
 
export default Home;