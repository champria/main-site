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
        <div className="banner-background"></div>
        <div className="player-banner">
          
        <div className="row h-100">
          <PlayerInfo/>
          <div className="col-6">
            <div className="row h-100">
              <div className="col-6 my-auto">
                <button className="btn button">Invite</button>
              </div>
              <div className="col-6 my-auto">
                <Link to="chat">
                <button className="btn button">Message</button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="row player-second-row">
        <div className="col-3 text-left">
        <h5>Info</h5>
          
          <ul className="list-unstyled">
            <li>
              Game: 
            </li>
            <li>
              Region: 
            </li>
            <li>
              Team:
            </li>
            <li>
              Availability:
            </li>
          </ul>
          <hr className="my-4"/>
          <h5>About</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-8">
              <PlayerVideo/>
            </div>
            <div className="col-4">
              <PlayerStats/>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
