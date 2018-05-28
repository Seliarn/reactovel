import React, {Component} from 'react';
import {MainMenu} from './common/MainMenu';
import {Profile} from "./auth/Profile";

export class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar">
                <Profile/>
            </aside>
        );
    }
}