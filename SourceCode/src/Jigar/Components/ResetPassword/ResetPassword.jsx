import React, {Component} from 'react';
import '../../stylesheets/ForgotPassword.css';
import {validatePassword, validateConfirmPassword} from "../Validation/ValidateProperties";
import {ErrorMsg} from "../Validation/ErrorMsg";

export class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            confirmPassword: "",
            error: {},
            isPasswordValid: false,
            isConfirmPasswordValid: false,
            isFormValid: false
        }
    }

    redirectToLogin = () => {
        this.props.history.push('/user/login');
    }

    updateProperties(name, value){
        switch(name)
        {
            case "password":
                this.setState({[name]: value}, validatePassword);
                break;
            case "confirmPassword":
                this.setState({[name]: value}, validateConfirmPassword);
                break;
            default:
                break;
        }
    }

    validateForm = () => {
        const {isPasswordValid, isConfirmPasswordValid} = this.state;
        this.setState({
            isFormValid: (isPasswordValid && isConfirmPasswordValid)
        })
    }

    resetLinkSent = (e) => {
        e.preventDefault();
        console.log('Function called');
        this.setState({
            password: "",
            confirmPassword: "",
            error: {},
            isPasswordValid: false,
            isConfirmPasswordValid: false,
            isFormValid: false
        })
        alert("Here dialog with below confirmation will be implemented\n " +
            "Password is successfully Reset!");
    }

    render() {
        console.log("Reset Passsowrd called!");
        return (
            <section className="col-lg-4">
                <header className="header justify-content-center">
                    <h3>Reset Password</h3>
                </header>
                <section className="card forgot-password-card mt-2 hv-center">
                    <form className="form">
                        <br/>
                        <section className="form-group text-left">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                   className="form-control"
                                   id="password"
                                   placeholder="Enter a new password"
                                   value={this.state.password}
                                   onChange={(e) =>
                                       this.updateProperties('password',e.target.value)}
                            />
                            <ErrorMsg valid={this.state.isPasswordValid} message={this.state.error.password} />
                        </section>

                        <section className="form-group text-left">
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password"
                                   className="form-control"
                                   id="password"
                                   placeholder="Confirm a new password"
                                   value={this.state.confirmPassword}
                                   onChange={(e) =>
                                       this.updateProperties('confirmPassword',e.target.value)}
                            />
                            <ErrorMsg valid={this.state.isConfirmPasswordValid}
                                      message={this.state.error.confirmPassword} />
                        </section>

                        <section>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={!this.state.isFormValid}
                                onClick={this.resetLinkSent}
                            >Reset Passowrd
                            </button>
                        </section>
                    </form>
                    <br/>
                    <br/>
                    <section
                        type="submit"
                        className="btn-custom"
                        onClick={this.redirectToLogin.bind(this)}
                    ><strong>Back to Login</strong>
                    </section>
                </section>
            </section>
        )
    }
}
