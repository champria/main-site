import React from "react";

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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainSplash} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/player/search" component={SearchDashboard} />
          <Route exact path="/team/search" component={TeamDashboard} />
          <Route exact path="/player/:playerId/page" component={PlayerAccount} />
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

export default App;
