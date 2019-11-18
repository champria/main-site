import React, { Component } from 'react';

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
        game:""   
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
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
                       <button className="btn button" disabled><i className="fas fa-plus-circle"></i> invite player</button>
                   </div>
                   <div className="jumbotron mx-auto">
                       <p>Players can be found here</p>
                   </div>
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="upload files" 
                       value={this.state.files} 
                       onChange={this.handleChange} 
                       name="files"
                       type="file"
                       disabled
                       />
                   </div>
                   <div className="jumbotron mx-auto">
                       <p>Team files can be found here</p>
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