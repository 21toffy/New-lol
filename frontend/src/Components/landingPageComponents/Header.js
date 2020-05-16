import React from 'react';
import './landingPage.css';

function Header(){
    return (
        <div>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark nav-masthead head-bann-br">
          {/* className = 'head-bann-br' */}
        <div className="container">
          <a className="navbar-brand" href="#"> <h3 className="masthead-brand mb-0"><i className="fas fa-fire-alt"></i></h3></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link p-2 font-weight-bold text-white" href="">Home </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2 font-weight-bold text-white" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2 font-weight-bold text-white" href="">url-Shortner</a>
              </li>
            </ul>
            <a className="nav-link font-weight-bold p-2 text-white" href="">Logout</a>
            <a className="nav-link font-weight-bold p-2 text-white" href="">notesboard</a>
            <a className="nav-link text-white p-2 font-weight-bold" href="">Login</a>
            <a className="nav-link text-white p-2 font-weight-bold" href="">Regist</a>



          </div>
          </div>
        </nav>
        <div className= 'head-bann-br'>

        </div>
        </div>
    )
}

export default Header;