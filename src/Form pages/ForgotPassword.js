import React from "react";
import {Link} from "react-router-dom";


const ForgotPassword = ()=>{
    return(
        <section className="verification-login mt-2 py-5">
        <div className="container mt-5">
          
           <div className="row verification-row justify-content-center">
            <div className="col-lg-5  verification-box">
              <h3 className="pt-2 pb-1 text-danger">
                Trouble logging In ?
              </h3>
              <h5 className="text-primary"> Enter your email and we will send <br/>  you the link to get back into your account. </h5>
  
              <form>
                <div className="form-row  py-3 pt-5"></div>
                <div className="form-row py-3">
                  <div className="offset-1 col-lg-10">
                    <input
                      type="email"
                      className="verification-inp px-3"
                      placeholder="Email"
                    />
                  </div>
                </div>
                 
                <div className="form-row py-3">
                  <div className="offset-1 col-lg-10">
                    <Link to="/signIn" className="verification-pass"> Back to login </Link>
                  </div>
                </div>
                <div className="form-row py-3">
                  <div className="offset-1 col-lg-10">
                    <button className="verification-btn1 pb-2"> Login </button>
                  </div>
                </div>
              </form>
            </div>
            </div>
        </div>
      </section>
    )
}

export default ForgotPassword;