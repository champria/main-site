import React, { Component } from "react";
import { Link } from "react-router-dom";
import TeamInfo from "./TeamInfo";
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
    // todo: fix this!!
    captain: member
  })
}

componentDidMount(){
  this.findRole(this.props.data.members)
}

  render() {
    return (
      <div className="container text-left">
        <div className="row">
          <div className="col-4">
            <TeamInfo 
            img={this.props.data.image}
            name={this.props.data.name}
            game={this.props.data.game}
            organization={this.props.data.organization}
            isLookingForMembers={this.props.data.isLookingForMembers}
            bio={this.props.data.bio}
            />
          </div>
          <div className="col-8">
            <TeamMembers 
            members={this.props.data.members}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Calendar />
          </div>
          <div className="col">
            <TeamFeed files={this.props.data.files}/>
          </div>
        </div>
      </div>
    );
  }
}
