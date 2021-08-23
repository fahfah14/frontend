import React from 'react'
import Link from 'next/dist/client/link'

export default function register() {
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
  <div className="register-box">
    <div className="register-logo">
     <h1><p>Admin.LTE</p></h1>
    </div>
    <div className="card">
      <div className="card-body register-card-body">
       <h3> <p className="login-box-msg">Register a new membership</p></h3>
        <form action="/login" method="post">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Full name" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-user" />
              </div>
            </div>
          </div>
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
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Retype password" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="icheck-primary">
                <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                <label htmlFor="agreeTerms">
                  I agree to the <a href="#">terms</a>
                </label>
              </div>
            </div>
            {/* /.col */}
            <div className="col-4">
              <button type="submit"  class="btn btn-success">Register</button>
            </div>
            {/* /.col */}
          </div>
        </form>
       
        <Link href="/login">
                  <a className="nav-link">
                  I already have a user account
                  </a>
                </Link>
      </div>
      {/* /.form-box */}
    </div>{/* /.card */}
  </div>
  {/* /.register-box */}
  {/* jQuery */}
  {/* Bootstrap 4 */}
  {/* AdminLTE App */}
  </center>

        </div>
    )
}
