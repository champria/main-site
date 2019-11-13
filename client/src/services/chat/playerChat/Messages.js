import React, {Component} from "react";

export default class Messages extends Component {
constructor(props){
  super(props)
  this.state={
    data:Array
  }
}


componentDidMount(){
  console.log(this.props.messages)
}

render(){


  return (
    <div>
      { !this.props 
      ? "Loading"
      :this.props.messages.map(m => {
        return (
          <div
            key={m.id}
            className={`message-container 
             ${m.user !== "Justin_" ? "message-sender" : ""}`}
          >
            <p className="message-content">{m.message}</p>
            <p className="message-timestamp">{m.timestamp}</p>
          </div>
        );
      })}
      Messages
    </div>
  );
}
}