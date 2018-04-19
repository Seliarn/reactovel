import React, {Component} from 'react';
import {AuthService} from './service/AuthService';

export class Login extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Auth = new AuthService();
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
        this.Auth.login(this.state.email, this.state.password)
            .then(res => {
                this.props.history.replace('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <div className = "container-fluid">
                    <div className = "row">
                        <div className = "col-md-8 col-md-offset-2">
                            <div className = "panel panel-default">
                                <div className = "panel-heading">Login</div>
                                <div className = "panel-body">
                                    <div className = "col-md-offset-2 col-md-8 col-md-offset-2">
                                        {/*error !== undefined && <div className = {name} role = "alert">{msg}</div>*/}
                                    </div>
                                    <form className = "form-horizontal" role = "form" onSubmit = {this.handleSubmit}>
                                        <div className = "form-group">
                                            <label htmlFor = "email" className = "col-md-4 control-label">E-Mail Address</label>

                                            <div className = "col-md-6">
                                                <input id = "email" type = "text" ref = "email" className = "form-control" name = "email"
                                                       onChange = {this.handleChange} required/>
                                            </div>
                                        </div>

                                        <div className = "form-group">
                                            <label htmlFor = "password" className = "col-md-4 control-label">Password</label>

                                            <div className = "col-md-6">
                                                <input id = "password" type = "password" ref = "password" className = "form-control" name = "password"
                                                       onChange = {this.handleChange} required/>
                                            </div>
                                        </div>

                                        {/*<div className = "form-group">
                                            <div className = "col-md-6 col-md-offset-4">
                                                <div className = "checkbox">
                                                    <label>
                                                        <input type = "checkbox" name = "remember"/> Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>*/}

                                        <div className = "form-group">
                                            <div className = "col-md-8 col-md-offset-4">
                                                <input type = "submit" className = "btn btn-primary" value = "Login"/>
                                                <li className = "btn btn-link">
                                                    {/*<Link to = "forgotpassword">Forgot Your Password?</Link>*/}
                                                </li>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}