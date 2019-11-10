import React from "react";
import { Link } from "react-router-dom";

export default function FilterBox(props) {
  return (
    <div id="filteredGames" className="text-left">
      <div className="row">
        <div className="col-12">
          {props.names.map(name => (
            <Link to={`/player/${name.url}/page`}>
              <div className="row">
                <div className="col-4">
                  <img
                    src={name.img}
                    alt={name.username}
                    className="img-fluid"
                  />
                </div>
                <div className="col-8 my-auto">
                  <p>{name.username}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
