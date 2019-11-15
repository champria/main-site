import React,{Component} from "react";
import { Link } from "react-router-dom";

export default class FilterBox extends Component {
constructor(props){
  super(props)
  this.handleClick = this.handleClick.bind(this)
}
  
handleClick(){
  this.props.passedObject(this.props.names[0])
}

  render(){
    return (
      <div id="filteredGames" className="text-left" onClick={this.handleClick}>
        <div className="row">
          <div className="col-12">
            {this.props.names.map(name => (
              <Link to={`/player/${name.url}/page`}>
                <div className="row">
                  <div className="col-4">
                    <img
                      src={name.img}
                      alt={name.username}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-8 my-auto">
                    <p>{name.username}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
}
