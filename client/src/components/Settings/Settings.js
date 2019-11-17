import React, { Component } from 'react';
import Selector from './Selector'

import Info from './Info'
import Stats from './Stats'
import Banner from './Banner'
import General from './General'
import Team from './Team'
import About from './About'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './style/Settings.css'

class Settings extends Component {
constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleSubmit = (changes) => {
console.log(changes)
}

    render() {
        return (
            <Router>
            <div className="container-fluid settings">
                <div className="row">
                    <div className="col-md-3">
                        
                        <Selector/>
                    </div>
                    <div className="col-md-9 text-left panel">
                   
                <Switch>
                    <Route exact path="/player/:playerId/settings/banner" component={Banner}/>
                    <Route exact path="/player/:playerId/settings/general" component={General}/>
                    <Route exact path="/player/:playerId/settings/info" component={Info}/>
                    <Route exact path="/player/:playerId/settings/stats" component={Stats}/>
                    <Route exact path="/player/:playerId/settings/team" component={Team}/>
                    <Route exact path="/player/:playerId/settings/about" component={About}/>
                </Switch>
              
                    </div>
                </div>
            </div>
            </Router>
        );
    }
}

export default Settings;