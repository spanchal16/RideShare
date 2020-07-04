import React, { Component } from 'react';
import ReqMainCard from './requestMainCard'
import axios from 'axios';
import "../events.css"; 
import Loader from '../loader'


class RequestsReceived extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            eventDetails:[]
         }
    }

    async componentDidMount() {
        this.setState({ loader: true });
        //https://eventgoapi.herokuapp.com/requestsreceived/getrequests/1
        //http://localhost:8080/requestsreceived/getrequests/1
        await axios.get(`https://eventgoapi.herokuapp.com/requestsreceived/getrequests/1`)
        .then(res => {

            const data = res.data;

            //console.log(data);
            data.events.forEach(function (item, index) {
                item.requests = [];
                //console.log(item, index);
                let e = data.requests.filter((request) => request.eventid == item.eventid);
                console.log(e);
                item.requests = item.requests.concat(e)

            })
            console.log(data.events);
            this.setState({ loader: false, eventDetails: data.events });
        }).catch(err =>  {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <h4 style={{ textAlign: "center" }}>Requests received for created Rides</h4>
                <br />
                {this.state.loader ? <Loader /> : this.state.eventDetails.map(item =>
                    <ReqMainCard
                        key={item.eventid}
                        eventDetail={item}
                    />)}
                

            </div>
        );
    }
}

export default RequestsReceived;
