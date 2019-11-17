import React, { Component } from 'react';

class General extends Component {
    state={
        username:"",
        password:"",
        confirmPassword:""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.password !== this.state.confirmPassword){
            alert("passwords do not match")
        }
        console.log(this.state)
    }
    render() {
        return (
            <div className="banner row">
               <form className="col-md-5 col-sm-12" onSubmit={this.handleSubmit}>
               <h3>General:</h3>
               <hr className="my-4"/>
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="username here" 
                       value={this.state.username} 
                       onChange={this.handleChange} 
                       name="username"
                       />
                   </div>
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="enter new password" 
                       value={this.state.password} 
                       onChange={this.handleChange} 
                       name="password"
                       />
                   </div>
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="confirm new password" 
                       value={this.state.confirmPassword} 
                       onChange={this.handleChange} 
                       name="confirmPassword"
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

export default General;