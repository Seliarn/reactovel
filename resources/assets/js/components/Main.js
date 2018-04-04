import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Article from "./Article";

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
                <li style = {{cursor: "pointer"}}
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
        /* Some css code has been removed for brevity */
        return (
            <div className = "row">
                <div className = "col-md-2">
                    <h3> All articles </h3>
                    <ul>
                        {this.renderArticles()}
                    </ul>
                </div>

                <Article article = {this.state.currentProduct}/>
            </div>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('articles')) {
    ReactDOM.render(<Main/>, document.getElementById('articles'));
}