import React, { useState } from "react";


const EditData = ()=>{

  const [username,setUsername]=useState("");

  const [email,setEmail] = useState("");

  const [contact,setContact]=useState("");

  const [password,setPassword]= useState("");

  const [image,setImage]=useState("");

 

const handleSubmit=(event)=>{

  event.preventDefault()

  var axios = require('axios');
  var data = JSON.stringify({
    "name": username,
    "email": email,
    "contact": contact,
    "password": password,
    "userDp": image
  });
  
  var config = {
    method: 'put',
    url: 'http://localhost:5000/change/user',
    headers: { 
        "x-auth-token": localStorage.getItem("token"),
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
        <div className="container-fluid mt-5">
        <div className="row  justify-content-center  g-0">
        <div className="col-lg-4 mt-5 edit-admin">
            <h1 className="py-2">Edit Admin</h1>

            <form onSubmit={handleSubmit}>
              <div className="form-row  py-3 pt-5">
                <div className="offset-1 col-lg-10">
                  <input
                    type="text"
                    className="inp px-3"
                    placeholder="UserName"
                    onChange={(event)=>setUsername(event.target.value)}
                  />
                </div>
              </div>

              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <input
                    type="email"
                    className="inp px-3"
                    placeholder="Email"
                    onChange={(event)=>setEmail(event.target.value)}

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
                    onChange={(event)=>setContact(event.target.value)}

                  />
                </div>
              </div>

              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <input
                    type="password"
                    className="inp px-3"
                    placeholder="Password"
                    onChange={(event)=>setPassword(event.target.value)}

                  />
                </div>
              </div>

              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <input
                    type="url"
                    className="inp px-3"
                    placeholder="User Image"
                    onChange={(event)=>setImage(event.target.value)}

                  />
                </div>
              </div>

              <div className="form-row  py-3">
                <div className="offset-1 col-lg-10">
                  <button type="submit" className="btn1"> Update Details </button>
                </div>
              </div>
            </form>
          </div>
          </div>
        </div>
    )
}


export default EditData;