import React, { Component } from 'react';

class Info extends Component {
    state={
        game:"",
        region:"",
        Availability:""
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
               <h3>Info:</h3>
               <hr className="my-4"/>
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
                   <div>
                       <button className="btn button">Confirm</button>
                   </div>
               </form>
            </div>
        );
    }
}

export default Info;