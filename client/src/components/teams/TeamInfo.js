import React, { Fragment } from "react";
import {Link} from "react-router-dom"

export default function TeamInfo(props){
    return (
      <Fragment>
      <div className="row">
        <div className="col">
          {props.img 
          ? <img src={props.img} alt={props.name} /> 
          : <i class="fas fa-user-circle" style={{ fontSize: "150px" }}></i>}
          <br/>
          <br/>
          <div className="row">
          <Link to="/team_settings">
          <button className="btn btn-primary"><i class="fas fa-cog"></i> Settings</button>
          </Link>
          </div>
        </div>
        <div className="col">
    <h3 className="display-4">{props.name}</h3>
          <h4>Captain Name</h4>
<p>Game: {props.game}</p>
<p>Organization:{props.organization ? props.organization : "None"}</p>
<p>Looking for new Members: {props.lookingForNewMembers ? "Yes" : "No" }</p>
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
        <p>{props.bio}</p>
      </div>
      </Fragment>
    );
  
}
