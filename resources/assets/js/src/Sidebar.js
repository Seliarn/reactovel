import React, {Component} from 'react';
import {MainMenu} from './common/MainMenu';

export class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar">
                <div className="user-panel">
                    <div className="user-panel__image">
                        <img src="http://via.placeholder.com/160x160" className="rounded-circle" alt="User Image" />
                    </div>
                    <div className="user-panel__info">
                        <p className="user-panel__info-title">RectoVel Developer</p>
                        <a href="#" className=" user-panel__info-status user-panel__info-status--online"> Online</a>
                    </div>
                </div>
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