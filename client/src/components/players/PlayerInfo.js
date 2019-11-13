import React, { Fragment } from "react";

export default function PlayerInfo(props) {
  return <Fragment>
    <div className="col-3 ">
  <i className="fas fa-user-circle player-image"></i>
  </div>
  <div className="col-3 text-left my-auto">
    <h3 className="display-4">Username</h3>
    <p className="lead">tagline here</p>
  </div>
  </Fragment>;
}
