import React, { Component, Fragment } from "react";
import SelectBox from "./SelectBox";
import FilterBox from "./FilterBox";

export default class Filter extends Component {
  state = {
    value: "",
    arr: [],
    games: [],
    region: [],
    team: [],
    gameSelect: "",
    regionSelect: "",
    teamSelect: ""
  };

  changeHandler = e => {
    let filteredArr = this.props.FilterData.filter(game => {
      return (
        game.username.toLowerCase().indexOf(this.state.value.toLowerCase()) !==
        -1
      );
    });
    this.setState({
      value: e.target.value,
      arr: [...filteredArr]
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.filterBy(
      this.state.gameSelect,
      this.state.regionSelect,
      this.state.teamSelect
    );
  };

  onSelectFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    // isolate game array removing empty strings and duplicate inputs
    let games = this.props.FilterData.map(data => data.game);
    let gamesFiltered = games.filter(
      (data, index) => data && games.indexOf(data) === index
    );
    // isolate region array removing empty strings and duplicate inputs
    let region = this.props.FilterData.map(data => data.region);
    let regionFiltered = region.filter(
      (data, index) => data && region.indexOf(data) === index
    );
    // isolate team array removing empty strings and duplicate inputs
    let team = this.props.FilterData.map(data => data.team);
    let teamFiltered = team.filter(
      (data, index) => data && team.indexOf(data) === index
    );
    this.setState({
      games: gamesFiltered,
      region: regionFiltered,
      team: teamFiltered
    });
  }

  render() {
    return (
      <Fragment>
        <div className="filter-bg d-none d-md-block">
        <form className="form-group">
          <div>
            <input
              className="form-control"
              placeholder="search by player"
              value={this.state.value}
              onChange={this.changeHandler}
            />
          </div>

          <FilterBox names={this.state.arr} />
        </form>
        <form className="form-group" onSubmit={this.submitHandler}>
          <div className="text-left">
            <h3>Search By</h3>
            <div>
              <label>Game:</label>
              <select
                className="form-control"
                onChange={this.onSelectFormChange}
                name="gameSelect"
              >
                <option value="">All</option>
                {this.state.games.map((game, index) => (
                  <option key={index} value={game}>
                    {game}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Region:</label>
              <select
                className="form-control"
                onChange={this.onSelectFormChange}
                name="regionSelect"
              >
                <option value="">All</option>
                {this.state.region.map((region, index) => (
                  <option key={index} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Team:</label>
              <select
                className="form-control"
                onChange={this.onSelectFormChange}
                name="teamSelect"
              >
                <option value="">All</option>
                {this.state.team.map((team, index) => (
                  <option key={index} value={team}>
                    {team}
                  </option>
                ))}
              </select>
            </div>

            <br />
            <br />
            <div>
              <button className="btn button">filter</button>
            </div>
          </div>
        </form>
        </div>
      </Fragment>
    );
  }
}
