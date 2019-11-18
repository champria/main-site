import React, { Component } from "react";

export default class TeamFiles extends Component {
  render() {
    return <div>
      <h3>Team Files:</h3>
      <hr className="my-4"/>
      <div className="row">
        <div className="col-md-8 col-sm-12">
        <ul className="list-unstyled">
    {this.props.files.map(file => {
    return <li ky={file.id}><a href={file.url}>{file.title}.doc</a></li>
    })}
      </ul>
        </div>
        <div className="col-md-4 col-sm-12">
          <button className="btn button" disabled>edit files</button>
        </div>
      </div>
     
    </div>;
  }
}
