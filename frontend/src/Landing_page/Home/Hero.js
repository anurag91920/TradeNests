import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row d-flex flex-column align-items-center text-center'>

                {/* Image Section */}
                <div className="col-md-6 col-12 mb-4">
                    <img src='media/images/homeHero.png'  alt='Illustration of investing'  className='img-fluid w-100' />
                </div>
                {/* Text Section */}
                <div className="col-md-6 col-12 mt-4">
                    <h1 className='mt-3 fw-bold'>Invest in everything</h1>
                    <p className='mt-2'>
                        Online platform to invest in stocks, derivatives, mutual funds, and more
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Hero;
