import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CreateEvent from "./createevent";
import SortAndSearch from "./sortAndSearch";
import PostEventHistory from "./posteventhist";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import Cookies from "js-cookie";

class CreateEventContainer extends Component {
  constructor(props) {
    super(props);
    let isLoggedin = true;
    //const username = sessionStorage.getItem("username");
    const username = Cookies.get("username")
    if (username == null) {
      isLoggedin = false;
    }
    this.state = {
      isLoggedin,
      eventTypeVal: "",
      fromAddress: "",
      toAddress: "",
      seats: 0,
      journeyDate: "",
      dateToDisplay: "",
      estPrice: 0,
      description: "",
      eventId: 0,
      isUpdate: false,
      updateItemId: 0,
      searchTerm: "",
      searchBy: "fromAddress",
      isValidated: false,
      sortyBy: "id",
      eventHistoryToDisplay: [],
      eventHistory: [],
    };
  }

  async componentDidMount() {
    //https://eventgoapi.herokuapp.com/createevent/getHistory/1
    //http://localhost:8080/createevent/getHistory/1/
    await axios.get(`https://eventgoapi.herokuapp.com/createevent/getHistory/1`)
    .then(res => {
        
      const data = res.data;
      //console.log(data);
      this.state.eventHistory.push(data);
      this.setState({eventHistory:this.state.eventHistory[0],eventHistoryToDisplay:this.state.eventHistory[0]})
    }).catch(err =>  {
        console.log(err);
        //this.setState({ data:"error" });
    })
}
    
  mySubmitHandler = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      this.setState({ isValidated: true });
      event.stopPropagation();
    } else {
      if (this.state.isUpdate) {

        let updatedItem = {
          eventid: this.state.updateItemId,
          eventTypeVal: this.state.eventTypeVal,
          fromAddress: this.state.fromAddress,
          toAddress: this.state.toAddress,
          seats: this.state.seats,
          estPrice: this.state.estPrice,
          dateToDisplay: this.state.dateToDisplay,
          journeyDate: this.state.journeyDate,
          description: this.state.description,
        };

        //put to API
        //https://eventgoapi.herokuapp.com/createevent/updateEvent/1
        //http://localhost:8080/createevent/updateEvent/1
        await axios.put(`https://eventgoapi.herokuapp.com/createevent/updateEvent/1`, { updatedItem })
          .then(res => {
            const { eventHistory } = this.state;
            if (res.data) {
              eventHistory.map((item) => {
                if (item.eventid === this.state.updateItemId) {
                  item.eventTypeVal = this.state.eventTypeVal;
                  item.fromAddress = this.state.fromAddress;
                  item.toAddress = this.state.toAddress;
                  item.seats = this.state.seats;
                  item.estPrice = this.state.estPrice;
                  item.doj = this.state.dateToDisplay;
                  item.description = this.state.description;
                }
              });
            }
            
            this.setState({
              eventHistory: eventHistory,
              eventHistoryToDisplay: eventHistory,
              eventTypeVal: "",
              fromAddress: "",
              toAddress: "",
              seats: 0,
              journeyDate: "",
              dateToDisplay: "",
              estPrice: 0,
              description: "",
              isUpdate: false,
              isValidated: false,
            });
            
          }).catch(err => {
            console.log(err);
            //this.setState({ data:"error" });
          })

        
      } else {
        
        let newItem = {
          eventTypeVal: this.state.eventTypeVal,
          fromAddress: this.state.fromAddress,
          toAddress: this.state.toAddress,
          seats: this.state.seats,
          estPrice: this.state.estPrice,
          dateToDisplay: this.state.dateToDisplay,
          journeyDate: this.state.journeyDate,
          description: this.state.description,
        };

        //push to API
        //https://eventgoapi.herokuapp.com/createevent/postEvent/1
        //http://localhost:8080/createevent/postEvent/1
        await axios.post(`https://eventgoapi.herokuapp.com/createevent/postEvent/1`, { newItem })
          .then(res => {
            
            const data = res.data;
            //console.log(data)
            
            this.setState({
              eventHistory: data,
              eventHistoryToDisplay: data,
              eventTypeVal: "",
              fromAddress: "",
              toAddress: "",
              seats: 0,
              journeyDate: "",
              dateToDisplay: "",
              estPrice: 0,
              description: "",
              isUpdate: false,
              isValidated: false,
            });
            
          }).catch(err => {
            console.log(err);
            //this.setState({ data:"error" });
          })
        
      }

      
    }
  };

  onFromToEnter = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onNumInputChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (value >= 0) {
      this.setState({ [name]: value });
    }
  };

  onDescriptionEnter = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (value.length <= 100) {
      this.setState({ [name]: value });
    }
  };

  onEventddChange = (event) => {
    this.setState({ eventTypeVal: event.target.value });
  };

  handleDateChange = (date) => {
    //console.log(date);
    let dateString = "";
    if (date != null) {
      let x = date.toString().split(" ");
      let mArr = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let index = mArr.indexOf(x[1]) + 1;
      index =
        index.toString().length === 1
          ? "0" + index.toString()
          : index.toString();
      dateString = index + "/" + x[2] + "/" + x[3];
    }
    this.setState({
      journeyDate: date,
      dateToDisplay: dateString,
    });
  };

  onPostedEvetClicked = (history) => {
    //console.log(history)
    const {
      eventid,
      eventTypeVal,
      fromAddress,
      toAddress,
      seats,
      estPrice,
      doj,
      description,
    } = history;
    let dateToDisplay1 =
      doj == undefined || doj.length == 0
        ? ""
        : new Date(doj);

    this.setState({
      eventTypeVal: eventTypeVal,
      fromAddress: fromAddress,
      toAddress: toAddress,
      seats: seats,
      estPrice: estPrice,
      dateToDisplay: doj,
      journeyDate: dateToDisplay1,
      description: description,
      isUpdate: true,
      updateItemId: eventid,
    });
  };

  onSearchTermChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
    const searchBy = this.state.searchBy;
    let filteredEventHistory = "";
    if (value.length > 0) {
      filteredEventHistory = this.state.eventHistory.filter(
        (item) =>
          item[searchBy]
            .toString()
            .toLowerCase()
            .indexOf(value.toString().toLowerCase()) != -1
      );
    } else {
      filteredEventHistory = this.state.eventHistory;
    }
    this.setState({ eventHistoryToDisplay: filteredEventHistory });
  };

  onSearchByChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onSortByChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
    let { eventHistoryToDisplay } = this.state;
    eventHistoryToDisplay.sort((a, b) => (a[value] > b[value] ? 1 : -1));
    this.setState({ eventHistoryToDisplay: eventHistoryToDisplay });
  };

  onDeleteEvetClicked = async (history) => {
    let { eventHistory } = this.state;
    //put to API
    //https://eventgoapi.herokuapp.com/createevent/deleteevent/1/
    //http://localhost:8080/createevent/deleteevent/1/
    await axios.delete(`https://eventgoapi.herokuapp.com/createevent/deleteevent/1/` + history.eventid)
      .then(res => {
        if (res.data) {
          let filteredevents = eventHistory.filter((item) => item.eventid != history.eventid);
          this.setState({
            eventHistory: filteredevents,
            eventHistoryToDisplay: filteredevents,
          });
        }
      }).catch(err => {
        console.log(err);
        //this.setState({ data:"error" });
      })
  };

  renderPostEventHistory = () => {
    return this.state.eventHistoryToDisplay.length > 0 ? (
      this.state.eventHistoryToDisplay.map((item) => (
        <PostEventHistory
          key={item.eventid}
          eventHistory={item}
          onPostedEvetClicked={this.onPostedEvetClicked}
          onDeleteEvetClicked={this.onDeleteEvetClicked}
        />
      ))
    ) : (
      <div>No items to display</div>
    );
  };

  render() {
    if (!this.state.isLoggedin) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="pb-5">
        <Container>
          <Row>
            <Col>
              <CreateEvent
                mySubmitHandler={this.mySubmitHandler}
                onFromToEnter={this.onFromToEnter}
                onNumInputChange={this.onNumInputChange}
                onEventddChange={this.onEventddChange}
                handleDateChange={this.handleDateChange}
                onDescriptionEnter={this.onDescriptionEnter}
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
              <br />
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
      </div>
    );
  }
}

export default CreateEventContainer;
