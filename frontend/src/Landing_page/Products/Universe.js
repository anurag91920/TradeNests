import React from 'react';

function Universe() {
    return ( 
        <div className='container my-5'>
            <div className='text-center'>
                <h1>The Tradenest Universe</h1>
                <p className='text-muted'>
                    Extend your trading and investment experience even further with our partner platforms
                </p>
            </div>

            <div className='row mt-4 justify-content-center'>

                {/* Partner 1 */}
                <div className='col-12 col-md-4 p-3 text-center'>
                    <img src='media/images/zerodhaFundhouse.png' alt='Zerodha Fundhouse' className='img-fluid mb-2' style={{maxWidth: "150px"}}/>
                    <p className='text-muted small'>
                        Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
                    </p>
                </div>

                {/* Partner 2 */}
                <div className='col-12 col-md-4 p-3 text-center'>
                    <img src='media/images/sensibullLogo.svg' alt='Sensibull' className='img-fluid mb-2' style={{maxWidth: "150px"}}/>
                    <p className='text-muted small'>
                        Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
                    </p>
                </div>

                {/* Partner 3 */}
                <div className='col-12 col-md-4 p-3 text-center'>
                    <img src='media/images/smallcaseLogo.png' alt='Smallcase' className='img-fluid mb-2' style={{maxWidth: "150px"}}/>
                    <p className='text-muted small'>
                        Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
                    </p>
                </div>

                {/* Partner 4 */}
                <div className='col-12 col-md-4 p-3 text-center'>
                    <img src='media/images/streakLogo.png' alt='Streak' className='img-fluid mb-2' style={{maxWidth: "150px"}}/>
                    <p className='text-muted small'>
                        Systematic trading platform that allows you to create and backtest strategies without coding.
                    </p>
                </div>

                {/* Partner 5 */}
                <div className='col-12 col-md-4 p-3 text-center'>
                    <img src='media/images/smallcaseLogo.png' alt='Smallcase' className='img-fluid mb-2' style={{maxWidth: "150px"}}/>
                    <p className='text-muted small'>
                        Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
                    </p>
                </div>

                {/* Partner 6 */}
                <div className='col-12 col-md-4 p-3 text-center'>
                    <img src='media/images/dittoLogo.png' alt='Ditto' className='img-fluid mb-2' style={{maxWidth: "150px"}}/>
                    <p className='text-muted small'>
                        Personalized advice on life and health insurance. No spam and no mis-selling.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Universe;
