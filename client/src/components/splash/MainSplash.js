import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./styles/MainSplash.css";
import test from './test2.mp4'

import { Link } from "react-router-dom";

export default class MainSplash extends Component {
  render() {
    return (
      <div>
       
          <div className="container">
            <div className="jumbotron" id="foreground">
              <Fade bottom>
                <h1 className="display-2 text-left" id="header">
                  Bring us your Champions!
                </h1>
              </Fade>

              <br />
              <hr class="my-4" />
              <div className="row">
                <div className="col-8 text-left">
                  <Fade bottom>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </Fade>
                  <Fade bottom>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </Fade>
                </div>
                <div className="col-4 my-auto">
                  <Link to="/register">
                    <Fade bottom>
                      <button className="btn button">Join now</button>
                    </Fade>
                  </Link>
                </div>
              </div>
              <br />
              <Fade bottom>
                <div className="row">
                  <div className="col-6">
                    <Link to="/team/search">
                      <button className="btn  button">Browse Teams</button>
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link to="/player/search">
                      <button className="btn  button">Browse Players</button>
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        <div id="background">
          {/* <video
            src={test}
            autoPlay
            loop
            muted
            type='video/mp4'
          ></video> */}
        </div>
      </div>
    );
  }
}
