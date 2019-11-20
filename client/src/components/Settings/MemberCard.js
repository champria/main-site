import React from 'react'

export default function MemberCard(props){
    return (
        <div className="col-md-4 card text-left">
            <p>Member Name</p>
            
            <button className="btn btn-danger">Remove</button>
            
        </div>
    )
}