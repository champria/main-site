import React, { Fragment } from "react";
import {Link} from "react-router-dom"

export default function TeamBanner(props){
    return (
      <Fragment>
      <div className="row team-info h-100">
        <div className="col-md-8">
          <div className="row text-center">
            <div className="col-md-4">
              <img src={props.img} alt={props.name}/>
            </div>
            <div className="col-md-8">
              <h3 className="display-3">{props.name}</h3>
              <div className="text-left">
    <p className="lead">Captain: {props.captain}</p>
              </div>
    
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="row h-100 text-center">
            <div className="col-6 my-auto">
              <button className="btn button" disabled>Scrim</button>
            </div>
            <div className="col-6 my-auto">
              <Link>
              <button className="btn button" disabled>message</button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      </Fragment>
    );
  
}
