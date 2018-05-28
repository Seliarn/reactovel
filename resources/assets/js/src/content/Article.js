import React, {Component} from 'react';
import {ContentService} from "./service/ContentService";
import {OrderService} from "./service/OrderService";

export class Article extends Component {

    constructor() {

        super();

        //Initialize the state in the constructor
        this.state = {
            articles: [],
            current: false,
            isLoaded: false,
            error: null,
            email: '',
            bought: false
        };
        this.contentService = new ContentService();
        this.orderService = new OrderService();
        this.handleBuyArticle = this.handleBuyArticle.bind(this);
        this.renderArticles = this.renderArticles.bind(this);
        this.handleMakeOrder = this.handleMakeOrder.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    handleBuyArticle(article) {
        this.setState({current: article});
        console.log(this.state.current);
    }

    handleOrderComplite(article) {
        $('.modal-header .close').click();
        $('#btn-buy-' + this.state.current.id).text('Bought').removeClass('btn-info').addClass('btn-default');
        // this.state.current = null;
    }


    handleMakeOrder(event) {
        var componentOrder = this;
        this.orderService.createOrder(
            'articles', {
                params: {
                    articleId: this.state.current.id,
                    email: this.state.email
                }
            })
            .then(function (response) {
                if (response) {
                    console.log(componentOrder.setState({bought: componentOrder.state.current.id}));
                }
            });
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({email: event.target.value});
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
                                        <img src="http://via.placeholder.com/200x150" alt="" className='item-content__img'/>
                                        <h3 className="item-content__title">{article.title}</h3>
                                        <p className='item-content__text'>{article.content}</p>
                                    </div>
                                </div>
                                <div className="item-bottom row">
                                    <div className="item-price col-md-6">
                                        {article.price}
                                    </div>
                                    <div className="item-controls col-md-6">
                                        <button id={'btn-buy-' + article.id} className="btn btn-info btn-md"
                                                data-toggle="modal"
                                                data-target="#order"
                                                onClick={() => this.handleBuyArticle(article)}>
                                            Buy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div id="order" className="modal modal--inside modal-sm fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            {this.state.current && (
                                <div>
                                    <div className="modal-header">
                                        <h4 className="modal-title">{this.state.current.title}</h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    {(this.state.current.id !== this.state.bought) ?
                                        (
                                            <div className="modal-body">
                                                <p>Enter your e-mail</p>
                                                <form id="buy-article" onSubmit={this.handleMakeOrder}>
                                                    <input type="hidden" name="articleId" value={this.state.current.id} required/>
                                                    <input id="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                                                    <br/>
                                                    <button className="btn btn-info btn-lg">
                                                        Submit
                                                    </button>
                                                </form>
                                            </div>
                                        ) : (
                                            <div className="modal-body">
                                                <p>You already bought this product</p>
                                            </div>
                                        )
                                    }
                                </div>
                            )}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }

    render() {
        const {error, isLoaded} = this.state;
        if (error) {
            /*if (error.status == 401) {
                return <Redirect to="login"/>
            }*/
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