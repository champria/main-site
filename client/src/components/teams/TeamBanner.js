import React, { Fragment } from "react";
import {Link} from "react-router-dom"

export default function TeamBanner(props){
    return (
      <Fragment>
      <div className="row">
        <div className="col-md-8">
          <div className="row h-100">
            <div className="col-md-3">
              <img src={props.img} alt={props.name}/>
            </div>
            <div className="col-md-9 text">
              <h3 className="display-4 my-auto">{props.name}</h3>
              <div className="">
    <p className="lead my-auto">Captain: {props.captain}</p>
              </div>
    
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="row h-100 text-left">
            <div className="col-6 my-auto">
              <button className="btn button">Scrim</button>
            </div>
            <div className="col-6 my-auto">
              <Link>
              <button className="btn button">message</button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      </Fragment>
    );
  
}
