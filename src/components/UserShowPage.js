import React, { Component } from 'react';
import { User } from '../lib/requests';
import ErrorPage from './ErrorPage';
import LoadingPage from './LoadingPage';

class UserShowPage extends Component {

  constructor (props) {
    super(props);

    this.state = {
      user: null,
      error: null
    }
  }

  componentDidMount () {

    const userId = this.props.match.params.id;
    
    User.findById(userId)
      .then(res => {

        if (res.status !== 200) {
          this.setState({
            error: res
          });
        }
        else {
          this.setState({
            user: res.json
          });
        }

      });
  }

  render () {

    // Show loading page
    const { user, error } = this.state;
    if (error === null && user === null) {
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
    const { user_name, team_name, answers=[] } = user;

    return (
      <div className="uk-container">
        <header className="uk-margin-large-top uk-margin-large-bottom">
          <h1 className="uk-heading-primary">{user_name}</h1>
        </header>
        <main>
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
      </div>
    );
  }
}

export default UserShowPage;
