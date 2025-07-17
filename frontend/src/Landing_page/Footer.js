import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
    <footer style={{backgroundColor: "rgb(250, 250, 250)"}}> 
        <div className='container border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src='media/images/Logo.webp' style={{ width: "40%" }} alt='Logo' />
                    <p>
                        &copy; © 2010 - 2025, TradeNest Broking Ltd. All rights reserved.
                    </p>
                    <div className='mt-2 fs-2'>
                    <i class="fa-brands fa-facebook p-2"></i>
                    <i class="fa-brands fa-linkedin p-2"></i>
                    <i class="fa-brands fa-github p-2"></i>
                    <i class="fa-brands fa-x-twitter p-2"></i>
                    <br />
                    <hr />
                    <i class="fa-brands fa-instagram p-2"></i>
                    <i class="fa-brands fa-youtube p-2"></i>
                    <i class="fa-brands fa-whatsapp p-2"></i>
                    </div>
                </div>
                <div className='col text-muted'>
                    <p>Company</p>
                    <Link href='' style={{textDecoration: "none"}}>About</Link>
                    <br />
                    <Link href=''style={{textDecoration: "none"}}>Products</Link>
                    <br />
                    <Link href=''style={{textDecoration: "none"}}>Pricing</Link>
                    <br />
                    <Link href=''style={{textDecoration: "none"}}>Referral programme</Link>
                    <br />
                    <Link href=''style={{textDecoration: "none"}}>Careers</Link>
                    <br />
                    <Link href=''style={{textDecoration: "none"}}>TradeNest.tech</Link>
                    <br />
                    <Link href=''style={{textDecoration: "none"}}>Press & media</Link>
                    <br />
                    <Link href=''style={{textDecoration: "none"}}>TradeNest cares (CSR)</Link>
                    <br />
                </div>
                <div className='col'>
                    <p>Support</p>
                    <Link href='' style={{textDecoration: "none"}}>Contact</Link>
                    <br />
                    <Link href='' style={{textDecoration: "none"}}>Support portal</Link>
                    <br />
                    <Link href='' style={{textDecoration: "none"}}>Z-connect blog</Link>
                    <br />
                    <Link href='' style={{textDecoration: "none"}}>List of charges</Link>
                    <br />
                    <Link href='' style={{textDecoration: "none"}}>Downloads & resources</Link>
                    <br />
                </div>
                <div className='col'>
                    <p>Account</p>
                    <Link href='' style={{textDecoration: "none"}}>Open an account</Link>
                    <br />
                    <Link href='' style={{textDecoration: "none"}}>Fund transfer</Link>
                    <br />
                    <Link href='' style={{textDecoration: "none"}}>60 day challenge</Link>
                    <br />
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
