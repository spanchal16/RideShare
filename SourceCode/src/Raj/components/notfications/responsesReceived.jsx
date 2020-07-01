import React, { Component } from 'react';
import ResponseMainCard from './responseMainCard'

class ResponsesReceived extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            eventDetails: [
                {
                    eventDetailId: 1, fromAddress: "Halifax", toAddress: "Moncton", dateToDisplay: "07/02/2020", seats: 4, estPrice: 200, description: "sample desc",status:0
                },

                {
                    eventDetailId: 2, fromAddress: "Moncton", toAddress: "Halifax", dateToDisplay: "07/12/2020", seats: 1, estPrice: 250, description: "sample desc",status:1
                },

                {
                    eventDetailId: 3, fromAddress: "Moncton", toAddress: "Quebic", dateToDisplay: "07/12/2020", seats: 1, estPrice: 250, description: "sample desc",status:-1
                }
            ]
         }
    }
    render() { 
        return ( 
            <div>
                <h5>Responses received for requested events</h5>
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