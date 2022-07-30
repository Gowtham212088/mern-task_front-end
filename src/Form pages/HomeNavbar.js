import React from "react";
import mongo from "../images/mongo.png"
import express from "../images/express.png"
import react from "../images/react.png"
import nodejs from "../images/nodejs.png"
import {Link} from "react-router-dom";



const HomeNavbar = ()=>{

const handleClick = ()=>{
    window.localStorage.clear()
}

    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <Link to="/signUp" className="navbar-brand" href="#"> <img src={mongo} width="45" height="45" /> <img src={express} width="45" height="45" /> <img src={react} width="45" height="45" /> <img src={nodejs} width="45" height="45" /> </Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
      <Link to="/signIn" className="nav-link active" aria-current="page" href="#">Login</Link> 
        </li>
        <li className="nav-item">
        <Link to="/signUp" className="nav-link active" aria-current="page" href="#">Sign Up</Link> 
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Account Settings</a></li>
            <li><a className="dropdown-item" href="#">Privacy Settings</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li onClick={handleClick}><Link to="/signIn"  className="dropdown-item" >Logout</Link></li>
          </ul>
        </li>
      </ul>
      </div>
  </div>
</nav>
    )
}
export default HomeNavbar;