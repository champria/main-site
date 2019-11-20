import React, { Component } from "react";

export default class Calendar extends Component {
  render() {
    return (
      <div className="schedule">
        <h3>Upcoming Events:</h3>
        <hr className="my-4"/>
        <div className="text-center">
        <ul className="list-unstyled text-left">
        {this.props.schedule.map( event => {
          return (
            <li key={event.id}>
        <p>{event.title} <span>{event.date} - {event.time}</span></p>
        <a className="edit" href="#">Edit event</a>
            </li>
          )
        })}
        </ul>
        </div>
        
      </div>
    );
  }
}
