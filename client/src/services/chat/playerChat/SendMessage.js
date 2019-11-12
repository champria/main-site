import React, { Component } from "react";

class SendMessage extends Component {
  render() {
    return (
      <div className="form-row">
        <div className="col-md-12 col-sm-9">
          <input
            placeholder="send message"
            name="message"
            className="form-control"
          />
        </div>
        <div className="d-block d-md-none col-sm-3">
          <button className="btn button">send</button>
        </div>
      </div>
    );
  }
}

export default SendMessage;
