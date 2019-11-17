import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Selector extends Component {
    render() {
        return (
            <div className="selector">
                <ul className="list-unstyled text-left">
                    <Link to="/player/:playerId/settings/general">
                    <li><h3>General</h3></li>
                    </Link>
                    
                  <Link to="/player/:playerId/settings/banner">
                  <li><h3>Banner</h3></li>
                  </Link>
                    <Link to="/player/:playerId/settings/info">
                    <li><h3>Info</h3></li>
                    </Link>
                   <Link to="/player/:playerId/settings/stats">
                   <li><h3>Stats</h3></li>
                   </Link>
                    <Link to="/player/:playerId/settings/team">
                    <li><h3>Team</h3></li>
                    </Link>
                    <Link to="/player/:playerId/settings/about">
                    <li><h3>About</h3></li>
                    </Link>
                    
                </ul>
            </div>
        );
    }
}

export default Selector;