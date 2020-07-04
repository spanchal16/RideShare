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
                <h5>Requests received for posted events</h5>
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