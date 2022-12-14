import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);

    const updateNews = async () => {
        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9e1bd06f25544f399975122857782f19&category=${props.category}&page=1&pageSize=10`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setLoading(false);
        setTotalResults(parsedData.totalResults);
    }


    useEffect(() => {
        updateNews();
        document.title = "NewsBoy- " + capitalizeFirst(props.category)
    }, []);

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9e1bd06f25544f399975122857782f19&category=${props.category}&page=${page + 1}&pageSize=10`;
        setPage(prevState => prevState + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }

    const capitalizeFirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const newsComp = articles.map((article, index) => {
        return (
            <NewsItem
                article={article}
                key={index}
            /
            >
        )
    })
    return (
        <div className="news--container">
            <h2 className="headline">Top Headlines from {capitalizeFirst(props.category)}</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="news--wrapper">
                    {newsComp}
                </div>
            </InfiniteScroll>
        </div>
    )
}
export default News;