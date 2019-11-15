import React, { Component } from 'react';
import TeamFilterBox from './TeamFilterBox'
import TeamSelectBox from './TeamSelectBox'

export default class TeamFilter extends Component {
    state={
        value:"",
        arr:[]
    }
    changeHandler = e =>{
        let filteredArr = this.props.teamFilterData.filter(team => {
            return (
              team.name.toLowerCase().indexOf(this.state.value.toLowerCase()) !==
              -1
            );
            })
            this.setState({
                value: e.target.value,
                arr: [...filteredArr]
              }); 
    }
    render() {
        return (
            <div className="filter-bg">
                <form className="form-group">
                   <input 
                   className="form-control"
                   placeholder="Search by name"
                   value={this.state.value}
                   onChange={this.changeHandler}
                   /> 
                <TeamFilterBox names={this.state.arr} passedTeamObject={this.props.passedTeamObject}/>
                </form>
                
                <TeamSelectBox teamFilterData={this.props.teamFilterData} filterBy={this.props.filterBy} />
            </div>
        );
    }
}
