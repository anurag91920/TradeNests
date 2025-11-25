import React from 'react';

function RightSection({ imageURL, productName, productDesription, learnMore }) {
    return (
        <div className='container my-5'>
            <div className='row align-items-center flex-column flex-md-row-reverse'>

                {/* Image Section */}
                <div className='col-12 col-md-6 text-center p-3'>
                    <img src={imageURL} alt={productName} className='img-fluid w-75' />
                </div>

                {/* Text Section */}
                <div className='col-12 col-md-6 p-4 mt-4 mt-md-0'>
                    <h1 className='fw-bold'>{productName}</h1>
                    <p className='mt-3 text-muted'>{productDesription}</p>
                    {learnMore && (
                        <a href={learnMore} className='d-inline-block mt-3' style={{ textDecoration: "none" }}>
                            Learn More <i className="fa-solid fa-arrow-right ms-1"></i>
                        </a>
                    )}
                </div>

            </div>
        </div>
    );
}

export default RightSection;
