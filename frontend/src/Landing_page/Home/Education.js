import React from 'react';
import { Link } from "react-router-dom";

function Education() {
    return ( 
       <div className='container mt-5'>
           <div className='row align-items-center'>

               {/* Image Section */}
               <div className='col-12 col-md-6 text-center mb-4 mb-md-0'>
                    <img 
                        src='media/images/education.svg' 
                        alt='' 
                        className='img-fluid w-75'
                    />
               </div>

               {/* Text Section */}
               <div className='col-12 col-md-6 text-center text-md-start'>

                  <h1 className='mb-3 fs-2 mt-3 mt-md-5'>
                     Free and open market education
                  </h1>

                  <p>
                    Varsity, the largest online stock market education book in the world 
                    covering everything from the basics to advanced trading.
                  </p>

                  <Link 
                    to='' 
                    className='d-inline-block my-2' 
                    style={{ textDecoration: "none" }}
                  >
                    Varsity <i className="fa-solid fa-arrow-right"></i>
                  </Link>

                  <p className='mt-4'>
                    TradingQ&A, the most active trading and investment community in India 
                    for all your market related queries.
                  </p>

                  <Link 
                    to='' 
                    className='d-inline-block my-2' 
                    style={{ textDecoration: "none" }}
                  >
                    TradingQ&A <i className="fa-solid fa-arrow-right"></i>
                  </Link>
               </div>

           </div>
       </div>
    );
}

export default Education;
