import React from "react"
import background from "../images/image1.png"
import header from "../images/header.png"
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import Form from "antd/lib/form/Form";
import { RestApi } from "../utils/RestApi";

const Layout = () => {

  const [formField, setFormField] = useState({
    username: "",
    password: ""
  });

  function handleChange(e) {
    let data = { ...formField }
    data[e.target.name] = e.target.value
    setFormField(data)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      email: formField.username,
      password: formField.password
    }
    RestApi(payload).then(res => {
      if (res.status === "400") {
        alert(res)
      }
    }).catch(err => alert(err.error))
  }
  return (
    <div>
      <div
        className="col-12"
        id="header"
        style={{
          textAlign: "center",
          height: "40px",
          backgroundColor: "white"
        }}
      >
        <img
          src={header}
          style={{ height: "25px" }}
        />
      </div>
      <div className="row" >
        <div
          className="col-5"
          id="menulogin"
          style={{
            height: "380px",
            backgroundColor: "white"
          }}
        >
          <div className="card" style={{ paddingTop: '100px', marginLeft: '20px' }}>
            <form onSubmit={handleSubmit}>
              <div className="card-body" >
                <h3 align="center">Login ke akun Anda</h3>
                <div className="form-group mt-4">
                  <input placeholder="Username" className="form-control " onChange={handleChange} value={formField.username} name="username" />
                </div>
                <div className="form-group mt-3">
                  <input placeholder="Password" className="form-control"
                    onChange={handleChange} value={formField.password} name="password" />
                </div>

                <div className="row">
                  <div className="col-6">
                    <p>Remember me</p>
                  </div>
                  <div className="col-6" align="right">
                    <p style={{ textDecorationColor: "blue" }}>Forgot Password?</p>
                  </div>

                </div>
                <button className="btn btn-primary mt-1">Login</button>
                <p style={{ marginTop: "30px" }}>Copyright © 2016 Bank Rakyat Indonesia (Persero) Tbk.</p>
              </div>
            </form>
          </div>
        </div>
        <div
          className="col-7"
          id="gambar"
          style={{
            backgroundColor: "white",
            position: "static"
          }}
        >
          <img
            src={background}
            style={{
              height: "500px",
              position: "inherit",
            }}
          />
        </div>
      </div>
    </div >

  )
}
export default Layout

