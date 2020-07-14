import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CreateEvent from "./createevent";
import SortAndSearch from "./sortAndSearch";
import PostEventHistory from "./posteventhist";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import Cookies from "js-cookie";
import "./events.css"; 
import Loader from './loader'
import { storage } from '../firebase';

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
      loader: false,
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
      imageError: '',
      imagePreviewUrl1: '',
      imagePreviewUrl2: '',
      files: [],
      imageurls:[],
      eventHistoryToDisplay: [],
      eventHistory: [],
    };
  }

  async componentDidMount() {
    this.setState({ loader: true });
    //https://eventgoapi.herokuapp.com/createevent/getHistory/1
    //http://localhost:8080/createevent/getHistory/1/
    await axios.get(`https://eventgoapi.herokuapp.com/createevent/getHistory/1`)
    .then(res => {
        
      const data = res.data;
      //console.log(data);
      this.state.eventHistory.push(data);
      this.setState({loader: false,eventHistory:this.state.eventHistory[0],eventHistoryToDisplay:this.state.eventHistory[0]})
    }).catch(err =>  {
        console.log(err);
        //this.setState({ data:"error" });
    })
  };

  
  uploadImages = () => {
    //event.preventDefault();
    let urls = [];
    let counter = -1;
    this.setState({ imageurls: [] })
    let { files } = this.state;
    return new Promise((resolve, reject) => {
      if (files.length > 0) {  
        files.forEach((file, index) => {

          storage.ref(`images/${file.name}`).put(file).on(
            "state_changed",
            snapshot => { },
            error => {
              console.log(error)
            },
            () => {
              storage
                .ref("images")
                .child(file.name)
                .getDownloadURL().then(url => {
                  //console.log(url)
                  urls.push(url)
                  counter = counter + 1;
                  if (counter == files.length - 1) {
                    resolve(urls)
                  }
                })
            }
          )
        });
    
      }
      else {
        if (this.state.isUpdate) {
          if (this.state.imageurl1 != null) {
            urls.push(this.state.imageurl1)
          }
          if (this.state.imageurl2 != null) {
            urls.push(this.state.imageurl2)
          }
          resolve(urls);
        }
        resolve(urls);
      }
    })
  };

  mySubmitHandler = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      this.setState({ isValidated: true });
      event.stopPropagation();
    } else {
      this.uploadImages()
        .then(async (imageurls) => {
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
              imageurls: imageurls
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
                      item.imageurl1 = imageurls.length > 0 ? imageurls[0] : null;
                      item.imageurl2 = imageurls.length > 1 ? imageurls[1] : null;
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
                  imagePreviewUrl1: "",
                  imagePreviewUrl2: "",
                  files: [],
                  imageurls:[]
                });
                document.getElementById("imgupload").value = null;
                
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
              imageurls: imageurls
            };
            //push to API
            //https://eventgoapi.herokuapp.com/createevent/postEvent/1
            //http://localhost:8080/createevent/postEvent/1
            await axios.post(`https://eventgoapi.herokuapp.com/createevent/postEvent/1`, { newItem })
              .then(res => {
                
                const data = res.data;
                
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
                  imagePreviewUrl1: "",
                  imagePreviewUrl2: "",
                  files: [],
                  imageurls:[]
                });
                document.getElementById("imgupload").value = null;
                
              }).catch(err => {
                console.log(err);
              })   
          }
      });
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
      imageurl1,
      imageurl2
      
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
      imagePreviewUrl1: imageurl1,
      imagePreviewUrl2:imageurl2
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

  handleImgFiles = e => {
    if (e.target.files.length > 2) {
      e.preventDefault();
      this.setState({ imageError: 'Only two images allowed..' })
    } else {
      let reader1 = new FileReader();
      let file1 = e.target.files[0];
      this.state.files.push(file1);
      reader1.onloadend = () => {
        this.setState({
          imagePreviewUrl1: reader1.result,imageError:''
        });
      }
      reader1.readAsDataURL(file1)

      if (e.target.files.length > 1) {
        let reader2 = new FileReader();
        let file2 = e.target.files[1];
        this.state.files.push(file2);
        reader2.onloadend = () => {
          this.setState({
            imagePreviewUrl2: reader2.result
          });
        }
        reader2.readAsDataURL(file2)
      }
    }
  };

  onClearImgBtnClick = e => {
    e.preventDefault();
    this.setState({
      imageError: '',
      imagePreviewUrl1: '',
      imagePreviewUrl2: '',
      files: [],
      imageurls: []
    });
    document.getElementById("imgupload").value = null;
  }

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
                handleImgFiles={this.handleImgFiles}
                onClearImgBtnClick={this.onClearImgBtnClick}
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
                imageError={this.state.imageError}
                imagePreviewUrl1={this.state.imagePreviewUrl1}
                imagePreviewUrl2={this.state.imagePreviewUrl2}
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
              {this.state.loader ? <Loader/> : this.renderPostEventHistory()}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CreateEventContainer;
