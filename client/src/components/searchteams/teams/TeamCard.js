import React from "react";
import { Link } from "react-router-dom";

export default function PlayerCard(props) {
  return (
    <div className="col-3 container">
      <div key={props.id} className="card text-left">
        <Link to={`/team/${props.url}/page`}>
          <div
            className="row"
            style={{ backgroundImage: `url(${props.banner})` }}
          >
            <div className="col-sm-5">
              <img
                src={props.image}
                alt={"profile image for " + props.name}
                className="img-fluid"
              />
            </div>
            <div className="col-sm-7 my-auto">
              <h5 className="username">{props.name}</h5>
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <p>Game: {props.game ? props.game : "N/A"}</p>
              <p>Region: {props.region ? props.region : "N/A"}</p>
              <p>
                Looking for members: {props.isLookingForMembers ? "Yes" : "No"}
              </p>
              <p>
                {props.organization && "Organization: " + props.organization}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
