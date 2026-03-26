import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg border-bottom fixed-top navbar-light bg-white">
      <div className="container p-2">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/Logo.webp"
            style={{ width: "120px" }}
            alt="Logo"
          />
        </Link>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Menu Links */}
        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/Signup">Signup</Link>
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

      {/* Mega Menu */}
      {/* {openMenu && (
        <div className="mega-menu">

          <div className="mega-top">

            <div className="mega-box">
              <h5>Kite</h5>
              <p>Trading platform</p>
            </div>

            <div className="mega-box">
              <h5>Console</h5>
              <p>Backoffice</p>
            </div>

            <div className="mega-box">
              <h5>Kite Connect</h5>
              <p>Trading APIs</p>
            </div>

            <div className="mega-box">
              <h5>Coin</h5>
              <p>Mutual funds</p>
            </div>

          </div>

          <div className="mega-bottom">

            <div>
              <h6>Utilities</h6>
              <p>Calculators</p>
              <p>Brokerage calculator</p>
              <p>Margin calculator</p>
              <p>SIP calculator</p>
            </div>

            <div>
              <h6>Updates</h6>
              <p>Z-Connect blog</p>
              <p>Circulars / Bulletin</p>
              <p>IPOs</p>
              <p>Markets</p>
            </div>

            <div>
              <h6>Education</h6>
              <p>Varsity</p>
              <p>Trading Q&A</p>
            </div>

          </div>

        </div>
      )} */}

    </nav>
  );
}

export default Navbar;