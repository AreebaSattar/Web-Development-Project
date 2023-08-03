import React, { useState, Component } from 'react'
export default class Login extends Component {
  render() {

    const[isSignUp, setIsSignUp] = useState(false)


    return (
 

      <form className = "authForm">

        <h3>(isSignUp ? "Sign up" : "Log In")</h3>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </div>

      </form>
    )
  }
}