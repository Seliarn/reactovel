import React, {Component} from 'react';
import {OrderService} from "./../service/OrderService";

export class Order extends Component {

    constructor(props) {

        super();
        //Initialize the state in the constructor
        this.state = {
            email: '',
            article: props.article,
            orderComplete: props.handleOrderComplete
        };
        this.orderService = new OrderService();
        this.handleMakeOrder = this.handleMakeOrder.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleMakeOrder(event) {
        this.orderService.createOrder(
            'articles', {
                params: {
                    articleId: this.state.article.id,
                    email: this.state.email
                }
            });/*.then(function () {
            this.state.orderComplete();
        })*/
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({email: event.target.value});
    }

    render() {
        return (
            <div className="modal-body">
                <p>{this.state.article.title}</p>
                <form id="buy-article" onSubmit={this.handleMakeOrder}>
                    <input type="hidden" name="articleId" value={this.state.article.id} required/>
                    <input id="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                    <br/>
                    <button className="btn btn-info btn-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
};

export default Order;