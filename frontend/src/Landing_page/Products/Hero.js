import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom mb-5'>
            <div className='text-center mt-5 p-3'>

                <h1 className='fw-bold'>TradeNest Products</h1>

                <h3 className='text-muted mt-3 fs-4'>
                    Sleek, modern, and intuitive trading platforms
                </h3>

                <p className='mt-3 mb-5'>
                    Check out our 
                    <a href='/' className='ms-1' style={{ textDecoration: "none" }}>
                        investment offerings 
                        <i className="fa-solid fa-arrow-right ms-1"></i>
                    </a>
                </p>

            </div>
        </div>
    );
}

export default Hero;
