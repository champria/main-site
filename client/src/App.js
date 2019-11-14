import React, { Component } from "react";

// Routes
import Navbar from "./components/topandbottom/Navbar";
import Footer from "./components/topandbottom/Footer";
import SearchDashboard from "./components/search/SearchDashboard";
import TeamDashboard from "./components/searchteams/teams/TeamDashboard";
import PlayerAccount from "./components/players/PlayerAccount";
import TeamAccount from "./components/teams/TeamAccount";
import MainSplash from "./components/splash/MainSplash";
import Login from "./services/authorization/Login";
import Register from "./services/authorization/Register";
import PlayerSettings from "./components/Settings/PlayerSettings";
import TeamSettings from "./components/Settings/TeamSettings";
import TeamChat from "./services/chat/teamChat/TeamChat";
import PlayerChat from "./services/chat/playerChat/PlayerChat";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component{
constructor(props){
  super(props)
  this.state={
           banner:"",
           game:"",
           img:"",
           name:"",
           region:"",
           team:"" ,
           tagline:"",
           availability:"",
           videoUrl:"",
           stats:{},
           about:""                      
  }
  this.passedObject = this.passedObject.bind(this)
}


  passedObject(data){
    this.setState({
      banner: data.banner,
      game: data.game,
      img: data.img,
      name: data.name,
      region: data.region,
      team: data.team,
      tagline:data.tagline,
      availability:data.availability,
      videoUrl:data.videoUrl,
      stats:data.stats,
      about:data.about
    })
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={MainSplash} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/player/search" render={()=> <SearchDashboard passedObject={this.passedObject}/>} />
            <Route exact path="/team/search" component={TeamDashboard} />
            <Route exact path="/team/search" render={()=> <TeamDashboard passedObject={this.passedObject}/>} />
            <Route exact path="/player/:playerId/page" render={()=> <PlayerAccount data={this.state}/>} />
            <Route exact path="/team/:teamId/page" component={TeamAccount} />
            <Route exact path="/team/:teamId/settings" component={TeamSettings} />
            <Route exact path="/player/:playerId/settings" component={PlayerSettings} />
            <Route exact path="/player/:playerId/chat" component={PlayerChat} />
            <Route exact path="/team/:teamId/chat" component={TeamChat} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
  
}

export default App;
