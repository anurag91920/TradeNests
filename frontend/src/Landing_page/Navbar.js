import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark border-bottom fixed-top" style={{backgroundColor:"#080404"}}>
            <div className="container p-2">

                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img 
                        src='media/images/Logo.webp' 
                        style={{width: "120px"}} 
                        alt='Logo'
                    />
                </Link>

                {/* Toggle Button */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu Items */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" to="/Signup">Signup</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/Login">Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/LogOut">Log Out</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/Products">Products</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/Pricing">Pricing</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/Support">Support</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
