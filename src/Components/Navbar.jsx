import React, { Component } from 'react';
import './Style.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="logo"></div>
                <ul className="nav--list">
                    <li><a href="#">General</a></li>
                    <li><a href="#">Science</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Entertainment</a></li>
                    <li><a href="#">Health</a></li>
                </ul>
            </nav>
        )
    }
}