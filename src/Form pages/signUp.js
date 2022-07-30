import React,{useState} from "react";
import fish from "../images/fish.jpg";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  
  const history = useHistory()
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [contact,setContact]=useState("");
  const [password,setPassword]=useState("");
  const [userDp,setUserDp]=useState("");

const handleSubmit = (event)=>{

  event.preventDefault()

  const signUpData = {
    name:name,
    email:email,
    contact:contact,
    password:password,
    userDp:userDp
  } 

fetch("http://localhost:5000/create/newUsers",{
method: "POST",
body: JSON.stringify(signUpData),
headers: { "content-type": "application/json" },

}).then(()=>history.push("/signIn")) 

}

  return (
    <section className="login mt-1 py-5">
      <div className="container mt-5">
        <div className="row  signUp-row g-0">
          <div className="col-lg-7">
            <img src={fish} alt="img-fluid" className="img-fluid h-100" />
          </div>
          <div className="col-lg-5">
            <h1 className="py-2">Sign Up</h1>

            <form onSubmit={handleSubmit}>
              <div className="form-row  py-3 pt-5">
                <div className="offset-1 col-lg-10">
                  <input
                    type="text"
                    className="inp px-3"
                    placeholder="UserName"
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <input
                    type="email"
                    className="inp px-3"
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}
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
                    onChange={(e)=>setContact(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <input
                    type="password"
                    className="inp px-3"
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <input
                    type="url"
                    className="inp px-3"
                    placeholder="User Image"
                    onChange={(e)=>setUserDp(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row  py-3">
                <div className="offset-1 col-lg-10">
                  <button type="submit" className="btn1"> Sign Up </button>
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
