import React, { Component } from "react";

export default class TeamSelectBox extends Component {
  state = {
    games: [],
    region: [],
    isLookingForMembers: false,
    organization: [],
    gameSelect: "",
    regionSelect: "",
    organizationSelect: ""
  };
  onSelectFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  checkChange = () => {
    this.setState({
      isLookingForMembers: !this.state.isLookingForMembers
    });
  };
  submitHandler = e => {
    e.preventDefault();
    this.props.filterBy(
      this.state.gameSelect,
      this.state.regionSelect,
      this.state.isLookingForMembers,
      this.state.organizationSelect
    );
  };

  componentDidMount() {
    // isolate game array removing empty strings and duplicate inputs
    let games = this.props.teamFilterData.map(data => data.game);
    let gamesFiltered = games.filter(
      (data, index) => data && games.indexOf(data) === index
    );
    // isolate region array removing empty strings and duplicate inputs
    let region = this.props.teamFilterData.map(data => data.region);
    let regionFiltered = region.filter(
      (data, index) => data && region.indexOf(data) === index
    );
    // isolate organization array removing empty strings and duplicate inputs
    let organization = this.props.teamFilterData.map(data => data.organization);
    let organizationFiltered = organization.filter(
      (data, index) => data && organization.indexOf(data) === index
    );

    this.setState({
      games: gamesFiltered,
      region: regionFiltered,
      organization: organizationFiltered
    });
  }

  render() {
    return (
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
            <label>Organization:</label>
            <select
              className="form-control"
              onChange={this.onSelectFormChange}
              name="organizationSelect"
            >
              <option value="">All</option>
              {this.state.organization.map((organization, index) => (
                <option key={index} value={organization}>
                  {organization}
                </option>
              ))}
            </select>
          </div>
          <div className="row">
            <div className="col-8">
              <label>Looking for Members </label>
            </div>
            <div className="col-4 my-auto">
              <input type="checkbox" onChange={this.checkChange} />
            </div>
          </div>

          <br />
          <br />
          <div>
            <button className="btn button">filter</button>
          </div>
        </div>
      </form>
    );
  }
}
