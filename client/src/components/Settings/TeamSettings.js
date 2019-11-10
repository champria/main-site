import React, { Component } from "react";

export class PlayerSettings extends Component {
  state = {
    teamName:"",
    image:"",
    bannerImage:"",
    region:"",
    game:[],
    email:"",
    password:"",
    confirm:""
  }
changeHandler = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

submitHandler = e => {
  e.preventDefault()
  if(this.state.confirm !== this.state.password){
    return alert("Make sure new passwords match!")
  }
  console.log(this.state)
}

  render() {
    return (
      <div className="container text-left">
        <h3>Your Team Settings</h3>
        <hr />
        <div className="row">
          <div className="col">
          <form onSubmit={this.submitHandler}>
            <div className="form-group">
              <label>Team Name:</label>
              <input 
              className="form-control" 
              value={this.state.teamName}
              name="teamName"
              onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <label>game:</label>
              <input 
              className="form-control" 
              value={this.state.game}
              name="game"
              onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <label>region:</label>
              <input 
              className="form-control" 
              value={this.state.region}
              name="region"
              onChange={this.changeHandler}
              />
            </div> 
            <div className="form-group">
              <label>image:</label>
              <input 
              className="form-control" 
              value={this.state.image}
              name="image"
              onChange={this.changeHandler}
              placeholder="copy link here"
              />
            </div> 
            <div className="form-group">
              <label>Banner:</label>
              <input 
              className="form-control" 
              value={this.state.bannerImage}
              name="bannerImage"
              onChange={this.changeHandler}
              placeholder="copy link here"
              />
            </div> 
            
            
          </form>
        </div>
        <div className="col">
        <div className="form-group">
              <label>Update email:</label>
              <input 
              className="form-control" 
              value={this.state.email}
              name="email"
              onChange={this.changeHandler}
              type="email"
              />
            </div> 
        <div className="form-group">
              <label>Update password:</label>
              <input 
              className="form-control" 
              value={this.state.password}
              name="password"
              onChange={this.changeHandler}
              type="password"
              />
            </div> 
        <div className="form-group">
              <label>Confirm new password:</label>
              <input 
              className="form-control" 
              value={this.state.confirm}
              name="confirm"
              onChange={this.changeHandler}
              type="password"
              />
            </div> 
            <button className="btn button">confirm changes</button>
        </div>
        
        </div>
      </div>
    );
  }
}

export default PlayerSettings;
