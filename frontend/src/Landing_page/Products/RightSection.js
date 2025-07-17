import React from 'react';

function RightSection({ imageURL, productName, productDesription, learnMore, }) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div>
                       <a href={learnMore}>learn More <i class="fa-solid fa-arrow-right"></i></a>
                   </div>
                </div>
                <div className='col-6 p-3'>
                    <img  src={imageURL} alt=''/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;