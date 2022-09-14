import React from 'react';

const NewsItem = () => {
    return (
        <div className="news--card">
            <img src="https://images.unsplash.com/photo-1557992260-ec58e38d363c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
            <h3 className="title">Cuckoo FM</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptate magni, quo fuga, consequatur quam tempore laborum sunt inventore omnis in, maxime ratione facere obcaecati accusantium ipsam iure blanditiis unde.</p>
            <button>Read More</button>
        </div>
    )
}

export default NewsItem;