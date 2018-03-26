import React, { Component } from 'react';
import { Team } from '../lib/requests';
import ErrorPage from './ErrorPage';
import LoadingPage from './LoadingPage';

class TeamShowPage extends Component {

  constructor (props) {
    super(props);

    this.state = {
      team: null,
      error: null
    }
  }

  componentDidMount () {

    const teamId = this.props.match.params.id;

    Team.findById(teamId)
      .then(res => {

        if (res.status !== 200) {
          this.setState({
            error: res
          });
        }
        else {
          this.setState({
            team: res.json
          });
        }

      });
  }

  render () {

    // Show loading page
    const { team, error } = this.state;
    if (error === null && team === null) {
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

    // Otherwise, show results
    const { team_name, answers=[] } = team;

    return (
      <div className="uk-container">
        <header className="uk-margin-large-top uk-margin-large-bottom">
          <h1 className="uk-heading-primary">{team_name}</h1>
        </header>
        <main>
          <ul>
            {
              answers.map((answer, index) =>
                <li key={index}>
                  Date: {answer.date},
                  Autonomy: {answer.autonomy},
                  Complexity: {answer.complexity},
                  Reward: {answer.reward},
                  Daily Count: {answer.daily_count},
                  Total Count: {answer.total_count}
                </li>
              )
            }
          </ul>
        </main>
      </div>
    );
  }
}

export default TeamShowPage;
