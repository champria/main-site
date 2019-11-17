import React, { Component } from "react";
import TeamCard from "./TeamCard";

export default class Teams extends Component {
  render() {
    return (
      <div className="container-fluid team-search">
        <h3 className="display-4">Teams</h3>
        <div className="row">
          {this.props.teamData.map(data => {
            return (
              <TeamCard
                key={data.id}
                name={data.name}
                game={data.game}
                url={data.url}
                region={data.region}
                isLookingForMembers={data.isLookingForMembers}
                image={data.image}
                banner={data.banner}
                organization={data.organization}
                members={data.members}
                files={data.files}
                passedTeamObject={this.props.passedTeamObject}
                bio={data.bio}
                videoUrl={data.videoUrl}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
