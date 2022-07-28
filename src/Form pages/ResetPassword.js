import React from "react";
import {Link} from "react-router-dom";


const ResetPassword = ()=>{
    return(
        <div>
 <section className="reset-login mt-2 py-5">
        <div className="container mt-5">
          
           <div className="row reset-row justify-content-center">
            <div className="col-lg-5  reset-box">
              <h2 className="pt-2 pb-1 text-danger">
              Enter new password
              </h2>  
              <form>
                <div className="form-row  py-3 pt-5"></div>
                <div className="form-row py-3">
                  <div className="offset-1 col-lg-10">
                    <input
                      type="password"
                      className="reset-inp px-3"
                      placeholder="Enter Password"
                    />
                  </div>
                </div>

                <div className="form-row py-3">
                  <div className="offset-1 col-lg-10">
                    <input
                      type="password"
                      className="reset-inp px-3"
                      placeholder="Re-Enter Password"
                    />
                  </div>
                </div>
                
                <div className="form-row py-3">
                  <div className="offset-1 col-lg-10">
                    <button className="reset-btn1 pb-2"> Login </button>
                  </div>
                </div>
              </form>
            </div>
            </div>
        </div>
      </section>
        </div>
    )
}

export default ResetPassword;