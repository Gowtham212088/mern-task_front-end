import React from "react";


const EditData = ()=>{

    return(
        <div className="container-fluid mt-5">
        <div className="row  justify-content-center  g-0">
        <div className="col-lg-4 mt-5 edit-admin">
            <h1 className="py-2">Edit Admin</h1>

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
                    maxLength="12"
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
                  <button className="btn1"> Update Details </button>
                </div>
              </div>
            </form>
          </div>
          </div>
        </div>
    )
}


export default EditData;