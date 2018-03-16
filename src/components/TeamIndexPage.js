import React, { Component } from 'react';
import { Team } from '../lib/requests';

class TeamIndexPage extends Component {

  constructor (props) {
    super(props);

    this.state = {
      teams: []
    }
  }

  componentDidMount () {
    Team.all()
      .then(teams => {
        this.setState({
          teams: teams
        })
      });
  }

  render () {

    const { teams } = this.state;

    return (
      <main>
        <h1>Teams</h1>
        <ul>
          {
            teams.map((team, index) => <li key={index}>{team.slack_team_name}</li>)
          }
        </ul>
      </main>
    );
  }
}

export default TeamIndexPage;
