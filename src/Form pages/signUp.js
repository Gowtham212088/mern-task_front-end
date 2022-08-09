import React,{useState,useEffect} from "react";
import fish from "../images/fish.jpg";
import { useHistory } from "react-router-dom";
import { Api } from "../API";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";

const SignUp = () => {

  const history = useHistory()
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [contact,setContact]=useState("");
  const [password,setPassword]=useState("");
  const [userDp,setUserDp]=useState("");
  const [response,setResponse]=useState("");

  // const city = [
  //   {
  //     value: 'madurai',
  //     label: 'madurai',
  //   },
  //   {
  //     value: 'chennai',
  //     label: 'chennai',
  //   },
  //   {
  //     value: 'banglore',
  //     label: 'banglore',
  //   },
  //   {
  //     value: 'hydrabad',
  //     label: 'hydrabad',
  //   },
  // ];

  const [res,setRes]= useState([])



  const fill = res.map((elem)=>{
    return elem.altSpellings
 })
 const round = fill.flat()
 
 const final = round.map((elem)=>{
    const datas = {
       value:elem,
       label:elem
    }
    return datas
 })
 console.log(final);

useEffect(() => {
  var axios = require("axios");
  var data = "";

  var config = {
    method: "get",
    url: "https://restcountries.com/v3.1/name/united",
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      setRes(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
}, []);





  const city = [
    {
      value: 'madurai',
      label: 'madurai',
    },
    {
      value: 'chennai',
      label: 'chennai',
    },
    {
      value: 'banglore',
      label: 'banglore',
    },
    {
      value: 'hydrabad',
      label: 'hydrabad',
    },
  ];

  const [country, setCountry] = React.useState('');
console.log(country);
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

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
//     userDp:userDp,
//     country:country
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
  "userDp": userDp,
  "country":country
};
console.log(response);
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
                <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={country}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {final.map((option,key) => (
            <MenuItem style={{color:"black"}} key={key} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
                </div>
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
