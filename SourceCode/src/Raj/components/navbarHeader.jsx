import React, { Component } from 'react';
import { Nav,Button,Row,Col,Navbar } from "react-bootstrap";
import { Redirect, NavLink } from "react-router-dom";
import logo from '../images/logo.png'

class NavbarHeader extends Component {
    constructor(props) {
        super(props);

        let isLoggedin = true;
        const username = sessionStorage.getItem("username");
        if (username == null) {
            isLoggedin = false;
        }

        this.state = {
            isLoggedin,
            username,
            isLogoutClicked: false
        }
        
    }

    onButtonClick = () => {
        if (this.state.isLoggedin) {
            sessionStorage.clear();
            this.setState({ isLoggedin: false,isLogoutClicked: true  })
        }
        else {
            this.setState({ isLoggedin: false,isLogoutClicked: true  })
        }
        
    }

    render() { 
        
        const signinText = this.state.isLoggedin ?
            <div style={{color:"white",fontSize:"15px"}}>Signed in as: <a style={{color:"white",fontSize:"20px"}} href="createevent">{this.state.username}</a></div> : null;
        
        const buttonText = this.state.isLoggedin ?
            "Logout" : "Login/Register";
        
        if (this.state.isLogoutClicked) {
            return <Redirect to="/login"/>
        }
        
        return (
            <div>
                
                <Navbar className="navbg">
                    <Row style={{ width: "100%" }} md={3} sm={2} xs={1}>
                        <Col lg={1}>
                            <Navbar.Brand href="home">
                                <img src={logo} alt="logo" style={{ height: "35px" }} />
                                <strong style={{ fontFamily: "unset", fontSize: "medium" }}>EventGo</strong>
                            </Navbar.Brand>
                        </Col>
                        <Col lg={7} >
                            <Nav className="mr-auto" variant="pills" >
                        
                                {/* <NavLink href="home" style={{color:"white"}} activeClassName="active">Home</NavLink> */}
                                <NavLink exact activeClassName="nav-link active" className="nav-link" to="/home" style={{ color: "white" }}>
                                    Home
                        </NavLink>
                                <NavLink exact activeClassName="nav-link active" className="nav-link" to="/createevent" style={{ color: "white" }}>
                                    CreateEvent
                        </NavLink>
                                <NavLink exact activeClassName="nav-link active" className="nav-link" to="/findevent" style={{ color: "white" }}>
                                    FindEvent
                        </NavLink>
                                {/* <Nav.Link href="createevent" style={{ color: "white" }}>CreateEvent</Nav.Link>
                        <Nav.Link href="findevent" style={{ color: "white" }}>FindEvent</Nav.Link> */}
                        
                            </Nav>
                        </Col>
                        
                        
                        
                        {/* className="justify-content-lg-end" */}
                        
                        <Col lg={2}  >
                            <Navbar.Text >
                                {signinText}
                            </Navbar.Text>
                        </Col>
                        <Col lg={2} >
                            <Button variant="primary" type="submit" onClick={this.onButtonClick} style={{ backgroundColor: "transparent" }}>
                                {buttonText}
                            </Button>
                        </Col>
                    </Row>
                            
                </Navbar>
                
            </div>
        );
    }
}
 
export default NavbarHeader;