import React, { Component } from 'react';

export default class SelectBox extends Component {
    render() {
        return (
            <div>
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
        );
    }
}

