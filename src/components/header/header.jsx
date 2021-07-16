import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="header-block">
                <div className="header-title">
                    <Link to="/">Game of Thrones Info</Link>
                </div>
                <ul className="header-links">
                    <li><Link to="/characters/">Characters</Link></li>
                    <li><Link to="/houses/">Houses</Link></li>
                    <li><Link to="/books/">Books</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;

