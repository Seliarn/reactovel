import React from 'react';

const Order = ({article}) => {
    this.state.email = '';
    if (article) {
        return (
            <div id="order" className="modal modal-sm fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Enter your email</h4>
                        </div>
                        <div className="modal-body">
                            <p>{article.title}</p>
                            <form id="buy-article" action="">
                                <input type="hidden" name="articleId" value={article.id} required/>
                                <input id="email" name="email" value={this.state.email} required/>
                                <br/>
                                <button className="btn btn-info btn-lg"
                                        onClick={() =>
                                            this.orderServic.createOrder(
                                                'article', {
                                                    params: {
                                                        articleId: article.id,
                                                        email: this.state.email
                                                    }
                                                })}>
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return '';
    }
};

export default Order;