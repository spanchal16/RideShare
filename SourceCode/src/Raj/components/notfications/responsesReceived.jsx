//@Author - RajKumar B00849566
/* @Author - Jigar Makwana B00842568 */

import React, { Component } from 'react';
import ResponseMainCard from './responseMainCard'
import axios from 'axios';
import "../events.css";
import Loader from '../loader'
import Cookies from "js-cookie";

class ResponsesReceived extends Component {
    constructor(props) {
        super(props);
        const userId = Cookies.get("userId");
        this.state = {
            userId,
            loader: false,
            eventDetails: []
         }
    }

    //GET all the responses in the notifications screen
    async componentDidMount() {
        this.setState({ loader: true });
        //https://eventgoapi.herokuapp.com/requestsreceived/getresponses/
        //http://localhost:8080/requestsreceived/getresponses/
        await axios.get(`https://eventgoapi.herokuapp.com/requestsreceived/getresponses/`+this.state.userId)
            .then(res => {
                const data = res.data;
                // console.log(data.requests.length); //2
                // console.log(data.requests[0].eventid);
                this.setState({ loader: false, eventDetails: data.requests });
            }).catch(err =>  {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <h4 style={{textAlign: "center"}}>Responses received for requested Rides</h4>
                <br/>
                {this.state.eventDetails.map(item =>
                    <ResponseMainCard
                        key={item.eventDetailId}
                        eventDetail = {item}
                    />)}
            </div>
         );
    }
}

export default ResponsesReceived;
