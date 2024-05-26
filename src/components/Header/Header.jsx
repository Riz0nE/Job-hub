import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Job Hub</h1>
            <div className='header-container'>
                <Link to="/">Home</Link>
                <Link to="/jobs">Jobs</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/appliedjob">Applied Job</Link>
                <Link to="/statistices">Statistices</Link>
            </div>
            <button className='btn-start'>Start apply</button>
        </div>
    );
};

export default Header;