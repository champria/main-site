import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class TeamFilterBox extends Component{
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

handleClick(){
  this.props.passedTeamObject(this.props.names[0])
}

  render(){
    return(
      <div className="text-left" id="filteredGames">
          <div className="row">
      <div className="col-12">
        {this.props.names.map(name => (
          <Link to={`/team/${name.url}/page`}>
            <div className="row" onClick={this.handleClick}>
              <div className="col-4">
                <img
                  src={name.image}
                  alt={name.name}
                  className="img-fluid"
                />
              </div>
              <div className="col-8">
                <p>{name.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
      </div>
  )
  }
    
}