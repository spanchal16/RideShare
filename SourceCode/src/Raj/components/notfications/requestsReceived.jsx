import React, { Component } from 'react';
import ReqMainCard from './requestMainCard'


class RequestsReceived extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            eventDetails: [
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
    render() { 
        return ( 
            <div>
                <h5>Requests received for posted events</h5>
                {this.state.eventDetails.map(item =>
                    <ReqMainCard
                        key={item.eventDetailId}
                        eventDetail = {item}
                    />)}
                
            </div>
         );
    } 
}
 
export default RequestsReceived;