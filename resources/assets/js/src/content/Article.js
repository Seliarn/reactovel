import React, {Component} from 'react';

export class Article extends Component {

    constructor() {

        super();
        //Initialize the state in the constructor
        this.state = {
            articles: [],
            current: null
        }
    }

    /*componentDidMount() is a lifecycle method
     * that gets called after the component is rendered
     */
    componentDidMount() {
        /* fetch API in action */
        fetch('/api/articles')
            .then(response => {
                return response.json();
            })
            .then(articles => {
                //Fetched product is stored in the state
                this.setState({articles});
            });
    }

    renderArticles() {
        return this.state.articles.map(article => {
            return (
                <div className = "container-fluid text-center">
                    <div className = "row">
                        <div className = "col-md-3" key = {article.id}>
                            <h3>{article.title}</h3>
                            <div>
                                {article.content}
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            this.renderArticles()
        );
    }
}