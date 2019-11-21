import React, { Component } from "react";
import PlayerInfo from "./PlayerInfo";
import PlayerStats from "./PlayerStats";
import PlayerVideo from "./PlayerVideo";
import { Link } from "react-router-dom";
import "./styles/PlayerAccount.css";

export default class PlayerAccount extends Component {
  render() {
    return (
      <div 
      className="container" id="player-account">
        <div 
        className="banner-background" 
        style={{backgroundImage: `url(${this.props.data.banner})`}}></div>
        <div className="player-banner">
          
        <div className="row h-100">
          <PlayerInfo
          name={this.props.data.name}
          img={this.props.data.img}
          tagline={this.props.data.tagline}
          />
          <div className="col-md-3 col-sm-12">
            <div className="row h-100">
              <div className="col-6 my-auto">
                <button className="btn button" >Invite</button>
              </div>
              <div className="col-6 my-auto">
                <Link to="chat">
                <button className="btn button" >Message</button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="row player-second-row">
        <div className="col-md-3 col-sm-12 text-left">
        <h5>Info</h5>
          
          <ul className="list-unstyled">
            <li>
              Game: {this.props.data.game}
            </li>
            <li>
              Region: {this.props.data.region}
            </li>
           {this.props.data.team 
  && <li>Team: {this.props.data.team}</li>
           }
            <li>
              Availability: {this.props.data.availability}
            </li>
          </ul>
          <hr className="my-4"/>
          <h5>About</h5>
  <p>{this.props.data.about}</p>
        </div>
        <div className="col-md-9 col-sm-12">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <PlayerVideo videoUrl={this.props.data.videoUrl}/>
            </div>
            <div className="col-md-4 col-sm-12">
              <PlayerStats 
              stats={this.props.data.stats}
              game={this.props.data.game}
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
