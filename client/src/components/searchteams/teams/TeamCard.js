import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TeamCard extends Component {

constructor(props){
  super(props)
  
  this.handleClick = this.handleClick.bind(this)
}

  handleClick(){
this.props.passedTeamObject(this.props)
  }
  
render(){
  return (
    <div className="col-md-3 col-sm-12 container">
      <div key={this.props.id} className="card text-left" onClick={this.handleClick}>
        <Link to={`/team/${this.props.url}/page`}>
          <div className="background" style={{ backgroundImage: `url(${this.props.banner})` }}></div>
          <div
            className="row foreground">
            <div className="col-4 team-image">
              <img
                src={this.props.image}
                alt={"profile image for " + this.props.name}
              />
            </div>
            <div className="col-8 my-auto">
              <h5 className="username">{this.props.name}</h5>
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <p>Game: {this.props.game ? this.props.game : "N/A"}</p>
              <p>Region: {this.props.region ? this.props.region : "N/A"}</p>
              <p>
                Looking for members: {this.props.isLookingForMembers ? "Yes" : "No"}
              </p>
              <p>
                {this.props.organization && "Organization: " + this.props.organization}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
  
}
