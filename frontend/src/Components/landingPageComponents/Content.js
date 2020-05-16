import React from 'react';
import './landingPage.css';

function Content(){
    return (
        
        <div>
        {/* <div className = 'head-bann-br'>my</div> */}

        <div className="jumbotron jumbotron-odi-hero bg-primary">
        <div className="jumbotron-overlay ">
       <div className="container jumbotron-padding  text-center">
       <h4 className="">Create Your personalized notes and shorten your URL at a very high speed.</h4>
   
       </div>
       <div className="container mt-3">
         <h2 className="py-4 h3 text-center  text-capitalize">Our Products</h2>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <div className="media">
                  <div className="mr-4 Products">
                    <i className="fa fa-rocket card-img-top fa-4x text-primary" aria-hidden="true"></i>
                  </div>
                  <div className="media-body">
                    <h4 className="mt-0 tex-dark">NotesCard</h4>
                    <p className=" text-secondary">You can create personalized notes in a really really short time :)</p>
                    <a href="" className="btn btn-primary">Go to notes</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <div className="media">
                  <div className="mr-4 Products">
                    <i className="fa fa-leaf card-img-top fa-4x text-primary" aria-hidden="true"></i>
                  </div>
                  <div className="media-body">
                    <h4 className="mt-0 tex-dark">Url Shortner</h4>
                    <p className=" text-secondary">All your Urls can be shortened in a matter of lesser than 5 seconds.</p>
                  <a className="btn btn-primary" href="">Go to Shortner</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        </div>
        </div>
        </div>

        {/* EENNDD OOFF BBAANNEERR */}

        {/* BEINIG OF WHY CHOOSE US */}

        <div class="container mt-5" id="about">
                   <h1 class="text-center py-4">Why to choose Toffy-Alsaheem landing</h1>

                  <div class="row text-center mt-5">
                   <div class="col-md-3">
                    <div class="card shadow">
                      <div class="card-body">
                      <div class="py-3 text-center"> <i class="fa fa-rocket card-img-top fa-4x text-primary" aria-hidden="true"></i></div>
                      <div class="card-body">
                        <h4 class="card-title">Easy To Use Shortner </h4>
                        <p class="card-text">shorten urls in a matter of 2 seconds </p>
                       </div>
                      </div>
                    </div>
                    </div>
                      <div class="col-md-3">
                     <div class="card shadow">
                      <div class="card-body">
                       <div class="py-3 text-center">
                          <i class="fa fa-leaf card-img-top fa-4x text-primary" aria-hidden="true"></i>
                        </div>
                      <div class="card-body">
                        <h4 class="card-title">Quick Notes</h4>
                        <p class="card-text">You can store and access notes and ideas easily while on the web</p>
                       </div>
                      </div>
                    </div>
                    </div>
                      <div class="col-md-3">
                     <div class="card shadow">
                      <div class="card-body">
                      <div class="py-3 text-center"><i class="fa fa-tablet card-img-top fa-4x text-primary" aria-hidden="true"></i></div>

                      <div class="card-body">
                        <h4 class="card-title">Responsive </h4>
                        <p class="card-text">Our website is fast and works on all devices (desktop,tablets and phones). </p>
                        </div>
                      </div>
                    </div>
                    </div>


                    <div class="col-md-3">
                     <div class="card shadow">
                      <div class="card-body">
                      <div class="py-3 text-center">
                          <i class="fa fa-bolt card-img-top fa-4x text-primary" aria-hidden="true"></i>

                     </div>
                      <div class="card-body">
                        <h4 class="card-title">Easy customisation</h4>
                        <p class="card-text">Our templates are clean,light weight and technically refined. </p>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                {/* EENNDD OOFF WWHHYY CCHOOSSEE UUSS */}

                {/* BEGINING OF More from us */}
                <div class="container mt-5">
                   <h3 class="pt-4 d-inline latest-news">Other interesting projects</h3>

                    <a href="" class="btn btn-outline-primary btn-circle d-inline float-right">View all</a>
                  <div class="row mt-5">
                  <div class="col-md-6">
              <div class="card mb-4 shadow-sm">
                <img src="https://i.ibb.co/6cQtj2p/38351524-s-400-v-4.jpg" alt="38351524-s-400-v-4" border="0"/>
                <div class="card-body">
                  <h4 class="card-title mb-3 text-dark">
                  <a href="#" class="text-decoration-none text-dark font-weight-bold">
                    This is Alsaheem
                  </a>
                </h4>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>

                </div>
                 <div class="card-footer text-muted border-0 bg-white">

                  </div>
              </div>
            </div>
            <div class="col-md-6">
             <div class="card mb-4 shadow-sm">
                
                <img src="https://i.ibb.co/h9m2KfW/21toffy-1.jpg" alt="21toffy-1" border="0"/>
                <div class="card-body">
                  <h4 class="card-title mb-3 text-dark">
                    <a href="#" class="text-decoration-none text-dark font-weight-bold">
                   This is 21Toffy
                  </a>
                  </h4>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>

                </div>
              </div>
            </div>


    </div>
</div> 
 
         </div>
     )
 }
 

export default Content;