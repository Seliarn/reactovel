import React, {Component} from 'react';

export class Article extends Component {

    constructor() {

        super();
        //Initialize the state in the constructor
        this.state = {
            articles: [],
            current: null,
            isLoaded: false,
            error: null,
        }
    }

    /*componentDidMount() is a lifecycle method
     * that gets called after the component is rendered
     */
    componentDidMount() {
        /* fetch API in action */
        fetch('/api/articles')
            .then(response => response.json())
            .then(
                (articles) => {
                    this.setState({
                        articles: articles,
                        isLoaded: true
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                });
    }

    renderArticles() {
        return (
            <div className = "container-fluid text-center">
                <div className = "row">
                    {this.state.articles.map(article => {
                        return (
                            <div className = "col-md-4" key = {article.id}>
                                <h3>{article.title}</h3>
                                <div>
                                    {article.content}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>)
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
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