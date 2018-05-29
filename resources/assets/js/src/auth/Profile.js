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
                    <img src="https://media.licdn.com/dms/image/C5603AQHUfn8R04INKg/profile-displayphoto-shrink_200_200/0?e=1533168000&v=beta&t=0KhzRvIupZQPpNOqRi8P9nr_5LFQDh9X78D_A_wJfoI" className="rounded-circle" alt="User Image"/>
                </div>
                <div className="user-panel__info">
                    <p className="user-panel__info-title">Developed by Popov Sergey</p>

                    <p>Recourse : <a href="http://gog.com" target="_blank">gog.com</a></p>
                    {/*<button type="button" className="user-panel__info-status user-panel__info-status--online" onClick={this.handleLogout.bind(this)}>Logout</button>*/}
                </div>
            </div>
        );
    }
}