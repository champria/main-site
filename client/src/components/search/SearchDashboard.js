import React, { Component } from "react";
import Filter from "./Filter";
import Players from "./Players";
import PlayerData from "../../DUMMY_DATA.json";
import "./styles/PlayerSearch.css";

export default class SearchDashboard extends Component {
  state = {
    game: "",
    region: "",
    team: "",
    data: []
  };

  filteredData = () => {
    // filter through the given data so that only the arrays that match the selection box are returned and then storerd into state under data
    let newData = PlayerData.filter(data => {
      return (
        (data.game === this.state.game || this.state.game === "") &&
        (data.region === this.state.region || this.state.region === "") &&
        (data.team === this.state.team || this.state.team === "")
      );
    });
    this.setState({
      data: [...newData]
    });
  };
  // this function is passed down through the Filter Component and the arguments are passed up with values
  filterBy = (game, region, team) => {
    if (this.state.data) {
      this.setState({
        data: []
      });
    }
    this.setState(
      {
        game,
        region,
        team
      },
      () => {
        // after setting state, a callback function can be used to then filter the data according to the state after the state had been assigned
        this.filteredData();
      }
    );
  };

  render() {
    return (
      <div className="container-fluid">
        <br />
        <div className="row">
          <div className="col-2">
            <Filter FilterData={PlayerData} filterBy={this.filterBy} />
          </div>
          <div className="col-10" id="player-box">
            <Players
              PlayerData={
                !this.state.data.length ? PlayerData : this.state.data
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
