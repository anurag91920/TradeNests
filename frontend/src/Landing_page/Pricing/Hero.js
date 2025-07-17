import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-bottom text-center'>
                <h1>Charges</h1>
                <p>List of all charges and taxes</p>
            </div>
            <div className='row p-5 mt-5'>
                  <div className='col-4 p-5'>
                    <img src='media/images/pricingEquity.svg' alt='' style={{width: "50%"}} />
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                  </div>
                  <div className='col-4 p-5'>
                   <img src='media/images/intradayTrades.svg' alt='' style={{width: "50%"}} />
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                  </div>
                  <div className='col-4 p-5'>
                   <img src='media/images/pricingEquity.svg' alt='' style={{width: "50%"}} />
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                  </div>
            </div>
        </div>
    );
}


export default Hero;