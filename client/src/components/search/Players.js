import React, { Component } from "react";
import PlayerCard from "./PlayerCard";
export default class Players extends Component {
  render() {
    return (
      <div className="container-fluid player-search">
        <h3 className="display-4">Players</h3>
        <div className="row">
          {this.props.PlayerData.map(data => {
            return (
            
              <PlayerCard
                key={data.id}
                img={data.img}
                username={data.username}
                game={data.game}
                region={data.region}
                team={data.team}
                url={data.url}
                banner={data.banner}
                tagline={data.tagline}
                availability={data.availability}
                videoUrl={data.videoUrl}
                stats={data.stats}
                about={data.about}
                passedObject={this.props.passedObject}
              />
              
            );
          })}
        </div>
      </div>
    );
  }
}
