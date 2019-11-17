import React, { Component } from "react";

import Contact from "./Contact";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import AddContact from "./AddContact";

import "./styles/PlayerChat.css";
// dummy data to simulate real data
import messageData from "../../../MESSAGE_DATA.json";
import moreMessages from "../../../MORE_MESSAGES.json";

const userOne = "Justin_";

class PlayerChat extends Component {

  constructor(props){
    super(props)
this.state = {
    messages: [],
    userTwo: "",
    conversationSelected: false,
    messageArr:[]
}
this.messageSelector = this.messageSelector.bind(this)

  }

  // pass function down to contacts to grab array to pass down to messages
messageSelector(data) {
  // initialize varible
  let userTwo;
  // filter through the objects  to  only take out the objects that have a username different from yours
  let person = data.filter( data => {
   return data.user !== userOne
  })
  // return the user property from the last object inside of the array
  userTwo= person.pop().user

// store the object passed through the function and the user in state
 this.setState({
   messageArr: data,
   userTwo:  userTwo
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
           
            <div className="col-md-9 col-sm-12 chat-box">
              {/* check to see if this.state has any elements inside */}
              {Array.isArray(this.state.messageArr) && this.state.messageArr.length 
              // if it does, pass MessageArr and userTwo through the Message Component and render them
              ? <Messages 
              messages={this.state.messageArr} 
              user={this.state.userTwo}
              /> 
              // otherwise display this text
              : "Time To Chat!"}
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
