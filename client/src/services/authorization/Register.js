import React, { Component } from "react";
import {Link} from 'react-router-dom'
import './styles/Authorization.css'

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      alert("passwords don't match, try again");
    } else {
      console.log(this.state);
    }
  };

  render() {
    return (
      <div className="container register-container">
        <h3 className="display-4">Your Journey begins...</h3>
        <form onSubmit={e => this.onSubmit(e)} className="row">
          <div className=" m-auto register-form">

          <div>
            <input
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={e => this.changeHandler(e)}
              required
              className="form-control"
            />
          </div>
          <br/>
          <div>
            <input
              placeholder="email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={e => this.changeHandler(e)}
              required
              className="form-control"
            />
          </div>
          <br/>
          <div>
            <input
              placeholder="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={e => this.changeHandler(e)}
              required
              className="form-control"
            />
          </div>
          <br/>
          <div>
            <input
              placeholder="confirm password"
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={e => this.changeHandler(e)}
              required
              className="form-control"
            />
          </div>
          <br/>
          <div>
            <button className="btn button">create account</button>
            
          </div>
          <div>
          <Link to="/login">
              or sign-in
            </Link>
          </div>
          </div>
        </form>
      </div>
    );
  }
}
