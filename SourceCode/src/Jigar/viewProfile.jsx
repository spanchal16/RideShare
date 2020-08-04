/* @Author - Jigar Makwana B00842568 */
import React, { Component } from "react";
import "../Breej/components/profcard.css";
import { Img } from "react-image";

import {
    Card,
    CardBody,
    CardTitle,
} from "reactstrap";
import {Redirect} from "react-router-dom";
import axios from "axios";

class viewProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            gender: "",
            bio: "",
            isVerified: "",
            profile_image: "",
            profession:"",
            isPremium:"",
            closeprofile: ""
        };
    }
    getUserDetails = () => {
        let _userId = this.props.location.userId;
        console.log("In getUserDetails: " + _userId)
        const getUserURL = `https://eventgoapi.herokuapp.com/usermng/getUserById/${_userId}`;
        // const getUserURL = `http://localhost:8080/usermng/getUserById/${_userId}`;
        axios.get(getUserURL)
            .then(res => {
                let resultData = res.data;
                let userName = res.data[0].userName;
                let email = res.data[0].email;
                let phone = res.data[0].phone;
                let gender = res.data[0].gender;
                let isPremium = res.data[0].isPremium;
                let isVerified = res.data[0].isVerified;
                let profile_image = res.data[0].profile_image;
                let profession = res.data[0].profession;
                let bio = res.data[0].bio;

                console.log(userName, phone, email, gender);
                this.setState({ name: userName });
                this.setState({ email: email });
                if(phone == null)
                    this.setState({ phone: "Not Provided" });
                else
                    this.setState({ phone: phone});
                if(gender == "ma")
                    this.setState({ gender: "Male" });
                else if(gender == "fe")
                    this.setState({ gender: "Female" });
                else
                    this.setState({ gender: "Other" });
                if(isPremium == 0)
                    this.setState({ isPremium: "Normal Account" });
                else
                    this.setState({ isPremium: "Premium Account" });
                if(isVerified == -1)
                    this.setState({ isVerified: "not Verified" });
                else if (isVerified == 0)
                    this.setState({ isVerified: "Under Process" });
                else if (isVerified == 1)
                    this.setState({ isVerified: "Verified" });
                this.setState({ profile_image: profile_image });
                if(profession == null)
                    this.setState({ profession: "Not Provided" });
                else
                    this.setState({ profession: profession});
                if(bio == null)
                    this.setState({ bio: "Not Provided" });
                else
                    this.setState({ bio: phone});

            }).catch(err => {
            console.log(err);
        })
    };
    componentDidMount() {
        this.getUserDetails();
    }
    closeProfile = () => {
        this.setState({ closeprofile: true });
    }

    render() {
        if (this.state.closeprofile) {
            return <Redirect to="/" />
        }
        return (
            <div className="main-container">
                <div className="div-image text-center">
                    <img
                        src={this.state.profile_image}
                        alt="profile pic"
                        className="image1"
                    />
                </div>
                <br/>
                <br/>
                <Card className="main-card">
                    <CardBody className="text-center">
                        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">
                            {this.state.name}'s Profile
                        </CardTitle>
                        <br/>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="profile-head  text-secondary">
                                    <div className="row">
                                        <div className="col-md-3"></div>
                                        <div className="col-md-8" style={{ textAlign: "left" }}>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label>Name:</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <p>{this.state.name}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label>Email:</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <p>{this.state.email}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label>Phone:</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <p>{this.state.phone}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label>Gender:</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <p>{this.state.gender}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label>Premium:</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <p>{this.state.isPremium}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label>Verified:</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <p>{this.state.isVerified}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label>Profession:</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <p>{this.state.profession}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label>Bio:</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <p>{this.state.bio}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="row m-3">
                                        <div className="col-md-12">
                                            <button variant="primary" onClick={this.closeProfile}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <p style={{ opacity: 0, margin: "0rem" }}>.</p>
            </div>
        );
    }
}

export default viewProfile;
