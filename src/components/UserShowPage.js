import React, { Component } from 'react';
import { User } from '../lib/requests';

class UserShowPage extends Component {

  constructor (props) {
    super(props);

    this.state = {
      user: {}
    }
  }

  componentDidMount () {

    const userId = this.props.match.params.id;

    User.findById(userId)
      .then(user => {
        this.setState({
          user
        })
      });
  }

  render () {

    const { user } = this.state;
    const { user_name, team_name, answers=[] } = user;

    return (
      <main>
        <h1>{user_name}</h1>
        <p>{team_name}</p>
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
      </main>
    );
  }
}

export default UserShowPage;
