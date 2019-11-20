import React, { Component } from "react";
import {Link} from 'react-router-dom'
import './styles/Authorization.css'

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault()
    this.props.isLoggedIn(this.state.username)
  };

  render() {
    return (
      <div className="container login-container">
        
        <h3 className="display-3">Welcome back Champion</h3>
        <form onSubmit={e => this.onSubmit(e)} className="row">
          <div className="m-auto login-form">
          <div className="form-group">
          <div>
            <input
              placeholder="username"
              type="text"
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
            <button className="btn button">Log in</button>
          </div>
          <div>
          <Link to="/register">
             or sign-up
            </Link>
          </div>
          </div>
          </div>
        </form>
      </div>
    );
  }
}
