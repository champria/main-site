import React from "react";

export default function MemberCard() {
  return (
    <div className="col-4">
      <div className="card text-left">
        <div className="row">
          <div className="col-4">
            <i class="fas fa-user-circle"></i>
          </div>
          <div className="col-8">
            <p>Member Name</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Role: String</p>
            <p>Misc:</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <button className="btn btn-warning">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
