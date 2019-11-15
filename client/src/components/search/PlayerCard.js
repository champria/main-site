import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PlayerCard extends Component {
constructor(props){
  super(props)
  this.handleClick = this.handleClick.bind(this)
}
  handleClick(){
    this.props.passedObject(this.props)
  }

  render(){
    return (
      <div className="col-md-3 col-sm-12 container player-container" onClick={this.handleClick}>
        <div key={this.props.id} className="player-card card text-left">
          <Link to={`/player/${this.props.url}/page`}>
            <div className="background" style={{ backgroundImage: `url(${this.props.banner})` }}></div>
            <div 
            className="row foreground">
              <div className="col-5">
                <img
                  src={this.props.img}
                  alt={"profile image for " + this.props.username}
                />
              </div>
              <div className="col-7 my-auto">
                <h5 className="username">{this.props.username}</h5>
              </div>
            </div>
  
            <div className="row ">
              <div className="col ">
                <p>Game: {this.props.game ? this.props.game : "N/A"}</p>
                <p>Region: {this.props.region ? this.props.region : "N/A"}</p>
                <p>Team: {this.props.team ? this.props.team : "N/A"}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
  
}
