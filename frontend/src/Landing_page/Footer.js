import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
    <footer style={{backgroundColor: "#080404"}} className="p-4"> 
        <div className='container con border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src='media/images/Logo.webp' style={{ width: "40%" }} alt='Logo' />
                    <p>
                        &copy; 2010 - 2025, TradeNest Broking Ltd. All rights reserved.
                    </p>
                    <div className='mt-2 fs-2'>
                            {/* Social Media Links */}
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-facebook p-2"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin p-2"></i>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github p-2"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-x-twitter p-2"></i>
                            </a>
                            <hr />
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram p-2"></i>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-youtube p-2"></i>
                            </a>
                            <a href="https://wa.me/yourNumber" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-whatsapp p-2"></i>
                            </a>
                        </div>
                </div>
                {/* Company Section */}
                    <div className='col-6 col-md-3 mb-4 footer-links'>
                      <p className="fw-bold">Company</p>
                      <Link to="/about"><i className="fa-solid fa-circle-info me-2"></i>About</Link>
                      <Link to="/products"><i className="fa-solid fa-box-open me-2"></i>Products</Link>
                      <Link to="/pricing"><i className="fa-solid fa-tags me-2"></i>Pricing</Link>
                    
                    </div>
                    
                    {/* Support Section */}
                    <div className='col-6 col-md-3 mb-4 footer-links'>
                      <p className="fw-bold">Support</p>
                      <Link to="/contact"><i className="fa-solid fa-envelope me-2"></i>Contact</Link>
                      <Link to="/support"><i className="fa-solid fa-headset me-2"></i>Support portal</Link>
                      
                    </div>
                    
                    {/* Account Section */}
                    <div className='col-6 col-md-3 mb-4 footer-links'>
                      <p className="fw-bold">Account</p>
                      <Link to="/open-account"><i className="fa-solid fa-user-plus me-2"></i>Open an account</Link>
                     
                    </div>

            </div>
              <div className='mt-5 fs-6 text-muted'>
                <p> Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.  </p>

                <p> Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances </p>

                <p> Smart Online Dispute Resolution | Grievances Redressal Mechanism  </p>

                <p> Investments in securities market are subject to market risks; read all the related documents carefully before investing.  </p>

                <p> Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020.   </p>

                <p> "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors.  </p>
              </div>
        </div>
    </footer>
    );
}

export default Footer;
