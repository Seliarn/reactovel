import React, {Component} from 'react';
import {MainMenu} from './common/MainMenu';
import {Profile} from "./auth/Profile";

export class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar">
                <Profile/>
                <ul className="list-sidebar">
                    <li className="list-sidebar__item"> <a href="#" className="list-sidebar__link">Home</a></li>
                        <li className="list-sidebar__item"> <a href="#" className="list-sidebar__link">Article</a></li>
                    <li className="list-sidebar__item"> <a href="#" className="list-sidebar__link">Categorise</a></li>
                    <li className="list-sidebar__item"> <a href="#" className="list-sidebar__link">Contact us</a></li>
                </ul>
            </aside>
        );
    }
}