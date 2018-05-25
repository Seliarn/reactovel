import React, {Component} from 'react';
import {ContentService} from "./service/ContentService";

export class Article extends Component {
    constructor() {

        super();
        //Initialize the state in the constructor
        this.props = {};
    }

    render() {
        <div className="col-md-4 item" key={article.id}>
            <h3>{article.title}</h3>
            <div className="item-text">
                {article.content}
            </div>
        </div>
    }
}