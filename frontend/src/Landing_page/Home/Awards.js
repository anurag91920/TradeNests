import React from 'react';

function Awards() {
    return ( 
        <div className='container my-5'>
            <div className='row align-items-center'>

                {/* Image Left */}
                <div className='col-12 col-md-6 p-4 text-center'>
                    <img 
                        src='media/images/largestBroker.svg' 
                        alt='' 
                        className='img-fluid w-75'
                    />
                </div>

                {/* Text Right */}
                <div className='col-12 col-md-6 p-4'>
                    <h1 className='fw-bold'>Largest stock broker in India</h1>

                    <p className='mb-4'>
                        2+ million Zerodha clients contribute to over 15% of all retail 
                        order volumes in India daily by trading and investing in:
                    </p>

                    <div className='row'>
                        <div className='col-6'>
                            <ul className='p-0'>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>

                        <div className='col-6'>
                            <ul className='p-0'>
                                <li>Stocks and IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>

                    <div className='text-center text-md-start mt-4'>
                        <img 
                            src='media/images/pressLogos.png' 
                            style={{ width: "90%" }} 
                            alt='' 
                            className="img-fluid"
                        />
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Awards;
