import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {AuthService} from './service/AuthService';

export class Profile extends Component {

    constructor() {
        super();
        this.handleLogout = this.handleLogout.bind(this);
        this.authService = new AuthService();
    }

    handleLogout(e) {
        this.authService.logout();
        return <Redirect to="login"/>

    }

    render() {
        return (
            <div className="user-panel">
                <div className="user-panel__image">
                    <img src="http://via.placeholder.com/160x160" className="rounded-circle" alt="User Image"/>
                </div>
                <div className="user-panel__info">
                    <p className="user-panel__info-title">RectoVel Developer</p>
                    {/*<button type="button" className="user-panel__info-status user-panel__info-status--online" onClick={this.handleLogout.bind(this)}>Logout</button>*/}
                </div>
            </div>
        );
    }
}