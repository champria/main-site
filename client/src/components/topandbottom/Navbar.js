import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

export default class Navbar extends Component {
  state = {
    signedIn: true,
    name:""
  };

  toggle = () => {
    this.setState({
      signedIn: !this.state.signedIn
    },()=>{
      this.state.signedIn 
      ? alert("Successfully signed in") 
      : alert("Successfully signed out")
    })
  }

  componentDidMount(){
    this.props.name && this.toggle()
  }
  render() {
    

    let { signedIn } = this.state;

    let signedInFalse = (
      <Fragment>
<Link to="/login">
        <li className="nav-link">Sign in</li>
      </Link>
      <Link to="/register">
        <li className="nav-link">Register</li>
      </Link>
      </Fragment>
      
    );

    let Account = (
      <Fragment>
        <Link to="/player/:playerId/page">
          <li className="nav-link">
            <i className="fas fa-user-circle d-none d-sm-block"></i>
    <span className="d-block d-sm-none">{this.props.name}</span>
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
        <Link to="/">
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
          <ul className="navbar-nav spacing">
          <Link to="/team/search">
              <li className="nav-link"><i className="fas fa-users"></i> Browse Teams</li>
            </Link>
            <Link to="/player/search">
              <li className="nav-link"> <i className="fas fa-user"></i> Browse Players</li>
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
