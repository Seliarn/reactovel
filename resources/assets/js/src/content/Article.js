import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

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
        axios.get('/api/articles', {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')},
        })
            .then(response => {
                response.json();
                this.setState({
                    articles: articles,
                    isLoaded: true
                });
            })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                });
                console.log(error);
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