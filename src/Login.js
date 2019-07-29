import React, { Component } from 'react'
import './All.css'
import {Link} from 'react-router-dom'


class Login extends Component {
  
    
    render() {
        return (
            <div className="">
                <div className="container">
                    <div className="card card-login mx-auto mt-5">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form method="POST">
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name="adminname" required="required" autofocus="autofocus"></input>
                                        <label for="inputEmail">Email address</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password"required="required"></input>
                                        <label for="inputPassword">Password</label>
                                    </div>
                                </div>
                                <Link to ="Newemp"><button className="btn btn-primary btn-block">Login</button></Link>
                            </form>
                             <div className="text-center">
                                <Link to="Forget" className="d-block small">Forgot Password?</Link>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
