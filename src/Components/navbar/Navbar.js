import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="m-2">
            <nav>
                <div>
                    <h1>Naimul Sports Academy</h1>
                </div>
                <div>
                    <li><NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} to="/home">Home</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><Link to="/about">About</Link></li>
                    <li><NavLink to="contacts">Contacts</NavLink></li>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;