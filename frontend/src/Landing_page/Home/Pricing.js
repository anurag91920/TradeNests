import React from 'react';
import { Link } from "react-router-dom";

function Pricing() {
    return ( 
        <div className='container my-5'>
            <div className='row align-items-start'>

                {/* Left Text Section */}
                <div className='col-12 col-md-4 mb-4'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. 
                        Flat fees and no hidden charges.
                    </p>

                    <Link 
                        to='' 
                        className='d-inline-block mt-2' 
                        style={{ textDecoration: "none" }}
                    >
                        See Pricing <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>

                {/* Empty column removed for mobile spacing */}
                {/* <div className='col-2'></div> */}

                {/* Pricing Boxes */}
                <div className='col-12 col-md-6 offset-md-2'>
                    <div className='row text-center'>

                        <div className='col-12 col-sm-6 p-3 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>
                                Free equity delivery and <br/> direct mutual funds
                            </p>
                        </div>

                        <div className='col-12 col-sm-6 p-3 border mt-3 mt-sm-0'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F & O</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
     );
}

export default Pricing;
