import React from "react";
import fish from "../images/fish.jpg";

const SignUp = () => {
  return (
    <section className="login mt-1 py-5">
      <div className="container mt-5">
        <div className="row  signUp-row g-0">
          <div className="col-lg-7">
            <img src={fish} alt="img-fluid" className="img-fluid h-100" />
          </div>
          <div className="col-lg-5">
            <h1 className="py-2">Sign Up</h1>

            <form>
              <div className="form-row  py-3 pt-5">
                <div className="offset-1 col-lg-10">
                  <input
                    type="text"
                    className="inp px-3"
                    placeholder="UserName"
                  />
                </div>
              </div>

              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <input
                    type="email"
                    className="inp px-3"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <input
                    type="number"
                    className="inp px-3"
                    placeholder="Contact"
                  />
                </div>
              </div>

              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <input
                    type="password"
                    className="inp px-3"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <input
                    type="url"
                    className="inp px-3"
                    placeholder="User Image"
                  />
                </div>
              </div>

              <div className="form-row  py-3">
                <div className="offset-1 col-lg-10">
                  <button className="btn1"> Sign Up </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
