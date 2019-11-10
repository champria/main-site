import React, { Component } from "react";
import MemberCard from "./MemberCard";

export default class teamMembers extends Component {
  render() {
    const cards = [1, 2, 3, 4, 5, 6];
    return (
      <div className="jumbotron">
        <div className="row">
          {cards.map(card => {
            return <MemberCard info={card} />;
          })}
        </div>
      </div>
    );
  }
}
