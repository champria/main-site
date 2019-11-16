import React, { Component } from "react";
import MemberCard from "./MemberCard";

export default class teamMembers extends Component {
  render() {
    return (
      <div className="team-members">
        <h3>Members:</h3>
        <hr className="my-4"/>
        <div className="row">
          {this.props.members.map(member => {
            return <MemberCard data={member} key={member.id}/>;
          })}
        </div>
      </div>
    );
  }
}
