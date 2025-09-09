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
                      <Link to="/referral"><i className="fa-solid fa-user-friends me-2"></i>Referral programme</Link>
                      <Link to="/careers"><i className="fa-solid fa-briefcase me-2"></i>Careers</Link>
                      <Link to="/technest"><i className="fa-solid fa-laptop-code me-2"></i>TradeNest.tech</Link>
                      <Link to="/press"><i className="fa-solid fa-newspaper me-2"></i>Press & media</Link>
                      <Link to="/csr"><i className="fa-solid fa-hand-holding-heart me-2"></i>TradeNest cares (CSR)</Link>
                    </div>
                    
                    {/* Support Section */}
                    <div className='col-6 col-md-3 mb-4 footer-links'>
                      <p className="fw-bold">Support</p>
                      <Link to="/contact"><i className="fa-solid fa-envelope me-2"></i>Contact</Link>
                      <Link to="/support"><i className="fa-solid fa-headset me-2"></i>Support portal</Link>
                      <Link to="/blog"><i className="fa-solid fa-blog me-2"></i>Z-connect blog</Link>
                      <Link to="/charges"><i className="fa-solid fa-file-invoice-dollar me-2"></i>List of charges</Link>
                      <Link to="/downloads"><i className="fa-solid fa-download me-2"></i>Downloads & resources</Link>
                    </div>
                    
                    {/* Account Section */}
                    <div className='col-6 col-md-3 mb-4 footer-links'>
                      <p className="fw-bold">Account</p>
                      <Link to="/open-account"><i className="fa-solid fa-user-plus me-2"></i>Open an account</Link>
                      <Link to="/fund-transfer"><i className="fa-solid fa-money-check-dollar me-2"></i>Fund transfer</Link>
                      <Link to="/challenge"><i className="fa-solid fa-trophy me-2"></i>60 day challenge</Link>
                    </div>

            </div>
              <div className='mt-5 fs-6 text-muted'>
                <p> Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF </p>

                <p> Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances </p>

                <p> Smart Online Dispute Resolution | Grievances Redressal Mechanism  </p>

                <p> Investments in securities market are subject to market risks; read all the related documents carefully before investing.  </p>

                <p> Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.  </p>

                <p> "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.  </p>
              </div>
        </div>
    </footer>
    );
}

export default Footer;
