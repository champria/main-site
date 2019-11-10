import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PlayerAccount extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3 text-left">
            <div>
              <i
                className="fas fa-user-circle"
                style={{ fontSize: "200px" }}
              ></i>
            </div>
            <h3>Username</h3>
            <ul>
              <li>Game:</li>
              <li>Region:</li>
              <li>Team:</li>
            </ul>
            <Link to="/player_settings">
            <button className="btn btn-primary"><i class="fas fa-cog"></i> Settings</button>
          </Link>
          </div>
          
          <div className="col-9">
            <div className="row">
              <div className="col-6">
                <i class="fab fa-youtube" style={{ fontSize: "200px" }}></i>
              </div>
              <div className="col-6 my-auto">
                <div className="row">
                  <div className="col-6">
                    <Link>
                      <button className="btn btn-primary">invite</button>
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link>
                      <button className="btn btn-primary">message</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row text-left">
              <div className="col">
                <p>Bio:</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
