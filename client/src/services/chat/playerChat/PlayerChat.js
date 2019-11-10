import React, { Component } from 'react';
import Contacts from './Contacts'
import Messages from './Messages'
import SendMessage from './SendMessage'
import './styles/PlayerChat.css'


import messageData from '../../../MESSAGE_DATA.json'

const userOne = "Justin_"
const userTwo = "not_justin"

class PlayerChat extends Component {

    state = {
        messages : []
    }


    render() {
        return (
            <div className="container" id="player-chat">
               <h3 className="display-4">Player Chat</h3>
               <div className="chat-bg">
               <div className="row">

               <div className="col-3">
                   <Contacts/>
               </div>
               <div className="col-9">
        <h3 className="text-left">{userTwo}</h3>
        <hr className="my-4"/>
                   <Messages messages={messageData}/>
                   <SendMessage/>
               </div>
               </div>
               </div>
            </div>
        );
    }
}

export default PlayerChat;