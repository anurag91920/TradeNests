import React, { useState } from "react";

function Team() {

  const [openBio, setOpenBio] = useState(null);

  const toggleBio = (index) => {
    if (openBio === index) {
      setOpenBio(null);
    } else {
      setOpenBio(index);
    }
  };


    return ( 
        <div className='container'>
              <div className='row p-5 mt-5 nb-5 border-top'>
                  <h1 className='text-center mt-5'>People</h1>
              </div>
            <div className='row p-5 mt-5 border-top text-muted fs-6'>
                <div className='col-6 p-5 text-center'>
                   <img src='media/images/Nithin.jpg' style={{borderRadius: "100%", width: "40%"}} alt='' />
                   <h4 className='mt-3'>Nithin Kamath</h4>
                   <h5>Founder, CEO</h5>
                </div>
                <div className='col-6 p-5 fs-5'>
                  <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry. </p> 

                  <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). </p> 

                  <p>Playing basketball is his zen. </p> 
                </div>
           </div>
          <div className="container text-center">
               <div className="row">
                     {/* Member 1 */}
        <div className="col-md-4 p-5">
          <img src="media/images/Nikhil.jpg" style={{ borderRadius: "50%", width: "40%" }} alt="" />
          <h4 className="mt-3">Nikhil Kamath</h4>
          <h5>Co-founder & CFO</h5>

          <button
            onClick={() => toggleBio(1)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            Bio
          </button>

          {openBio === 1 && (
            <div className="team-featured-desc text-left">
              <p>
                Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha.
              </p>
            </div>
          )}
        </div>
                    <div className="col-md-4 p-5">
                       <img src="media/images/Kailash.jpg"
                         style={{ borderRadius: "50%", width: "40%" }}
                         alt=""
                       />
                       <h4 className="mt-3">Dr. Kailash Nadh</h4>
                        <h5>Co-founder & CTO</h5>
                        <p class="text-grey show-bio">
                          <button className="show-bio" onClick={() => toggleBio(2)} style={{ background: "none", border: "none", cursor: "pointer" }}>Bio</button>
                        </p>
                        {openBio === 2 && (
                        <div className="team-featured-desc text-left">
                            <p>
                              Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.
                            </p>
                        </div>
                    )}
                    </div>

                    <div className="col-md-4 p-5">
                      <img src="media/images/Venu.jpg"
                        style={{ borderRadius: "50%", width: "40%" }}
                        alt=""
                      />
                      <h4 className="mt-3">Venu Madhav</h4>
                      <h5>Co-founder & COO</h5>
                       <p class="text-grey show-bio">
                          <button className="show-bio" onClick={() => toggleBio(3)} style={{ background: "none", border: "none", cursor: "pointer" }}>Bio</button>
                        </p>
                        {openBio === 3 && (
                        <div className="team-featured-desc text-left">
                            <p>
                              Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.
                            </p>
                        </div>
                    )}
                    </div>
                   </div>

                <div className="row">
                     <div className="col-md-4 p-5">
                       <img src="media/images/Seema.jpg"
                         style={{ borderRadius: "50%", width: "40%" }}
                         alt=""
                       />
                       <h4 className="mt-3">Seema Patil</h4>
                       <h5>Director</h5>
                       <p class="text-grey show-bio">
                          <button className="show-bio" onClick={() => toggleBio(4)} style={{ background: "none", border: "none", cursor: "pointer" }}>Bio</button>
                        </p>
                        {openBio === 4 && (
                        <div className="team-featured-desc text-left">
                            <p>
                              Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.
                            </p>
                        </div>
                    )}
                     </div>

                    <div className="col-md-4 p-5">
                      <img src="media/images/Karthik.jpg"
                        style={{ borderRadius: "50%", width: "40%" }}
                        alt=""
                      />
                      <h4 className="mt-3">Karthik Rangappa</h4>
                      <h5>Chief of Education</h5>
                     <p class="text-grey show-bio">
                          <button className="show-bio" onClick={() => toggleBio(5)} style={{ background: "none", border: "none", cursor: "pointer" }}>Bio</button>
                        </p>
                        {openBio === 5 && (
                        <div className="team-featured-desc text-left">
                            <p>
                              Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.
                            </p>
                        </div>
                    )}
                    </div>
                
                    <div className="col-md-4 p-5">
                      <img src="media/images/Austin.jpg"
                        style={{ borderRadius: "50%", width: "40%" }}
                        alt=""
                      />
                      <h4 className="mt-3">Austin Prakesh</h4>
                      <h5>Director Strategy</h5>
                      <p class="text-grey show-bio">
                          <button className="show-bio" onClick={() => toggleBio(6)} style={{ background: "none", border: "none", cursor: "pointer" }}>Bio</button>
                        </p>
                        {openBio === 6 && (
                        <div className="team-featured-desc text-left">
                            <p>
                              Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.
                            </p>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;