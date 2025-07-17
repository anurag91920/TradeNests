import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-2 ' id='supportWrapper'>
                <h3>Support Portal</h3>
                <a href='/'>Track Ticket</a>
            </div>
            <div className='row p-5 '>
                <div className='col-6 p-5'>
                    <h3 className='fs-3'>Search for an answer or browse help topics to create a ticket</h3>
                    <input placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' />
                    <br />
                   <a href='/'> Track account opening</a>
                   <a href='/'> Track segment activation</a>
                   <a href='/'> Intraday margins</a>
                   <a href='/'> Kite user manual</a>
                </div>
                <div className='col-6 p-5'>
                       <h1>Featured</h1>
                       <ol>
                        <li><a href='/'>Change in expiry day of NSE derivative contracts from April 04, 2025 [Withheld]</a></li>
                        <li><a href='/'>Surveillance measure on scrips - April 2025 </a></li>
                       </ol>
                    
                </div>
            </div>
        </section>
    );
}

export default Hero;