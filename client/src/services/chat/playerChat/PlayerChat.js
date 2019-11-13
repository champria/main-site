import React, { Component } from "react";

import Contact from "./Contact";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import AddContact from "./AddContact";

import "./styles/PlayerChat.css";

import messageData from "../../../MESSAGE_DATA.json";
import moreMessages from "../../../MORE_MESSAGES.json";

const userOne = "Justin_";
const userTwo = "not_justin";

class PlayerChat extends Component {

  constructor(props){
    super(props)
this.state = {
  
    messages: [],
    userTwo: [],
    conversationSelected: false,
    messageArr:[]
}
this.messageSelector = this.messageSelector.bind(this)

  }



messageSelector(data) {
console.log(data)
 this.setState({
   messageArr: data
 })

  }



  render() {
    
    return (
      <div className="container" id="player-chat">
        <div className="chat-bg">
          <div className="row">
            <div className="col-3">
              <ul
                className="list-group text-left d-none d-md-block"
                id="content-box"
              >
                <h4>Contacts</h4>
                <li className="list-group-item">
                  <Contact
                    contact={messageData}
                    user={userOne}
                    messageSelector={this.messageSelector}
                  />
                </li>
                <li className="list-group-item">
                  <Contact
                    contact={moreMessages}
                    user={userOne}
                    messageSelector={this.messageSelector}
                  />
                </li>
              </ul>
            </div>
            {/* this part should eventually be dynamic, maybe unique id? */}
            <div className="col-md-9 col-sm-12">
              <h3 className="text-left">
                <i className="fas fa-user-circle"></i> {userTwo}
              </h3>
              <hr className="my-4" />
              {Array.isArray(this.state.messageArr) && this.state.messageArr.length ? <Messages messages={this.state.messageArr} /> : "Loading..."}
            </div>
          </div>
          <div className="row">
            <div className="col-3 d-none d-md-block">
              <AddContact />
            </div>
            <div className="col-md-9 col-sm-12">
              <SendMessage />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerChat;
