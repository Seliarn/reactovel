import React, {Component} from 'react';
import {MainMenu} from './common/MainMenu';

export class Header extends Component {
    render() {
        return (
            <nav className = "navbar navbar-default">
                <div className = "container-fluid">
                    <div className = "navbar-header">
                        <a className = "navbar-brand">
                            LOGO
                        </a>
                    </div>
                    <MainMenu/>
                </div>
            </nav>
        );
    }
}