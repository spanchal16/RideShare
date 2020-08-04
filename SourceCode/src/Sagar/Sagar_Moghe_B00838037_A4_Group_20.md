<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->

# Assignemnt 4

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.


* *Date Created*: 25 July 2020
* *Last Modification Date*: 25 July 2020

## Authors

**[Optional]** If what is being submitted is an individual Lab or Assignment, you may simply include your name and email address. Otherwise list the members of your group.

* [Sagar Moghe](Sagar.Moghe@dal.ca) - *(Developer B00838037)*



## Getting Started

**[Optional]** If needing to provide the marker with a copy of the project that should run on their local machine for development, testing and/or marking purposes. Please include the following sections.

See deployment for notes on how to deploy the project on a live system.
Deployment URL: https://csci5709webgroup20.herokuapp.com/login
For assignment 4, I have decided to submit "Cost Estimator feature".

### Prerequisites

To have a local copy of this lab / assingnment / project up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
Give examples or provide a list of the required software / libraries / plug-ins

```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be, assume the marker just acquired a computer

```
Pull the code from https://github.com/JigarMakwana/CSCI5709_Project_Group_20.git
```

Open terminal once in the project folder.
Enter SourceCode directory.

```
cd SourceCode
```

Run the npm start command to start the project.

```
npm start
```

A web server will start on localhost:3000 if its available and project can be viewed.



## Deployment

The code is auto deployed using heroku and once the commits are done, a new build will be auto generated and deployed on heroku.

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [React](https://reactjs.org/) - The web frontend framework
* [React-Boostrap](https://react-bootstrap.github.io/) - Custom React Components
* [Material-ui](https://material-ui.com/) - React component styling
* [Bootstrap](https://getbootstrap.com/) - Responsive layout and styling components
* [Heroku](https://dashboard.heroku.com/) - Deployment portal


## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implement, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

### File Name: Success.js

*Lines 13 - 27*

```
<MuiThemeProvider>
            <React.Fragment>
            <h1>Thank you for using our cost estimator</h1>
            <p>As per our algorithm, your estimated cost is</p>
            <h2>{props.values['price']}</h2>
            <p>If you would like to try with different values please try again.</p>
            <br/>
            <RaisedButton
                label="Try again"
                primary={true}
                onClick={props.previousStep}
                style={styles.button}
            />
            </React.Fragment>
        </MuiThemeProvider> 

```

The code above was created by adapting the code in [Traversy Media](https://www.youtube.com/watch?v=zT62eVxShsY) as shown below: 

```
Youtube Video

```

- <!---How---> The code in [Traversy Media](https://www.youtube.com/watch?v=zT62eVxShsY) was implemented by using it as a boilerplate code for multistep 
form in react.
- <!---Why---> [Traversy Media](https://www.youtube.com/watch?v=zT62eVxShsY)'s Code was used because it was a simple implementation of the multistep form in react and 
used as a guide.
- <!---How---> [Traversy Media](https://www.youtube.com/watch?v=zT62eVxShsY)'s Code was modified by adding dynamic content into the page and adding a button to
navigate back to previous page.

*Repeat as needed*

### File Name: FormJourneyDetails

*Lines 70 - 125*

```
 <MuiThemeProvider>
                <React.Fragment>

                    <TextField
                        hintText="Enter your Source Location"
                        floatingLabelText="Source Location"
                        onChange={this.props.changeHandler("sourceLocation")}
                        defaultValue={this.props.values.sourceLocation}
                    />
                    <br/>
                    <TextField
                        hintText="Enter your Final Destination"
                        floatingLabelText="Destination Location"
                        onChange={this.props.changeHandler("destinationLocation")}
                        defaultValue={this.props.values.destinationLocation}
                    />
                    <br/>

                    <TextField
                        hintText="Enter journey distance"
                        floatingLabelText="Distance in KM"
                        onChange={this.props.changeHandler("distance")}
                        defaultValue={this.props.values.distance}
                    />
                    <br/>
                    <div>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                            Car Type: {this.carList[this.props.values['carType']]}
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={this.state["anchorEl"]}
                            keepMounted
                            open={Boolean(this.state["anchorEl"])}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.props.changeHandler('carType')} value={1}>Budget car</MenuItem>
                            <MenuItem onClick={this.props.changeHandler('carType')} value={2}>Family car</MenuItem>
                            <MenuItem onClick={this.props.changeHandler('carType')} value={3}>Sedan</MenuItem>
                        </Menu>
                    </div>
                    <br/>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        onClick={this.continue}
                        style={styles.button}
                    />
                    <RaisedButton
                        label="Previous"
                        primary={false}
                        onClick={this.previous}
                        style={styles.button}
                    />
                </React.Fragment>
            </MuiThemeProvider>

```

The code above was created by adapting the code in [Traversy Media](https://www.youtube.com/watch?v=zT62eVxShsY) as shown below: 

```
Youtube Video

```

- <!---How---> The code in [Traversy Media](https://www.youtube.com/watch?v=zT62eVxShsY) was implemented by using it as a boilerplate code for multistep 
form in react.
- <!---Why---> [Traversy Media](https://www.youtube.com/watch?v=zT62eVxShsY)'s Code was used because it was a simple implementation of the multistep form in react and 
used as a guide.
- <!---How---> [Traversy Media](https://www.youtube.com/watch?v=zT62eVxShsY)'s Code was modified by adding dynamic content into the page and adding a button to
navigate back to previous page, navigate to next page, added a dynamic dropdown. Added validation to the user inputs

### File Name: costEstimator

*Lines 11 - 75*

```
  state = {
        step:1,
        // firstName:'',
        // lastName:'',
        // email:'',
        sourceLocation:'',
        destinationLocation:'',
        distance:"",
        carType:"1",
        price:0
    }

    nextStep = () =>{
        const {step} = this.state;
        this.setState({
            step: step+1
        });
    }

    previousStep = () =>{
        const {step} = this.state;
        if(step!==1){
            this.setState({
                step: step-1
            });
        }
    }

    fieldChangeHandler = input => e => {

        this.setState({[input]: e.target.value})

    }

    distanceGenerator = () =>{
        let {distance, carType} = this.state
        let prices = distance*carType*5
        this.setState((prevState)=> prevState['price']=prices)

    }
render() {

const copyState ={...this.state}
        switch (copyState["step"]) {
            // case 1:
            //     return(
            //         <FormUsersDetails nextStep={this.nextStep} changeHandler={this.fieldChangeHandler} values={copyState}/>
            //     )

            case 1:
                return(
                    <FormJourneyDetails nextStep={this.nextStep} changeHandler={this.fieldChangeHandler} values={copyState} previousStep={this.previousStep}/>
                )

            case 2:
                return(
                    <Confirm nextStep={this.nextStep} changeHandler={this.fieldChangeHandler} values={copyState} previousStep={this.previousStep} clicked={this.distanceGenerator}/>
                )

            case 3:
                return(
                    <Success values={copyState} previousStep={this.previousStep} />
                )
        }
}

```

The code above was created by adapting the code in [Traversy Media](https://www.youtube.com/watch?v=zT62eVxShsY) as shown below: 

```
Youtube Video

```

- <!---How---> The code in [Traversy Media](https://www.youtube.com/watch?v=zT62eVxShsY) was implemented by using it as a boilerplate code for multistep 
form in react.
- <!---Why---> [Traversy Media](https://www.youtube.com/watch?v=zT62eVxShsY)'s Code was used because it was a simple implementation of the multistep form in react and 
used as a guide.
- <!---How---> [Traversy Media](https://www.youtube.com/watch?v=zT62eVxShsY)'s Code was modified by changing the flow sequence of the form and injected the components in 
bootstrap modal.


### File Name: Confirm.js

*Lines 49 - 88*

```
<MuiThemeProvider>
                <React.Fragment>

                    <List>
                        <ListItem
                            primaryText="From"
                            secondaryText={copy["sourceLocation"]}
                        />
                        <ListItem
                            primaryText="To"
                            secondaryText={copy["destinationLocation"]}
                        />
                        <ListItem
                            primaryText="Distance"
                            secondaryText={copy["distance"]}
                        />
                        <ListItem
                            primaryText="Car Type"
                            secondaryText={this.carList[copy["carType"]]}
                        />


                    </List>
                    <br/>
                    <RaisedButton
                        label="Get my Estimate"
                        primary={true}
                        onClick={this.temp}
                        style={styles.button}

                    />
                    <RaisedButton
                        label="Previous"
                        primary={false}
                        onClick={this.previous}
                        style={styles.button}
                    />

                </React.Fragment>
            </MuiThemeProvider>

```

The code above was created by adapting the code in [Traversy Media](https://www.youtube.com/watch?v=zT62eVxShsY) as shown below: 

```
Youtube Video

```

- <!---How---> The code in [Traversy Media](https://www.youtube.com/watch?v=zT62eVxShsY) was implemented by using it as a boilerplate code for multistep 
form in react.
- <!---Why---> [Traversy Media](https://www.youtube.com/watch?v=zT62eVxShsY)'s Code was used because it was a simple implementation of the multistep form in react and 
used as a guide.
- <!---How---> [Traversy Media](https://www.youtube.com/watch?v=zT62eVxShsY)'s Code was modified by changing the content of the form.



## Acknowledgments
Code tutorials from Traversy Media were very helpfull in completion of the project feature.
Numerous contributors of stack overflow in guiding me with small errors and how to fix them.
They also guided me in writing regular expressions used for validation.
* Hat tip to anyone whose code was used
* Inspiration
* etc
