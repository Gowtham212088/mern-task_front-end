import React from "react";
import mongo from "../images/mongo.png"
import express from "../images/express.png"
import react from "../images/react.png"
import nodejs from "../images/nodejs.png"
import {Link} from "react-router-dom";



const Navbar = ()=>{
    return(
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <Link to="/signUp" class="navbar-brand" href="#"> <img src={mongo} width="45" height="45" /> <img src={express} width="45" height="45" /> <img src={react} width="45" height="45" /> <img src={nodejs} width="45" height="45" /> </Link> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
      <Link to="/signIn" class="nav-link active" aria-current="page" href="#">Login</Link> 
        </li>
        <li class="nav-item">
        <Link to="/signUp" class="nav-link active" aria-current="page" href="#">Sign Up</Link> 
        </li>
      </ul>
      </div>
  </div>
</nav>
    )
}
export default Navbar;