import React, {Component} from 'react';
import {ContentService} from "./service/ContentService";
import {Order} from "./order/Order";

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
        this.handleBuyArticle = this.handleBuyArticle.bind(this);
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
    }

    handleOrderComplite(article) {
        $('.modal-header .close').click();
        $('btn-buy-' + this.state.current.id).text('Bought').removeClass('btn-info').addClass('btn-default');
        // this.state.current = null;
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
                <div id="order" className="modal modal-sm fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Enter your email</h4>
                            </div>

                            {this.state.current &&
                            <Order article={this.state.current} hendelOrderComplete={this.handleOrderComplete}/>
                            }
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