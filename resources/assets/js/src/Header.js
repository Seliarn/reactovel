import React, {Component} from 'react';
import {MainMenu} from './common/MainMenu';

export class Header extends Component {
    render() {
        return (

            <nav className="navbar navbar-dark bg-dark navbar-expand-lg col-lg-12">
                <a className="navbar-brand" href="#"><img src="/img/logo-light.png" alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Articles <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Categorise <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>

                </div>
            </nav>


    );
    }
}