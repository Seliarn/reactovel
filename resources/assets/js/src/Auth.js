import React, {Component} from 'react';
import {Login} from './auth/Login';

export class Auth extends Component {

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-12">
                        <h3>Authorization</h3>
                    </div>
                </div>
                <div className = "clearfix"></div>
                <div className = "row">
                    <div className = "col-md-12">
                        <Login/>
                    </div>
                </div>
            </div>
        );
    }
}