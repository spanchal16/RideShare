import React, { Component } from 'react';
import ReqMainCard from './requestMainCard'
import axios from 'axios';


class RequestsReceived extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventDetails:[],
            eventDetails1: [
                {
                    eventDetailId: 1, fromAddress: "Halifax", toAddress: "Toronto", dateToDisplay: "07/02/2020", seats: 4, estPrice: 200, description: "sample desc",
                    requests: [
                        { eventDetailId: 1, requestId: 1 },
                        { eventDetailId: 1, requestId: 2 }
                    ]
                },

                {
                    eventDetailId: 2, fromAddress: "Toronto", toAddress: "Quebic", dateToDisplay: "07/12/2020", seats: 1, estPrice: 250, description: "sample desc",
                    requests: [
                        { eventDetailId: 2, requestId: 10 }
                    ]
                },

                {
                    eventDetailId: 3, fromAddress: "Halifax", toAddress: "PEI", dateToDisplay: "09/12/2020", seats: 3, estPrice: 100, description: "car details",
                    requests: [
                        { eventDetailId: 3, requestId: 11 },
                        { eventDetailId: 3, requestId: 12 },
                        { eventDetailId: 3, requestId: 13 }
                    ]
                }
            ]
         }
    }

    async componentDidMount() {
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
          //this.state.eventHistory.push(data);
            this.setState({ eventDetails: data.events });
        }).catch(err =>  {
            console.log(err);
            //this.setState({ data:"error" });
        })
    }

    render() {
        return (
            <div>
                <h5 style={{textAlign: "center"}}>Requests received for posted events</h5>
                <br/>
                {this.state.eventDetails.map(item =>
                    <ReqMainCard
                        key={item.eventid}
                        eventDetail = {item}
                    />)}

            </div>
         );
    }
}

export default RequestsReceived;
