import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Article} from './content/Article';
import {Auth} from './Auth';

export class Content extends Component {
    render() {
        return (

            <Router>
                <Switch>
                    <Route exact path = '/' component = {Article}/>
                    {/*<Route path = '/login' component = {Auth}/>
                    <Route path = '/register' component = {Register}/>
                    <Route path = '/home' component = {Home}/>
                    <Route path = '/forgotpassword' component = {Forgot}/>
                    <Route path = '/password/reset/:token' component = {Reset}/>*/}
                </Switch>
            </Router>
        );
    }
}