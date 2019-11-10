import React from 'react';
import {Link} from 'react-router-dom'

export default function TeamFilterBox(props){
    return(
        <div className="text-left">
            <div className="row">
        <div className="col-12">
          {props.names.map(name => (
            <Link to={`/team/${name.url}/page`}>
              <div className="row">
                <div className="col-4">
                  <img
                    src={name.image}
                    alt={name.name}
                    className="img-fluid"
                  />
                </div>
                <div className="col-8">
                  <p>{name.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
        </div>
    )
}