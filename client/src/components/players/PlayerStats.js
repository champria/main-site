import React from "react";

export default function PlayerStats(props) {
  return <div className="player-stats">
   <h3>Stats from video</h3>
   <div className="text-left">
<h5>Game: {props.game}</h5>
   <hr className="my-4"/>
      <ul className="list-unstyled">
        <li>Role: {props.stats.role}</li>
        <li>K/D: {props.stats.kd}</li>
        <li>Primary Tool: {props.stats.primary}</li>
        <li>hours played: {props.stats.hoursPlayed}</li>
      </ul>
   </div>
     
    
  </div>;
}
