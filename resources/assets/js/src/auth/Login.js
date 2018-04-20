import React, {Component} from 'react';
import {AuthService} from './service/AuthService';

export class Login extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.authService = new AuthService();
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.authService.login(this.state.email, this.state.password);
        /*
            .then(res => {
                this.props.history.replace('/');
            })
            .catch(err => {
                console.log(err);
            })*/
    }

    render() {
        return (
            <div>
                <div className = "panel-body">
                    <div className = "">
                        {/*error !== undefined && <div className = {name} role = "alert">{msg}</div>*/}
                    </div>
                    <form className = "form-horizontal" role = "form" onSubmit = {this.handleSubmit}>
                        <div className = "form-group">
                            <label htmlFor = "email" className = "control-label">E-Mail Address</label>

                            <div className = "">
                                <input id = "email" type = "text" ref = "email" className = "form-control" name = "email"
                                       onChange = {this.handleChange} required/>
                            </div>
                        </div>

                        <div className = "form-group">
                            <label htmlFor = "password" className = "control-label">Password</label>

                            <div className = "">
                                <input id = "password" type = "password" ref = "password" className = "form-control" name = "password"
                                       onChange = {this.handleChange} required/>
                            </div>
                        </div>

                        {/*<div className = "form-group">
                                            <div className = "">
                                                <div className = "checkbox">
                                                    <label>
                                                        <input type = "checkbox" name = "remember"/> Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>*/}

                        <div className = "form-group">
                            <div className = "">
                                <input type = "submit" className = "btn btn-primary" value = "
                                                    Login
                                                "/>

                                <li className = "btn btn-link">
                                    {/*<Link to = "forgotpassword">Forgot Your Password?</Link>*/}
                                </li>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        );
    }
}