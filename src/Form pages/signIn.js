import React,{useState,useEffect} from "react";
import computer from "../images/computer.jpg";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

const SignIn = () => {

const history = useHistory();

const [email,setEmail]=useState("");

const [password,setPassword]= useState("");

const [response,setResponse]= useState("");

const handleSubmit = (e)=>{

 e.preventDefault()

  const signInData = {
    email:email,
  password:password
} 

fetch("http://localhost:5000/user/signIn",{
method: "POST",
body: JSON.stringify(signInData),
headers: { "content-type": "application/json" },
}).then((res)=>res.json()).then((res)=>setResponse(res)).then(()=>{
  window.localStorage.setItem('token', response.token);
  window.localStorage.setItem('respo', response.message);
})

if(response.message === email){
          history.push("/admin")
  }
}

return (
    <section className="signIn-login mt-1 py-5">
      <div className="container mt-5">
        
         <div className="row signIn-row justify-content-center">
          <div className="col-lg-5  signIn-box">
            <h1 className="py-4 ">
              Login
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="form-row  py-3 pt-5"></div>
              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
               
                  <input
                    type="email"
                    className="signIn-inp px-3"
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <input
                    type="password"
                    className="signIn-inp px-3"
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
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
                  <button type="submit" className="signIn-btn1 pb-2" > Login </button>
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
