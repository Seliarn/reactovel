import React, {Component} from 'react';
import {Header} from './Header.js';
import ReactDOM from 'react-dom';
import {Sidebar} from "./Sidebar";
import {Content} from "./Content";
import {Footer} from "./Footer";

/* Main Component */
class Main extends Component {

    constructor() {

        super();
        //Initialize the state in the constructor
        this.state = {
            articles: [],
            currentProduct: null
        }
    }

    checkAuth() {
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
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */
                <li
                    onClick = {
                        () => this.handleClick(article)
                    }
                    key = {article.id}
                >
                    {article.title}
                </li>
            );
        })
    }

    handleClick(article) {
        //handleClick is used to set the state
        this.setState({currentProduct: article});

    }

    render() {
        // const isLoggedIn = this.state.isLoggedIn;
        const isLoggedIn = true;
        /* Some css code has been removed for brevity */
        return (
            <div className = "container">
                <header className = "section-header">
                    <Header/>
                </header>
                <div className = "clearfix"></div>

                <section className = "wrapper row">
                    <aside className = "section-sidebar col-md-2">
                        <Sidebar/>
                    </aside>
                    <section className = "section-content col-md-10">
                        <Content/>
                    </section>
                </section>
                <div className = "clearfix"></div>
                <footer className = "section-footer">
                    <Footer/>
                </footer>
            </div>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main/>, document.getElementById('root'));
}