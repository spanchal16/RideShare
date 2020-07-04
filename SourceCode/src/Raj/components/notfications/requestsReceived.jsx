import React, { Component } from 'react';
import ReqMainCard from './requestMainCard'
import axios from 'axios';


class RequestsReceived extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            eventDetails:[]
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
            this.setState({ eventDetails: data.events });
        }).catch(err =>  {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <h4 style={{textAlign: "center"}}>Requests received for created Rides</h4>
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
