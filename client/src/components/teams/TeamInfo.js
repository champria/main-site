import React, { Component,Fragment } from "react";
import {Link} from "react-router-dom"

export default class TeamInfo extends Component {
  render() {
    return (
      <Fragment>
      <div className="row">
        <div className="col">
          <i class="fas fa-user-circle" style={{ fontSize: "150px" }}></i>
          <br/>
          <br/>
          <div className="row">
          <Link to="/team_settings">
          <button className="btn btn-primary"><i class="fas fa-cog"></i> Settings</button>
          </Link>
          </div>
        </div>
        <div className="col">
          <h3>Team Name</h3>
          <h4>Captain Name</h4>
          <p>Game:</p>
          <p>Organization:</p>
          <p>Looking for new Members:</p>
          <div className="row">
            <div className="col-6">
              <button className="btn btn-primary">message</button>
            </div>
            <div className="col-6">
              <button className="btn btn-primary">scrim</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <p>Bio:</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      </Fragment>
    );
  }
}
