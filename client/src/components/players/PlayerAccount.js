import React, { Component } from "react";
import PlayerInfo from "./PlayerInfo";
import PlayerStats from "./PlayerStats";
import PlayerVideo from "./PlayerVideo";
import { Link } from "react-router-dom";
import "./styles/PlayerAccount.css";

export default class PlayerAccount extends Component {
  render() {
    return (
      <div className="container" id="player-account">
        <div className="row">
          <div className="col-md-3 col-sm-12" id="player-info">
            <PlayerInfo />
          </div>
          <div className="col-md-3 col-sm-6">
            <PlayerVideo />
          </div>
          <div className="col-md-3 col-sm-6">
            <PlayerStats />
          </div>
        </div>
      </div>
    );
  }
}
