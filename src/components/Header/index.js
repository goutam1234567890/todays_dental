import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './index.css'

const Header = () => {
    return(
        <header className='header'>
            <div className='header-container'>
                <Link to="/" className='logo'>Todays Dental</Link>
                <nav className='nav-links'>
                    <NavLink to="/" exact="true" activeclassname="active">Home</NavLink>
                    <NavLink to="/about" activeclassname="active">About Us</NavLink>
                    <NavLink to="/services" activeclassname="active">Services</NavLink>
                    <NavLink to="/contact" activeclassname="active">Contact Us</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
