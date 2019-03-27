import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header>
            <h1>
                ToDo list with&nbsp;
                <span>React.js</span>
                &nbsp;<i className="fab fa-react"></i>
            </h1>

            <nav className="navigation">
                <Link to="/" className="linkItem">Home</Link>
                <Link to="/about" className="linkItem">About</Link>
            </nav>
        </header>
    )
}

export default Header;
