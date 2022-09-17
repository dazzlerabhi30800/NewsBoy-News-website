import React from 'react';

const NewsItem = ({ article }) => {
    return (
        <div className="news--card">
            <img src={article.urlToImage ? article.urlToImage : "https://images.unsplash.com/photo-1557992260-ec58e38d363c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"} alt={article.author} />
            <h3 className="title">{article.title}</h3>
            <p>{article.description}</p>
            <a target="_blank" href={article.url}>Read More</a>
            <span className="source">{article.source.name}</span>
        </div>
    )
}


export default NewsItem;