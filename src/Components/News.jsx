import React from 'react';
import NewsItem from './NewsItem';

const News = () => {
    return (
        <div className="news--container">
            <h2 className="headline">Top News from NewsBoy</h2>
            <div className="news--wrapper">
                <NewsItem />
            </div>
        </div>
    )
}
export default News;