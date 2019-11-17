import React, { Component } from "react";

export default class Calendar extends Component {
  render() {
    return (
      <div>
        <h3>Schedule:</h3>
        <hr className="my-4"/>
        <div className="text-center">
        <i class="fas fa-calendar-alt" style={{ fontSize: "250px" }}></i>
        </div>
        
      </div>
    );
  }
}
