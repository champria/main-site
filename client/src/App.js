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
import TeamChat from "./services/chat/teamChat/TeamChat";
import PlayerChat from "./services/chat/playerChat/PlayerChat";
import Settings from './components/Settings/Settings'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component{
constructor(props){
  super(props)
  this.state={
    player:{
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
    },
    team:{
      name:"",
      members:[],
      bio:"",
      organization:"",
      game:"",
      region:"",
      isLookingForMembers:false,
      image:"",
      banner:"",
      url:"",
      files:[],
      videoUrl:"",
      schedule:[]
    },
    navName:""
                                 
  }
  this.passedObject = this.passedObject.bind(this)
  this.passedTeamObject = this.passedTeamObject.bind(this)
  this.isLoggedIn = this.isLoggedIn.bind(this)
}


  passedObject(data){
    this.setState({
      player:{
        banner: data.banner,
        game: data.game,
        img: data.img,
        name: data.username,
        region: data.region,
        team: data.team,
        tagline:data.tagline,
        availability:data.availability,
        videoUrl:data.videoUrl,
        stats:data.stats,
        about:data.about
      }
      
    })
  }

  passedTeamObject(data){
    this.setState({
      team:{
        name:data.name,
      members:data.members,
      bio:data.bio,
      organization:data.organization,
      game:data.game,
      region:data.region,
      isLookingForMembers:data.isLookingForMembers,
      image:data.image,
      banner:data.banner,
      url:data.url,
      files:data.files,
      videoUrl:data.videoUrl,
      schedule:data.schedule
      }
    })
  }

isLoggedIn = (data) => {
  this.setState({
    navName:data
  })
}

  render(){
    return (
      <Router>
        <div className="App">
          <Navbar name={this.state.navName}/>
          <Switch>
            <Route exact path="/" component={MainSplash} />
            <Route exact path="/login" render={()=> <Login isLoggedIn={this.isLoggedIn}/>} />
            <Route exact path="/register" render={()=> <Register isLoggedIn={this.isLoggedIn}/>} />
            <Route exact path="/player/search" render={()=> <SearchDashboard passedObject={this.passedObject}/>} />
            <Route exact path="/team/search" render={()=> <TeamDashboard passedTeamObject={this.passedTeamObject}/>} />
            <Route exact path="/player/:playerId/page" render={()=> <PlayerAccount data={this.state.player}/>} />
            <Route exact path="/team/:teamId/page" render={()=> <TeamAccount data={this.state.team}/>} />
            <Route exact path="/player/:playerId/chat" component={PlayerChat} />
            <Route exact path="/team/:teamId/chat" component={TeamChat} />
            <Route exact path="/player/:playerId/settings" component={Settings}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
  
}

export default App;
