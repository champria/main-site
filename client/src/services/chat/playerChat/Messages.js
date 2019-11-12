import React from "react";

export default function Messages(props) {
  return (
    <div>
      {props.messages.map(m => {
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
    </div>
  );
}
