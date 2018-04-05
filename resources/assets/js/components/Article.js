import React, {Component} from 'react';

/* Stateless component or pure component
 * { article } syntax is the object destructing
 */

class ArticleList extends Component {


    constructor() {

        super();
        //Initialize the data in the constructor
        this.data = {
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
                //Fetched product is stored in the data
                this.setState({articles});
            });
    }

    renderArticles() {
        return this.data.articles.map(article => {
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
        //handleClick is used to set the data
        this.setState({current: article});

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

                <Article article = {this.data.current}/>
            </div>
        );
    }
}

const Article = ({article}) => {

    const divStyle = {
        /*code omitted for brevity */
    }

    //if the props article is null, return Article doesn't exist
    if (!article) {
        return (<div style = {divStyle}> Article Doesnt exist </div>);
    }

    //Else, display the article data
    return (
        <div style = {divStyle} className = "col-md-10">
            <h2> {article.title} </h2>
            <p> {article.content} </p>
        </div>
    )
}

export default Article;
