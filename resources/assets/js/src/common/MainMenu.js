import React, {Component} from 'react';

export class MainMenu extends Component {
    render() {
        return (
            <div className = "collapse navbar-collapse justify-content-end" id = "navbarSupportedContent">
                <ul className = "navbar-nav">
                    <li className = "nav-item active">
                        <a className = "nav-link" href = "#">Home <span className = "sr-only">(current)</span></a>
                    </li>
                    <li className = "nav-item">
                        <a className = "nav-link" href = "#">Articles <span className = "sr-only">(current)</span></a>
                    </li>
                    <li className = "nav-item">
                        <a className = "nav-link" href = "#">Categorise <span className = "sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        );
    }
}