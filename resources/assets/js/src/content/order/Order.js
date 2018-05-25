import React from 'react';

const Order = ({article}) => {
    if (article) {
        return (
            <div id="order" class="modal-sm fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Enter your email</h4>
                        </div>
                        <div class="modal-body">
                            <form id="buy-article">
                                <input type="hidden" name="articleId" value={article.id}/>
                                <input id="email" name="email" value=""/>
                                <br/>
                                <input type="submit" value="Submit"/>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return '';
    }
}

export default Order;