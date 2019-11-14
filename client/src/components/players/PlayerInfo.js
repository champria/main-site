import React, { Fragment } from "react";

export default function PlayerInfo(props) {
  
  return <Fragment>
    <div className="col-md-3 col-sm-12">
  {props.img ? 
  <img src={props.img} alt={props.name} className="player-image"/>
  :<i className="fas fa-user-circle player-image"></i>}
  </div>
  <div className="col-md-3 col-sm-12 text-left my-auto">
    <h3 className="display-4">{props.name}</h3>
  <p className="lead">{props.tagline}</p>
  </div>
  </Fragment>;
}
