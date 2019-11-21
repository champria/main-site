import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./styles/MainSplash.css";

import { Link } from "react-router-dom";

export default class MainSplash extends Component {
  render() {
    return (
      <div>
        <div className="container" id="splash">
          <div className="jumbotron" id="foreground">
            <Fade bottom>
              <h1 className="display-1 text-center" id="header">
              Where Esports<br/>Champions Rise
              </h1>
            </Fade>

            <br />
            <hr class="my-4" />
            <div className="row">
              <div className="col-sm-12 text-center">
                <Fade bottom>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Fade>
                <Fade bottom>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </Fade>
              </div>
             
            </div>
            <br />
            <Fade bottom>
              <div className="row splash-buttons">
                <div className="col-md-4 sm-12">
                  <Link to="/team/search">
                    <button className="btn  button">Browse Teams</button>
                  </Link>
                </div>
                <div className="col-md-4 sm-12">
                <Link to="/register">
                  <Fade bottom>
                    <button className="btn button" id="big-button">Join now</button>
                  </Fade>
                </Link>
                </div>
                <div className="col-md-4 sm-12">
                  <Link to="/player/search">
                    <button className="btn  button">Browse Players</button>
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div id="background"></div>
      </div>
    );
  }
}
