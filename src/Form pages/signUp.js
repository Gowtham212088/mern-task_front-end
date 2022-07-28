import React from "react";
import fish from "../images/fish.jpg"



const SignUp = ()=>{
    
    return (
        <section className="login mt-3 py-5">
             <div className="container mt-5">
                  <div className="row  g-0">
                  <div className="col-lg-6">
               <img src={fish} alt="img-fluid"  className="img-fluid h-100"/>
                  </div>
                  <div className="col-lg-6">
                  <h1 className="py-4 animate__animated animate__b animate_infinite" >Welcome back</h1>
                 
                 <form >
<div className="form-row  py-3 pt-5">
  <div className="offset-1 col-lg-10">
    <input type="text" className="inp px-3" placeholder="UserName" />
  </div>
</div>
<div className="form-row py-3">
  <div className="offset-1 col-lg-10">
    <input type="email" className="inp px-3" placeholder="Email" />
  </div>
</div>
<div className="form-row py-3">
  <div className="offset-1 col-lg-10">
    <input type="number" className="inp px-3" placeholder="Contact" />
  </div>
</div>
<div className="form-row py-3">
  <div className="offset-1 col-lg-10">
    <input type="password" className="inp px-3" placeholder="Password" />
  </div>
</div>
<div className="form-row py-3">
  <div className="offset-1 col-lg-10">
    <input type="url" className="inp px-3" placeholder="User Image" />
  </div>
</div>
<div className="form-row py-3">
  <div className="offset-1 col-lg-10">
   <span className="forgot-pass"> Forgot Password ? </span>
  </div>
</div>
<div className="form-row py-3">
  <div className="offset-1 col-lg-10">
   <button className="btn1 pb-2"> Sign Up  </button>
  </div>
</div>
                 </form>
                 
                  </div>
                  </div>
             </div>
        </section>
    )
}

export default SignUp;