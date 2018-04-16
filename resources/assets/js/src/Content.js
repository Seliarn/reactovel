import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Article} from './content/Article';

export class Content extends Component {
    render() {
        return (

            <Router>
                <Switch>
                    <Route exact path = '/' component = {Article}/>
                    {/*<Route path = '/login' component = {Login}/>
                    <Route path = '/register' component = {Register}/>
                    <Route path = '/home' component = {Home}/>
                    <Route path = '/forgotpassword' component = {Forgot}/>
                    <Route path = '/password/reset/:token' component = {Reset}/>*/}
                </Switch>
            </Router>
        );
    }
}