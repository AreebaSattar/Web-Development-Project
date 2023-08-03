import React, {Component} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default class SignUp extends Component {

  render() {
    return (

      <form>

        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
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
        <div className="mb-3">
            <label>Profession</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter profession"
              />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
                Sign Up

          </button>
        </div>

        
      </form>


    )
  }
}