import React from "react";
import computer from "../images/computer.jpg";
import {Link} from "react-router-dom";


const SignIn = () => {
  return (
    <section className="signIn-login mt-1 py-5">
      <div className="container mt-5">
        
         <div className="row signIn-row justify-content-center">
          <div className="col-lg-5  signIn-box">
            <h1 className="py-4 ">
              Login
            </h1>

            <form>
              <div className="form-row  py-3 pt-5"></div>
              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <input
                    type="email"
                    className="signIn-inp px-3"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <input
                    type="password"
                    className="signIn-inp px-3"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <Link to="/forgot" className="forgot-pass"> Forgot Password ? </Link>
                </div>
              </div>
              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <button className="signIn-btn1 pb-2"> Login </button>
                </div>
              </div>
            </form>
          </div>
          </div>
      </div>
    </section>
  );
};

export default SignIn;
