import React, { Component } from "react";
import { Link } from "react-router-dom";
import TeamInfo from "./TeamInfo";
import TeamMembers from "./TeamMembers";
import Calendar from "./Calendar";
import TeamFeed from "./TeamFeed";
import "./styles/Teams.css";

export default class TeamAccount extends Component {
  render() {
    return (
      <div className="container text-left">
        <div className="row">
          <div className="col-4">
            <TeamInfo />
          </div>
          <div className="col-8">
            <TeamMembers />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Calendar />
          </div>
          <div className="col">
            <TeamFeed />
          </div>
        </div>
      </div>
    );
  }
}
