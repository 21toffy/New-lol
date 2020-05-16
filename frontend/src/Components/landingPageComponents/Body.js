import React from 'react';
import './landingPage.css';

function Content(){
    return (
        <div>
       
       <div class="jumbotron jumbotron-odi-hero bg-primary">
  <div class="jumbotron-overlay ">
      <div class="container jumbotron-padding  text-center">
      <h4 class="">Create Your personalized notes and shorten your URL at a very high speed.</h4>
  
      </div>
      <!-- features start -->
      <div class="container mt-3 ">
        <h2 class="py-4 h3 text-center  text-capitalize">Our Products</h2>
       <div class="row mt-5">
         <div class="col-md-6">
           <div class="card shadow">
             <div class="card-body">
               <div class="media">
                 <div class="mr-4" style="height:64px;width:64px;">
                   <i class="fa fa-rocket card-img-top fa-4x text-primary" aria-hidden="true"></i>
                 </div>
                 <div class="media-body">
                   <h4 class="mt-0 tex-dark">NotesCard</h4>
                   <p class=" text-secondary">You can create personalized notes in a really really short time :)</p>
                   <a href="" class="btn btn-primary">Go to notes</a>
                    <a href="" class="btn btn-primary">Go to notes</a>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div class="col-md-6">
           <div class="card shadow">
             <div class="card-body">
               <div class="media">
                 <div class="mr-4" style="height:64px;width:64px;">
                   <i class="fa fa-leaf card-img-top fa-4x text-primary" aria-hidden="true"></i>
                 </div>
                 <div class="media-body">
                   <h4 class="mt-0 tex-dark">Url Shortner</h4>
                   <p class=" text-secondary">All your Urls can be shortened in a matter of lesser than 5 seconds.</p>
                 <a class="btn btn-primary" href="">Go to Shortner</a>
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

export default Body;