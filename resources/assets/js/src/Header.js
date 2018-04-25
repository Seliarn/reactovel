import React, {Component} from 'react';
import {MainMenu} from './common/MainMenu';

export class Header extends Component {
    render() {
        return (
            <nav className = "navbar navbar-dark bg-dark navbar-expand-lg col-lg-12">
                <a className = "navbar-brand" href = "#"><img src = "/ismg/logo-light.png" alt = ""/></a>
                <button className = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#navbarSupportedContent" aria-controls = "navbarSupportedContent" aria-expanded = "false" aria-label = "Toggle navigation">
                    <span className = "navbar-toggler-icon"></span>
                </button>

                <MainMenu/>
            </nav>
        );
    }
}