import React from "react";

export default function MemberCard(props) {
  
  return (
    <div className="col-4" key={props.data.id}>
      <div className="card text-left">
        <div className="row">
          <div className="col-4">
            {props.data.img 
            ? <img src={props.data.img} alt={props.data.username}/>  
            :<i class="fas fa-user-circle"></i>}
          </div>
          <div className="col-8">
  <p>{props.data.username}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
  <p>Role: {props.data.role}</p>
          </div>
          
        </div>
       
      </div>
    </div>
  );
}
