import React, { Component } from 'react';

class Banner extends Component {
    state={
        image:"",
        banner:"",
        tagline:""
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
               <h3>Banner:</h3>
               <hr className="my-4"/>
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="paste image url here" 
                       value={this.state.image} 
                       onChange={this.handleChange} 
                       name="image"
                       />
                   </div>
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="paste banner url here" 
                       value={this.state.banner} 
                       onChange={this.handleChange} 
                       name="banner"
                       />
                   </div>
                   <div className="form-group">
                       <input 
                       className="form-control" 
                       placeholder="edit tagline..." 
                       value={this.state.tagline} 
                       onChange={this.handleChange} 
                       name="tagline"
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

export default Banner;