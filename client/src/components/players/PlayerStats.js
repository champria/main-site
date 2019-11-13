import React from "react";

export default function PlayerStats(props) {
  return <div className="player-stats">
   <h3>Stats from video</h3>
   <div className="text-left">
   <h5>Game:</h5>
   <hr className="my-4"/>
      <ul className="list-unstyled">
        <li>Role:</li>
        <li>K/D:</li>
        <li>Primary Tool:</li>
        <li>hours played:</li>
      </ul>
   </div>
     
    
  </div>;
}
