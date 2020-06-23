import React, { Component } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import CreateEvent from './createevent';
import SortAndSearch from './sortAndSearch'
import PostEventHistory from './posteventhist'
import { Redirect } from "react-router-dom";

class CreateEventContainer extends Component {
    constructor(props) {
        super(props);
        let isLoggedin = true;
        const username = sessionStorage.getItem("username");
        if (username == null) {
            isLoggedin = false;
        }
        this.state = {
            isLoggedin,
            eventTypeVal: '',
            fromAddress: '',
            toAddress: '',
            seats: 0,
            journeyDate: '',
            dateToDisplay: '',
            estPrice: 0,
            description: '',
            eventId: 0,
            isUpdate: false,
            updateItemId: 0,
            searchTerm: '',
            searchBy: 'fromAddress',
            isValidated: false,
            sortyBy:'id',
            eventHistoryToDisplay: [
                { id: 7, eventTypeVal: 'fj', fromAddress: 'Halifax', toAddress: 'India',dateToDisplay:"07/23/2020", seats: 2, estPrice: 100, description: 'Hello' }
            ],
            eventHistory: [{ id: 7, eventTypeVal: 'fj', fromAddress: 'Halifax', toAddress: 'India',dateToDisplay:"07/23/2020", seats: 2, estPrice: 100, description: 'Hello' }]
        }
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        console.log(form.checkValidity())
        if (form.checkValidity() === false) {
            this.setState({isValidated: true})
            event.stopPropagation();
            
        }

        else {
            if (this.state.isUpdate) {
                const { eventHistory, updateItemId } = this.state;
                console.log(updateItemId)
                eventHistory.map(item => {
                    if (item.id === this.state.updateItemId) {
                        item.eventTypeVal = this.state.eventTypeVal;
                        item.fromAddress = this.state.fromAddress;
                        item.toAddress = this.state.toAddress;
                        item.seats = this.state.seats;
                        item.estPrice = this.state.estPrice;
                        item.dateToDisplay = this.state.dateToDisplay;
                        item.description = this.state.description;
                    }
                });

            }
            else {
                let id = this.state.eventId + 1;

                this.setState({ eventId: id })
                let newItem1 = {
                    id: this.state.eventId,
                    eventTypeVal: this.state.eventTypeVal,
                    fromAddress: this.state.fromAddress,
                    toAddress: this.state.toAddress,
                    seats: this.state.seats,
                    estPrice: this.state.estPrice,
                    dateToDisplay: this.state.dateToDisplay,
                    description: this.state.description
                };
        
                this.state.eventHistory.push(newItem1);

            }
        
            this.setState({
                eventHistory: this.state.eventHistory,
                eventHistoryToDisplay: this.state.eventHistory,
                eventTypeVal: '',
                fromAddress: '',
                toAddress: '',
                seats: 0,
                journeyDate: '',
                dateToDisplay: '',
                estPrice: 0,
                description: '',
                isUpdate: false,
                isValidated: false
            });
            
        }
        
    }

    onFromToEnter = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    onNumInputChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if (value >= 0) {
            this.setState({ [name]: value });
        }
        
    }

    onDescriptionEnter = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if (value.length <= 100) {
            console.log(value.length)
            this.setState({ [name]: value });
        }
        
    }

    onEventddChange = (event) => {
        this.setState({ eventTypeVal: event.target.value })
        
    }

    

    handleDateChange = date => {
        console.log(date)
        let dateString = "";
        if (date != null) {
            let x = date.toString().split(' ');
            let mArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            let index = mArr.indexOf(x[1]) + 1;
            index = index.toString().length === 1 ? "0" + index.toString() : index.toString();
            dateString = index + "/" + x[2] + "/" + x[3];
        }
            this.setState({
                journeyDate: date,
                dateToDisplay: dateString
            });
        
    };

    onPostedEvetClicked = (history) => {
        console.log(history)
        const { id, eventTypeVal, fromAddress, toAddress, seats, estPrice, dateToDisplay, description } = history;
        let dateToDisplay1 = dateToDisplay == undefined || dateToDisplay.length == 0 ? "" : new Date(dateToDisplay);
        
        this.setState({
            eventTypeVal: eventTypeVal,
            fromAddress: fromAddress,
            toAddress: toAddress,
            seats: seats,
            estPrice: estPrice,
            dateToDisplay: dateToDisplay,
            journeyDate: dateToDisplay1,
            description: description,
            isUpdate: true,
            updateItemId: id
        });
    }

    onSearchTermChange = (event) => {

        console.log(event.target.value)
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
        const searchBy = this.state.searchBy;
        let filteredEventHistory = '';
        if (value.length > 0) {
            filteredEventHistory = this.state.eventHistory.filter(item => item[searchBy].toString().toLowerCase().indexOf(value.toString().toLowerCase()) != -1);
        }
        else {
            filteredEventHistory = this.state.eventHistory;
        }
        console.log(filteredEventHistory)
        this.setState({ eventHistoryToDisplay: filteredEventHistory });
    }

    onSearchByChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    onSortByChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
        let { eventHistoryToDisplay } = this.state
        eventHistoryToDisplay.sort((a, b) => (a[value] > b[value]) ? 1 : -1);
        this.setState({ eventHistoryToDisplay: eventHistoryToDisplay });
    }

    onDeleteEvetClicked = (history) => {
        let { eventHistory } = this.state
        console.log(history.id)
        let filteredevents = eventHistory.filter(item => item.id != history.id);
        this.setState({ eventHistory: filteredevents, eventHistoryToDisplay: filteredevents });
    }

    renderPostEventHistory = () => {
        return (
            this.state.eventHistoryToDisplay.length > 0 ?
                this.state.eventHistoryToDisplay.map(item => <PostEventHistory
                    key={item.id}
                    eventHistory={item}
                    onPostedEvetClicked={this.onPostedEvetClicked}
                    onDeleteEvetClicked={this.onDeleteEvetClicked} />) :
                <div>No items to display</div>);
    };

    render() { 
        if (!this.state.isLoggedin) {
            return <Redirect to="/login"/>
        }
        return (<div >
            <Container>
                <Row>
                    <Col>
                        <CreateEvent
                            mySubmitHandler={this.mySubmitHandler}
                            onFromToEnter={this.onFromToEnter}
                            onNumInputChange={this.onNumInputChange}
                            onEventddChange={this.onEventddChange}
                            handleDateChange={this.handleDateChange}
                            onDescriptionEnter = {this.onDescriptionEnter}
                            
                            eventTypeVal={this.state.eventTypeVal}
                            fromAddress={this.state.fromAddress}
                            toAddress={this.state.toAddress}
                            seats={this.state.seats}
                            journeyDate={this.state.journeyDate}
                            journeyOnlyDate={this.state.dateToDisplay}
                            estPrice={this.state.estPrice}
                            description={this.state.description}
                            isUpdate={this.state.isUpdate}
                            isValidated={this.state.isValidated}
                            isCreate={true}
                        />
                    </Col>
                    <Col>
                        <br/>
                        <Row>
                            <SortAndSearch
                                onSearchTermChange={this.onSearchTermChange}
                                onSearchByChange={this.onSearchByChange}
                                onSortByChange={this.onSortByChange}
                                searchTerm={this.state.searchTerm}
                                searchBy={this.state.searchBy}
                                sorthBy={this.state.sorthBy}
                                isCreate={true}
                            />  
                        </Row>
                        <Row className="justify-content-center align-items-center">
                            {this.renderPostEventHistory()}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>);
    }
}
 
export default CreateEventContainer;