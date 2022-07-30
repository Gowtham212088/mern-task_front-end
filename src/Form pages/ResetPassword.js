import React, { useState } from "react";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";

const ResetPassword = ()=>{

const {id,token} = useParams();

const [password,setPassword]= useState("");
const [newPassword,setNewPassword]= useState("");

const handleSubmit = (event)=>{

  event.preventDefault();

  var axios = require('axios');
var data = JSON.stringify();

var config = {
  method: 'post',
  url: `http://localhost:5000/new-password/${id}/${token}`,
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
}

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
                    onChange={(event)=>setPassword(event.target.value)}
                      type="password"
                      className="reset-inp px-3"
                      placeholder="Enter Password"
                    />
                  </div>
                </div>

                <div className="form-row py-3">
                  <div className="offset-1 col-lg-10">
                    <input
                    onChange={(event)=>setNewPassword(event.target.value)}
                      type="password"
                      className="reset-inp px-3"
                      placeholder="Re-Enter Password"
                    />
                  </div>
                </div>
                
                <div className="form-row py-3">
                  <div className="offset-1 col-lg-10">
                    <button type="submit" className="reset-btn1 pb-2"> Login </button>
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