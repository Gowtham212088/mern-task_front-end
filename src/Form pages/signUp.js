import React,{useState} from "react";
import fish from "../images/fish.jpg";
import { useHistory } from "react-router-dom";
import { Api } from "../API";


const SignUp = () => {

  const history = useHistory()
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [contact,setContact]=useState("");
  const [password,setPassword]=useState("");
  const [userDp,setUserDp]=useState("");
  const [response,setResponse]=useState("");

  //? Base 64 Code for image uploading.
  let base64code = ""
  const onChange = e => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };
 
  const onLoad = fileString => {
      console.log(fileString);
      setUserDp(fileString)
    this.base64code = fileString
  };
 
  const getBase64 = file => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };
  

const handleSubmit = (event)=>{

  event.preventDefault()

//   const signUpData = {
//     name:name,
//     email:email,
//     contact:contact,
//     password:password,
//     userDp:userDp
//   } 

// fetch(`${Api}/create/newUsers`,{
// method: "POST",
// body: JSON.stringify(signUpData),
// headers: { "content-type": "application/json" },

// }).then(()=>history.push("/signIn")) 

var axios = require('axios');
var data = {
  "name": name,
  "email": email,
  "contact": contact,
  "password": password,
  "userDp": userDp
};
console.log(data);
var config = {
  method: 'post',
  url: `${Api}/create/newUsers`,
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  setResponse(response.data);
}).then(()=>history.push("/signIn")) 
.catch(function (error) {
  console.log(error);
});

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
                <span style={{color:"red"}}> This feature is in Under construction </span>
                <input style={{border:"1px solid red"}} type="file" onChange={onChange} />
                {/* <textarea rows="50" cols="50" value={this.base64code}></textarea> */}
                </div>
              </div>

              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <span style={{color:"blue"}}> Copy image address and paste here  </span>
                  <input
                    type="url"
                    className="inp px-3"
                    placeholder="User Image"
                    onChange={(e)=>setUserDp(e.target.value)}
                   value={userDp}
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
