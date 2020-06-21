import React, { Component } from 'react';
import { Form, Button, InputGroup, Col,Row } from "react-bootstrap";

class SortAndSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const myStyle = {
            width: "100%",
            height:"100%",
            backgroundColor: "#c3c6d8",
            borderRadius:"7px"
            
        }
        const header = this.props.isCreate ? 'Events History' : 'Search Results'
        return (<div style={myStyle}>
            <Col>
                <Row>
                    <Col>
                        <h3>{header}</h3>
                    </Col>
                </Row>
                <Row>
                    
                    
                    
                    <Col>
                        <Form.Group controlId="eventId">
                            <Form.Label>Search by:</Form.Label>
                            <Form.Control as="select" value={this.props.searchBy} name="searchBy" onChange={this.props.onSearchByChange}>
                                <option value="fromAddress">From</option>
                                <option value="toAddress">To</option>
                                <option value="seats">Seats</option>
                                <option value="estPrice">Price</option>
                                <option value="description">Description</option>
                    

                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="search">
                            <Form.Label>Search:</Form.Label>
                            <Form.Control type="text" placeholder="Search.."
                                value={this.props.searchTerm}
                                name="searchTerm"
                                onChange={this.props.onSearchTermChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="searchById">
                            <Form.Label>Sort by:</Form.Label>
                            <Form.Control as="select" value={this.props.sortyBy} name="sorthBy" onChange={this.props.onSortByChange}>
                                <option value="id">Event added</option>
                                <option value="fromAddress">From</option>
                                <option value="toAddress">To</option>
                                <option value="journeyDate">Date of Journey</option>
                                <option value="seats">Seats</option>
                                <option value="estPrice">Price</option>
                                <option value="description">Description</option>
                    

                            </Form.Control>
                        </Form.Group>
                    </Col>
                
                </Row>
            </Col>
        </div>);
    }
}
 
export default SortAndSearch;