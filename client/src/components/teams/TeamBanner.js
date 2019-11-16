import React, { Fragment } from "react";
import {Link} from "react-router-dom"

export default function TeamBanner(props){
    return (
      <Fragment>
      <div className="row team-info h-100">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-4">
              <img src={props.img} alt={props.name}/>
            </div>
            <div className="col-md-8">
              <h3 className="display-3">{props.name}</h3>
    <p className="lead">Captain:</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row h-100">
            <div className="col-md-6 my-auto">
              <button className="btn button">Scrim</button>
            </div>
            <div className="col-md-6 my-auto">
              <button className="btn button">message</button>
            </div>
          </div>
        </div>
      </div>
      </Fragment>
    );
  
}
