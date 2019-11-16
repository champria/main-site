import React, { Component } from "react";
import { Link } from "react-router-dom";
import TeamBanner from "./TeamBanner";
import TeamMembers from "./TeamMembers";
import Calendar from "./Calendar";
import TeamFeed from "./TeamFeed";
import "./styles/Teams.css";

export default class TeamAccount extends Component {

constructor(props){
  super(props)
  this.state={
    captain:""
  }
  this.findRole = this.findRole.bind(this)
}



findRole(data){
  let member = data.filter(member => {
    return member.role === "captain"
  })
  this.setState({
    captain:member[0]["username"]
  })
}

componentDidMount(){ 
// this.findRole(this.props.data.members) 
}

  render() {
    return (
      <div className="container text-left" id="teamPage">
        <div className="team-banner" style={{backgroundImage: `url(${this.props.data.banner})` }}></div>
        <div className="team-banner-foreground">
        <div className="row h-100">
            <TeamBanner
            img={this.props.data.image}
            name={this.props.data.name}
            />
        </div>
        </div>
        <div className="row">
          <div className="col">
            Bio:
          </div>
          <div className="col">
          Teams
          </div>
        </div>
        <div className="row">
          <div className="col">
            Info
          </div>
          <div className="col">
            file system
          </div>
        </div>
      </div>
    );
  }
}
