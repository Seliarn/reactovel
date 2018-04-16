import React, {Component} from 'react';

export class MainMenu extends Component {
    render() {
        return (
            <ul className = "nav navbar-nav">
                <li><a href = "#">Home</a></li>
                <li><a href = "#">Articles</a></li>
                <li><a href = "#">Categories</a></li>
            </ul>
        );
    }
}