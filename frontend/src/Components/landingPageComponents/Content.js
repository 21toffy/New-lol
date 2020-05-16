import React from 'react';
import './landingPage.css';

function Content(){
    return (
        
        <div>
        <div  classname = 'head-bann-br'>

        </div>
       
        <div className="jumbotron jumbotron-odi-hero bg-primary head-bann-br">
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
 
 
         </div>
     )
 }
 

export default Content;