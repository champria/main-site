import React from "react";

export default function PlayerVideo(props) {
  return <div>
    {props.videoUrl 
    ?<iframe  src={`https://www.youtube.com/embed/${props.videoUrl}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    : "No video upload"
  }
    
  </div>;
}
