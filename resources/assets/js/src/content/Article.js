import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {ContentService} from "./service/ContentService";
import {OrderService} from "./service/OrderService";
import Order from "./order/Order";

export class Article extends Component {

    constructor() {

        super();
        //Initialize the state in the constructor
        this.state = {
            articles: [],
            current: null,
            isLoaded: false,
            error: null,
        };
        this.contentService = new ContentService();
        this.orderService = new OrderService();
        this.handleMakeOrder = this.handleMakeOrder.bind(this);
    }

    /*componentDidMount() is a lifecycle method
     * that gets called after the component is rendered
     */
    componentDidMount() {
        /* fetch API in action */
        let path = 'articles';

        return this.contentService.getContent(path)
            .then(response => {
                this.setState({
                    articles: response.content,
                    isLoaded: true
                })
            })
            .catch(error => {
                this.setState({
                    isLoaded: false,
                    error
                });
                console.log(error);
            });
    }

    handleMakeOrder(article) {
        this.orderService.createOrder('articles', article.id);
    }

    renderArticles() {
        return (
            <div className="container-fluid text-center">
                <div className="row">
                    {this.state.articles.map(article => {
                        return (
                            <div className="col-md-4 item" key={article.id}>
                                <div className="row item-content">
                                    <div className="col-md-12">
                                        <h3>{article.title}</h3>
                                        {article.content}
                                    </div>
                                </div>
                                <div className="item-bottom row">
                                    <div className="item-price col-md-6">
                                        {article.price}
                                    </div>
                                    <div className="item-controls col-md-6">
                                        <button className="button button-blue" onClick={() => this.handleMakeOrder(article)}>Buy</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Order article={this.state.current}/>
            </div>)
    }

    render() {
        const {error, isLoaded} = this.state;
        if (error) {
            if (error.response.status == 401) {
                return <Redirect to="login"/>
            }
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                this.renderArticles()
            );
        }
    }
}