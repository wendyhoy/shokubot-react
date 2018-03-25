import React, { Component } from 'react';
import { Team } from '../lib/requests';

class TeamShowPage extends Component {

  constructor (props) {
    super(props);

    this.state = {
      team: {}
    }
  }

  componentDidMount () {

    const teamId = this.props.match.params.id;

    Team.findById(teamId)
      .then(team => {
        this.setState({
          team: team
        })
      });
  }

  render () {

    const { team } = this.state;
    const { team_name, answers=[] } = team;

    return (
      <div className="uk-container">
        <h1>{team_name}</h1>
        <ul>
          {
            answers.map((answer, index) =>
              <li key={index}>
                Date: {answer.date},
                Autonomy: {answer.autonomy},
                Complexity: {answer.complexity},
                Reward: {answer.reward}
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default TeamShowPage;
