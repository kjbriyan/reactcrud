import React from "react"
import background from "../images/image1.png"
import header from "../images/header.png"
import { Layout } from 'antd';

const Login = () => {
    return (
        <div className="container ">
            <div className="header" align="center" style={{ margin: '20px' }}>
                <img src={header} alt="header" />
            </div>
            <div className="row" >
                <div className="col-md-4" >
                    <div className="card " >
                        <div className="card-body" style={{ paddingTop: '100px' }}>
                            <h3 align="center">Login ke akun Anda</h3>
                            <div className="form-group mt-4">
                                <input placeholder="Personal Number (PN)" className="form-control " />
                            </div>
                            <div className="form-group mt-3">
                                <input placeholder="Password" className="form-control" />
                            </div>
                            <div className="" >
                                <p>Remember me</p>
                                <p>Forgot Password?</p>
                            </div>
                            <button className="btn btn-primary mt-1">Login</button>

                        </div>
                        <p>Copyright © 2016 Bank Rakyat Indonesia (Persero) Tbk.</p>
                    </div>
                </div>
                <div className="col-md-8" style={{
                    backgroundImage: `url(${background})`
                }}>
                </div>
            </div>
        </div>
    )
}
export default Login