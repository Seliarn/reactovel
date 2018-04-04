import React from 'react';

/* Stateless component or pure component
 * { article } syntax is the object destructing
 */
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
