import React from 'react';


function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-8'>
                 <a href='/' style={{textDecoration: "none"}}><h3 className='fs-5'>Brokerage Calculator</h3></a>  
                  <ul style={{textAlign: "left", lineHeight: "2.8", fontSize: "13px"}} className='text-muted'>
                    <li>Call & Trade & RMS auto-square-off: Additional charges of 50 + GST per order. </li>
                    <li>Digital contract notes will be sent via e-mail. </li>
                    <li>Physical copies of contract notes, if required, shall be changed 20 per contact note Courier charges Apply. </li>
                    <li>For NRI account(non-PIS), 0.5% or 100 per executed order for equity. </li>
                    <li>For NRI account (PIS) 0.5% or 200 per executed order for equity. </li>
                    <li>if the account is in debit balance, any order olaced will be charged 40 per executed order instead 20 per executed order. </li>
                  </ul> 
                </div>
                <div className='col-4'>
                 <a href="/" style={{textDecoration: "none"}}><h3 className='fs-5'>List of charges</h3></a>  
                </div>
            </div>
        </div>
    );
}

export default Brokerage;