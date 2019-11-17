import React, { Component } from 'react';

class Stats extends Component {
    state={
        game:"",
        stats:{
            role:"",
            kd:"",
            primary:"",
            hoursPlayed:""
        },
        videoUrl:""
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
            <div className="banner row">
               <form className="col-md-5 col-sm-12" onSubmit={this.handleSubmit}>
               <h3>Stats:</h3>
               <hr className="my-4"/>
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="Your viewed game name here" 
                       value={this.state.game} 
                       onChange={this.handleChange} 
                       name="game"
                       />
                   </div>
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="paste your video url here..." 
                       value={this.state.videoUrl} 
                       onChange={this.handleChange} 
                       name="videoUrl"
                       />
                   </div>
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="role in video" 
                       value={this.state.stats.role} 
                       onChange={this.handleChange} 
                       name="stats.role"
                       />
                   </div>
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="kd in video" 
                       value={this.state.stats.kd} 
                       onChange={this.handleChange} 
                       name="stats.kd"
                       />
                   </div>
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="primary tool/weapon in video" 
                       value={this.state.stats.primary} 
                       onChange={this.handleChange} 
                       name="stats.primary"
                       />
                   </div>
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="hours played in total" 
                       value={this.state.stats.hoursPlayed} 
                       onChange={this.handleChange} 
                       name="stats.hoursPlayed"
                       />
                   </div>
                   <div>
                       <button className="btn button">Confirm</button>
                   </div>
               </form>
            </div>
        );
    }
}

export default Stats;