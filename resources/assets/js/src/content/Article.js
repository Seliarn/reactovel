import React from 'react';

/* Stateless component or pure component
 * { article } syntax is the object destructing
 */
export const Article = ({article}) => {

    const divStyle = {
        /*code omitted for brevity */
    }

    //if the props article is null, return Article doesn't exist
    if (!article) {
        return (<div style = {divStyle}> Article Doesnt exist </div>);
    }

    //Else, display the article data
    return (
        <div style = {divStyle}>
            <h2> {article.title} </h2>
            <p> {article.content} </p>
            <h3> Publish Date {article.publish_date}</h3>

        </div>
    )
}
