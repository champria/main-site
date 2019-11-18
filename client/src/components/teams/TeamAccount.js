import React, { Component } from "react";
import { Link } from "react-router-dom";
import TeamBanner from "./TeamBanner";
import TeamMembers from "./TeamMembers";
import TeamVideo from './TeamVideo'
import Calendar from "./Calendar";
import TeamFiles from "./TeamFiles";
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
this.findRole(this.props.data.members) 
}

  render() {
    return (
      <div className="container text-left" id="teamPage">
        <div className="team-banner" style={{backgroundImage: `url(${this.props.data.banner})` }}></div>
        <div className="team-banner-foreground">
        <div className="row">
            <TeamBanner
            img={this.props.data.image}
            name={this.props.data.name}
            captain={this.state.captain}
            />
        </div>
        </div>
        <div className="row team-section">
          <div className="col-md-6 col-sm-12">
            <h3>Bio:</h3>
            <hr className="my-4"/>
    <p>{this.props.data.bio}</p>
          </div>
          <div className="col-md-6 col-sm-12">
            
        <TeamMembers members={this.props.data.members}/>
          </div>
        </div>
        <div className="row team-section">
          <div className="col-md-6 col-sm-12">
            <h3>Info:</h3>
            <hr className="my-4"/>
            <ul className="list-unstyled">
    <li>Game: {this.props.data.game}</li>
    <li>Region: {this.props.data.region}</li>
    <li>Looking for members: {this.props.data.isLookingForMembers ? "Yes" : "No"}</li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12">
            <TeamVideo videoUrl={this.props.data.videoUrl}/>
          </div>
        </div>
        <div className="row team-section">
          <div className="col-md-6 col-sm-12">
            <Calendar/>
          </div>
          <div className="col-md-6 col-sm-12">
            <TeamFiles files={this.props.data.files}/>
          </div>
        </div>
      </div>
    );
  }
}
