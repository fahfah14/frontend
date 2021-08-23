import React from 'react'
import Link from 'next/dist/client/link'

export default function login() {
    return (
        <div>

              <center>
  {/* Google Font: Source Sans Pro */}
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
  {/* Font Awesome */}
  <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css" />
  {/* icheck bootstrap */}
  <link rel="stylesheet" href="../../plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
  {/* Theme style */}
  <link rel="stylesheet" href="../../dist/css/adminlte.min.css" />
  <div className="login-box">
    <div className="login-logo">
     
    <h1><p>Admin.LTE</p></h1>
    </div>
    {/* /.login-logo */}
    <div className="card">
      <div className="card-body login-card-body">
       <h3> <p className="login-box-msg">Signin to start your session</p></h3>
        
        <form action="/" method="post">
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Password" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="icheck-primary">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">
                  Remember Me
                </label>
              </div>
            </div>
            {/* /.col */}
            <div className="col-4">
              <button type="submit" class="btn btn-success">SignIn</button>
            </div>
            {/* /.col */}
          </div>
          
        </form>
       
        
        {/* /.social-auth-links */}
        <p className="mb-1">
        <Link href="/register">
                  <a className="nav-link">
                  Register a new membership
                  </a>
                </Link>
        
        </p>
      </div>
      {/* /.login-card-body */}
    </div>
  </div>
  {/* /.login-box */}
  {/* jQuery */}
  {/* Bootstrap 4 */}
  {/* AdminLTE App */}
  </center>

        </div>
    )
}
