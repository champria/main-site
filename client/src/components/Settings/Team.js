import React, { Component } from 'react';
import FileManagement from './FileManagement'
import MemberForm from './MemberForm'
import MemberCard from './MemberCard'
class Team extends Component {
    state={
        teamName:"",
        region:"",
        Availability:"",
        members:[],
        files:[],
        videoUrl:"",
        bio:"",
        organization:"",
        isLookingForMembers:"",
        game:"", 
        clicked:false  
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        this.setState({
            clicked:!this.state.clicked
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div className="banner container-fluid">
                <h3>Team:</h3>
               <hr className="my-4"/>
               <form className="row" onSubmit={this.handleSubmit}>
                   <div className="col-md-6 col-sm-12">
               
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="Enter your team name here" 
                       value={this.state.teamName} 
                       onChange={this.handleChange} 
                       name="teamName"
                       />
                   </div>
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="Your main game here" 
                       value={this.state.game} 
                       onChange={this.handleChange} 
                       name="game"
                       />
                   </div>
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="update your region here" 
                       value={this.state.region} 
                       onChange={this.handleChange} 
                       name="region"
                       />
                   </div>
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="update availability" 
                       value={this.state.availability} 
                       onChange={this.handleChange} 
                       name="availability"
                       />
                       </div>
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="update video url" 
                       value={this.state.videoUrl} 
                       onChange={this.handleChange} 
                       name="videoUrl"
                       />
                   </div>
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="organization name here" 
                       value={this.state.organization} 
                       onChange={this.handleChange} 
                       name="organization"
                       />
                   </div>
                   <div className="form-group">
                       <textarea 
                       placeholder="enter bio here..." 
                       name="bio" 
                       value={this.state.bio} 
                       className="form-control" 
                       onChange={this.handleSubmit}></textarea>
                   </div>
                   </div>
                   <div className="col-md-6 col-sm-12">
                   <div className="form-group">
                       <button className="btn button" onClick={this.handleClick}><i className="fas fa-plus-circle"></i> invite player</button>
                   </div>
                   {this.state.clicked && <MemberForm/>}
                   <div className="jumbotron mx-auto">
                       <div className="row">
                           <MemberCard/>
                       </div>
                   </div>
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="upload file" 
                       value={this.state.files} 
                       onChange={this.handleChange} 
                       name="files"
                       type="file"
                       />
                   </div>
                   <div className="jumbotron mx-auto">
                       <FileManagement />
                   </div>
                   <div>
                       <button className="btn button">Confirm</button>
                   </div>
                   </div>

                   
               </form>
            </div>
        );
    }
}

export default Team;