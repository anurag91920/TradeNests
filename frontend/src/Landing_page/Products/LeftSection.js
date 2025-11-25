import React from 'react';

function LeftSection({ 
    imageURl, 
    productName, 
    productDesription, 
    tryDemo, 
    learnMore, 
    googlePlay, 
    appStore, 
}) {
    return ( 
       <div className='container my-5'>
           <div className='row align-items-center'>

               {/* Image Section */}
               <div className='col-12 col-md-6 p-3 text-center'>
                   <img 
                       src={imageURl} 
                       alt='' 
                       className='img-fluid w-75'
                   />
               </div>

               {/* Text Section */}
               <div className='col-12 col-md-6 p-4'>

                   <h1 className='fw-bold'>{productName}</h1>
                   
                   <p className='mt-3 text-muted'>
                       {productDesription}
                   </p>

                   <div className='mt-4'>
                       <a href={tryDemo} className='me-4' style={{ textDecoration: "none" }}>
                           Try Demo <i className="fa-solid fa-arrow-right ms-1"></i>
                       </a>

                       <a href={learnMore} style={{ textDecoration: "none" }}>
                           Learn More <i className="fa-solid fa-arrow-right ms-1"></i>
                       </a>
                   </div>

                   <div className='mt-4'>
                        <a href={googlePlay}>
                            <img 
                                src='media/images/googlePlayBadge.svg' 
                                alt='Google Play' 
                                className='me-2'
                            />
                        </a>

                        <a href={appStore}>
                            <img 
                                src='media/images/appstoreBadge.svg' 
                                alt='App Store'
                            />
                        </a>
                   </div>

               </div>

           </div>
       </div> 
    );
}

export default LeftSection;
