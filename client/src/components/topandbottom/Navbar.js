import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

export default class Navbar extends Component {
  state = {
    signedIn: false
  };

  toggle = () => {
    this.setState({
      signedIn: !this.state.signedIn
    },()=>{
      this.state.signedIn ? alert("successfully signed in!") : alert("successfully signed out")
    })
  }
  render() {
    let { signedIn } = this.state;

    let signedInFalse = (
      <Link to="/register" onClick={this.toggle}>
        <li className="nav-link">Sign in/Register</li>
      </Link>
    );

    let Account = (
      <Fragment>
        <Link to="/player/:playerId/page">
          <li className="nav-link">
            <i className="fas fa-user-circle d-none d-sm-block"></i>
            <span className="d-block d-sm-none">Account</span>
          </li>
        </Link>
        <Link to="/player/:playerId/chat">
          <li className="nav-link">
          <i className="fas fa-comment-alt d-none d-sm-block"></i>
          <span className="d-block d-sm-none">Chat</span>
          </li> 
        </Link>
        <Link to="/player/:playerId/settings">
          <li className="nav-link">
            <i className="fas fa-cog d-none d-sm-block"></i> 
            <span className="d-block d-sm-none">Settings</span>
          </li>
        </Link>
        <Link>
          <li className="nav-link" onClick={this.toggle}>
          Sign out
          </li>
        </Link>
      </Fragment>
    );

    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ backgroundColor: "#53a09c" }}
      >
        <Link to="/">
          <h3 className="nav-text">
            <i className="fas fa-shield-alt"></i> CHAMPRIA
          </h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-left" id="navbarSupportedContent">
          <ul className="navbar-nav ">
          <Link to="/team/search">
              <li className="nav-link">Browse Teams</li>
            </Link>
            <Link to="/player/search">
              <li className="nav-link">Browse Players</li>
            </Link>
          </ul>
          <ul className="navbar-nav ml-auto">
            {signedIn ? Account : signedInFalse}
          </ul>
        </div>
      </nav>
    );
  }
}
