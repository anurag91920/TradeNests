import React from 'react';

function LeftSection({ imageURl, productName, productDesription, tryDemo, learnMore, googlePlay, appStore, }) {
    return ( 
       <div className='container'>
           <div className='row'>
               <div className='col-6 p-3'>
                   <img src={imageURl} alt='' />
               </div>
               <div className='col-6 p-5 mt-5'>
                   <h1>{productName}</h1>
                   <p>{productDesription}</p>
                   <div>
                       <a href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                       <a href={learnMore} style={{marginLeft: "50px"}}>learn More <i class="fa-solid fa-arrow-right"></i></a>
                   </div>
                   <div className='mt-3 p-3'>
                        <a href={googlePlay}>
                         <img src='media/images/googlePlayBadge.svg' alt='' />
                        </a>
                        <a href={appStore}>
                            <img src='media/images/appstoreBadge.svg' alt='' />
                        </a>
                   </div>
               </div>
           </div>
       </div> 
    );
}

export default LeftSection;