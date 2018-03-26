import React, { Component } from 'react';
import { Team } from '../lib/requests';
import ErrorPage from './ErrorPage';
import LoadingPage from './LoadingPage';

class TeamIndexPage extends Component {

  constructor (props) {
    super(props);

    this.state = {
      teams: null,
      error: null
    }
  }

  componentDidMount () {
    
    Team.all()
      .then(res => {

        if (res.status !== 200) {
          this.setState({
            error: res
          });
        }
        else {
          this.setState({
            teams: res.json
          });
        }

      });
  }

  render () {

    // Show loading page
    const { teams, error } = this.state;
    if (error === null && teams === null) {
      return (
        <LoadingPage />
      );
    }

    // Show error page
    if (error !== null) {
      return (
        <ErrorPage error={error}/>
      );
    }

    const { team_names } = teams;

    // Otherwise, show results
    return (
      
      <div className="uk-container">
        <header className="uk-margin-large-top uk-margin-large-bottom">
          <h1 className="uk-heading-primary">Teams</h1>
        </header>
        <main>
          <ul>
            {
              team_names.map((team, index) => <li key={index}>{team.slack_team_name}</li>)
            }
          </ul>
        </main>
      </div>
    );
  }
}

export default TeamIndexPage;
