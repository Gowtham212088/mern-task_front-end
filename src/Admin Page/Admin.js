import React from "react";
import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useHistory } from "react-router-dom";

const Admin = ()=>{

    const history = useHistory();


    return(
        <div className="container-fluid admin-container">
              <div className="row border-2 admin-row justify-content-center align-items-end">
                <div className="col-5 admin-col">
             <img src="https://avatars.githubusercontent.com/u/89139024?v=4" className="admin-img" alt="dp"/>
               
                </div>
              </div>

              <div className="row mt-5">
              <div col-4>  <h2 className="mt-5"> Gowtham KumarV <Button onClick={()=>history.push("/editAdmin")}> Edit <BorderColorIcon  /> </Button>  </h2><br/> <h2 className="text-muted"> Email </h2> <br/> <h2 className="text-muted"> contact </h2> </div>
              </div>

              <div className=" alert alert-primary">
                <h2> Dummy datas </h2>
        <div className="row d-flex h-25 justify-content-between flex-wrap flex-row ticket-box">
          <div className=" col-2   me-1 mx-2 py-5 mb-3    dash-activity">
            <h3> Front-End : 85 % </h3>
          </div>

          <div className=" col-2 me-1 mx-2 py-5 mb-3   dash-activity1">
            <h3> Back-End : 70 % </h3>
          </div>

          <div className="  col-2 me-1 mx-2 py-5 mb-3   dash-activity2">
            <h3> Tasks : 90 % </h3>
          </div>

          <div className=" col-2  me-1 mx-2 py-5 mb-3   dash-activity3">
            <h3> Elegablity : True </h3>
          </div>
        </div>
        </div>
        </div>
    )
}

export default Admin;