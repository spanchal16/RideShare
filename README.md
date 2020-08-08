# Assignment 4

The EventGo web application is a platform to connect various travellers or tourists travelling from a common point of origin to the same destination. Users can post their travelling plans through this application, and interested users can join their trip.
For the scope of this project, I only include carpooling feature. 

* ### Feature 1: Create Event (https://csci5709webgroup20.herokuapp.com/createevent)
	1) User have to Login to access this screen.
	2) This screen consists of two sections, create event form component and history of events component.
	3) Currently supported events-> car journey.
	4) Event type, From and To fields are mandatory.
	5) Users can upload images (atmost 2) and can clear(delete) uploaded images.
	6) Images are uploaded to the Google Firebase
	7) Once the event is created, it is shown in the history of events component.
	8) User can also view this event in the Notifications screen under 'Requests received for created Rides' (https://csci5709webgroup20.herokuapp.com/home)
	9) Created events can be edited by clicking on particular event from the history of events component.
	10) Users can also delete a particular event by clicking on 'X' on the event from the history of events component.


* ### Feature 2: Find Event (https://csci5709webgroup20.herokuapp.com/findevent)
	1) User have to Login to access this screen.
	2) Find event screen consists of two sections, search form component and results component.
	3) Currently supported events-> car journey.
	4) No field is manadotary, user have to provide atleast one field to search for an event.
	5) System retuns all the matched events in the results component.
	6) On click on the results, users are navigated to the 'Booking Details' Screen where users can request for a ride. (					https://csci5709webgroup20.herokuapp.com/bookingdetails)
	

* ### Feature 3: Search and Sort (https://csci5709webgroup20.herokuapp.com/createevent | https://csci5709webgroup20.herokuapp.com/findevent)
	1) This feature is available on Create event and Find event screens.
	2) Users can search and Sort the created events or Found results.
	3) Records can be searched by: From, TO, Seats, Price and Description. These types are selected from the dropdown.
	4) Users can provide search string that is corresponding to the type selected from the dropdown.
	5) Sorting is based on: Event added(date when event is added), From, To , Date Of Journey, Seats, Price and Description.

### List of Files
**Frontend https://github.com/JigarMakwana/CSCI5709_Project_Group_20/blob/master/SourceCode/**

1) **src/Raj/components/notfications/requestsReceived.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
2) **src/Raj/components/notfications/requestMainCard.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
3) **src/Raj/components/notfications/responseMainCard.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
4) **src/Raj/components/notfications/responsesReceived.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
5) **src/Raj/components/notfications/subReqDetails.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
6) **src/Raj/components/createevent.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
7) **src/Raj/components/createeventContainer.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
8) **src/Raj/components/description.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
9) **src/Raj/components/errorpage.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
10) **src/Raj/components/events.css** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
11) **src/Raj/components/findeventContainer.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
12) **src/Raj/components/home.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
13) **src/Raj/components/loader.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
14) **src/Raj/components/login.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
15) **src/Raj/components/loginReg.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
16) **src/Raj/components/navbarHeader.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
17) **src/Raj/components/navbarTemplate.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
18) **src/Raj/components/notfications.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
19) **src/Raj/components/posteventhist.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
20) **src/Raj/components/register.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
21) **src/Raj/components/sortAndSearch.jsx** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)

**Backend https://github.com/JigarMakwana/CSCI5709_Project_API_Group20/**
1) **api/controller/createEventController.js** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
2) **api/controller/findEventsController.js** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
3) **api/controller/requestsContoroller.js** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
4) **api/models/DatabaseConn.js** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
5) **api/models/createModel.js** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
6) **api/models/findEventModel.js** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
7) **api/models/requestsModel.js** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
8) **api/routes/createEventRouter.js** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
9) **api/routes/findEventRouter.js** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)
10) **api/routes/requestsRouter.js** - RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)


I have deviated a little from the initially submitted wireframes; this is due to the finding of better UI components while developing the application and also to provide a better User experience. 


* Date Created: 19 07 2020
* Last Modification Date: 22 07 2020

## Authors

* RajKumar Reddy Gangi(rj675423@dal.ca) - (Developer)

### Prerequisites

*[Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
*[Express](https://expressjs.com/) - Server to connect to the React app
*[Axios](https://www.npmjs.com/package/axios) - Http interface to work with XMLHttpRequest.
*[Bootstrap](https://getbootstrap.com/) - An HTML, CSS and JS framework to build responsive web pages.
*[React Bootstrap](https://www.npmjs.com/package/react-bootstrap) - A frontend framework for React for building responsive web pages.
*[js-cookie] https://www.npmjs.com/package/js-cookie - A simple, lightweight JavaScript API for handling cookies
*[react-responsive] https://www.npmjs.com/package/react-responsive - The best supported, easiest to use react media query module.
*[Firebase] https://firebase.google.com/ - Firebase gives functionality like analytics, databases and messaging.

## Software Installation
To build this web application, Node.js was used along with Express module and React. Following are the steps for the installation of these modules:
### Node.js
Step 1) Visit the official Node.js website ( https://nodejs.org/en/download/ ).

Step 2) The latest stable version can be downloaded for Windows, Mac or Linux.

Step 3) Run the installer.

### Express
Step 1) In order to download and install Express, open the terminal or the poweshell (for VS code), and change the directory such that the present present working directory is the application's directory. For example, cd D:/Tutorial3/ReactApp .

Step 2) Now express module can be installed under the npm-module directory using the following command:
		npm install --save express
    
### React app setup
You may follow the below steps if you want to run this web application locally.

Step 1) Clone the below repository to get the application code on local machine.
		***https://github.com/JigarMakwana/CSCI5709_Tutorials_Group20.git***

#### Cofiguring bootstrap
Step 2) Run the following command to get the React-bootstrap
		***npm install react-bootstrap bootstrap***

#### Cofiguring MediaQuery
Step 3) Run the following command to get the MediaQuery
		***npm install react-responsive --save***

#### Cofiguring react router dom
Step 4) Run the following command to get the React router dom
		***npm install react-router-dom***

#### Cofiguring react date picker
Step 5) Run the following command to get the React date picker
		***npm install react-datepicker --save***
		
Step 6) Run the following command
		***npm start***


## Running the tests
Step 1) Open the web browser from desktop or mobile.

Step 2) Open the link of the deployed application provided under the deployment section in this document. Alternativly, you can run the application locally as described in the previous section.

### Test Cases Create Event
1) Input validation for the fields in the Form.
2) Inputs with various lengths.
3) Description Field with more than 100 letters.
4) Delete created event.
5) Edit Created event.
6) Image Upload/Edit and Delete.
7) Upload files with different formats other than images.

### Test Cases Find Event
1) Input validation for the fields in the Form.
2) Inputs with various lengths.
3) Description Field with more than 100 letters.
4) Give search that dont return any results.
5) remove the search results.
6) Navigate to Request screen by clicking on the search result.

### Test Cases Search and Sort
1) Search/Sort with no records.
2) Search/Sort with one record.
3) Search/Sort with multiple records.
4) Search with improper text.
5) Search with proper text.
6) remove search word after getting results.


## Deployment
**Link to the Frontend repository:** ***https://github.com/JigarMakwana/CSCI5709_Project_Group_20/tree/master/SourceCode***

**Link to the API repository:** ***https://github.com/JigarMakwana/CSCI5709_Project_API_Group20***

**Link to the deployed application:** ***https://csci5709webgroup20.herokuapp.com/***



## Sources Used
### requestMainCard.jsx
Lines 12 - 39
---------------

```
	<Accordion>
            <Card border="secondary" >
                <Card.Header style={{padding:"0"}}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                          From <strong>{this.props.eventDetail.fromAddress}</strong> to <strong>{this.props.eventDetail.toAddress}</strong> on <strong>				{this.props.eventDetail.dateToDisplay}</strong> Seats available: <strong>{this.props.eventDetail.seats} </strong>
                            Estimated price: <strong>$ {this.props.eventDetail.estPrice} </strong>
                            Description: <strong>{this.props.eventDetail.description}</strong>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {this.props.eventDetail.requests.map(item => <SubReqDetails
                                key={item.requestId}
                            />)}
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Footer className="justify-content-end">
                    <Row>
                        <Col>
                            <small className="text-muted"> {this.props.eventDetail.requests.length} Requests for this event</small>
                        </Col>
                        <Col>
                            <small className="text-muted">updated 3 days ago</small>
                        </Col>
                    </Row>
                </Card.Footer>
                </Card>
            </Accordion> 

```

The code above was created by adapting the code in [React Accordian](https://react-bootstrap.github.io/components/accordion/) as shown below: 

```
<Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

```

- [How] The code in [React Accordian](https://react-bootstrap.github.io/components/accordion/) was implemented by React Bootstrap
- [Why] [React Accordian](https://react-bootstrap.github.io/components/accordion/) Code was used because to provide expand/collapse feature for the cards to show and 	hide multiple requests.
- [How] [React Accordian](https://react-bootstrap.github.io/components/accordion/) Code was modified by RajKumar



### createevent.jsx

Lines 162- 167
---------------

```
<DatePicker className="calenderpicker form-control"
   value={this.props.journeyDate}
   name="journeyDate"
   selected={this.props.journeyDate}
   onChange={this.props.handleDateChange}
   />

```

The code above was created by adapting the code in [HackerOne Inc](https://www.npmjs.com/package/react-datepicker/v/2.9.6) as shown below: 

```
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
class Example extends React.Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

```

- [How] The code in [HackerOne Inc](https://www.npmjs.com/package/react-datepicker/v/2.9.6) was implemented by HackerOne Inc.
- [Why] [React Accordian](https://react-bootstrap.github.io/components/accordion/) Code was used because to provide datepicker for creating event.
- [How] [React Accordian](https://react-bootstrap.github.io/components/accordion/) Code was modified by RajKumar

### navbarheader.jsx

Lines 47- 90
---------------

```
<Navbar className="navbg">
                    <Row style={{ width: "100%" }} md={3} sm={2} xs={1}>
                        <Col lg={1}>
                            <Navbar.Brand href="home">
                                <img src={logo} alt="logo" style={{ height: "35px" }} />
                                <strong style={{ fontFamily: "unset", fontSize: "medium" }}>EventGo</strong>
                            </Navbar.Brand>
                        </Col>
                        <Col lg={7} >
                            <Nav className="mr-auto" variant="pills" >
                        
                                {/* <NavLink href="home" style={{color:"white"}} activeClassName="active">Home</NavLink> */}
                                <NavLink exact activeClassName="nav-link active" className="nav-link" to="/home" style={{ color: "white" }}>
                                    Home
                        </NavLink>
                                <NavLink exact activeClassName="nav-link active" className="nav-link" to="/createevent" style={{ color: "white" }}>
                                    CreateEvent
                        </NavLink>
                                <NavLink exact activeClassName="nav-link active" className="nav-link" to="/findevent" style={{ color: "white" }}>
                                    FindEvent
                        </NavLink>
                                {/* <Nav.Link href="createevent" style={{ color: "white" }}>CreateEvent</Nav.Link>
                        <Nav.Link href="findevent" style={{ color: "white" }}>FindEvent</Nav.Link> */}
                        
                            </Nav>
                        </Col>
                        
                        
                        
                        {/* className="justify-content-lg-end" */}
                        
                        <Col lg={2}  >
                            <Navbar.Text >
                                {signinText}
                            </Navbar.Text>
                        </Col>
                        <Col lg={2} >
                            <Button variant="primary" type="submit" onClick={this.onButtonClick} style={{ backgroundColor: "transparent" }}>
                                {buttonText}
                            </Button>
                        </Col>
                    </Row>
                            
                </Navbar>

```

The code above was created by adapting the code in [React bootstrap](https://react-bootstrap.github.io/components/navbar/) as shown below: 

```
 <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>

```

- [How] The code in [React bootstrap](https://react-bootstrap.github.io/components/navbar/) was implemented by React Bootstrap.
- [Why] [React bootstrap](https://react-bootstrap.github.io/components/navbar/) Code was used because to provide Navbar for the application with various links.
- [How] [React bootstrap](https://react-bootstrap.github.io/components/navbar/) Code was modified by RajKumar



## Acknowledgments

* Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
* React-bootstrap.github.io, 2020. [Online]. Available: https://react-bootstrap.github.io/components/navbar/. [Accessed: 14- Jun- 2020].
* "react-datepicker", npm, 2020. [Online]. Available: https://www.npmjs.com/package/react-datepicker/v/2.9.6. [Accessed: 14- Jun- 2020].
* React-bootstrap.github.io, 2020. [Online]. Available: https://react-bootstrap.github.io/components/accordion/. [Accessed: 14- Jun- 2020].
