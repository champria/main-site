import React, { Component } from "react";
import Teams from "./Teams";
import TeamFilter from "../filter/TeamFilter";
import '../styles/SearchTeams.css'

import TeamData from "../../../TEAM_DATA.json";

export class TeamDashboard extends Component {
  state = {
    teamGame: "",
    teamRegion: "",
    organization: "",
    isLookingForMembers: false,
    teamData: []
  };

  filterdData = () => {
    let newData = TeamData.filter(data => {
      return (
        (data.game === this.state.teamGame || this.state.teamGame === "") &&
        (data.region === this.state.teamRegion ||
          this.state.teamRegion === "") &&
        (data.isLookingForMembers === this.state.isLookingForMembers ||
          this.state.teamRegion ||
          this.state.teamRegion === "") &&
        (data.isLookingForMembers === this.state.isLookingForMembers ||
          this.state.teamRegion ||
          this.state.teamRegion === "") &&
        (data.isLookingForMembers === this.state.isLookingForMembers ||
          !this.state.isLookingForMembers) &&
        (data.organization === this.state.organization ||
          this.state.organization === "")
      );
    });
    this.setState({
      teamData: [...newData]
    });
  };
  filterBy = (game, region, isLookingForMembers, organization) => {
    console.log(game, region, isLookingForMembers);
    if (this.state.teamData) {
      this.setState({
        teamData: []
      });
    }
    this.setState(
      {
        teamGame: game,
        teamRegion: region,
        isLookingForMembers,
        organization
      },
      () => {
        this.filterdData();
      }
    );
  };

  render() {
    return (
      <div className="container-fluid">
        <br />
        <div className="row">
          <div className="col-2">
            <TeamFilter 
            teamFilterData={TeamData} 
            filterBy={this.filterBy} 
            passedTeamObject={this.props.passedTeamObject}
            />
          </div>
          <div className="col-10">
            <Teams
              teamData={
                !this.state.teamData.length ? TeamData : this.state.teamData
              }
              passedTeamObject={this.props.passedTeamObject}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TeamDashboard;
