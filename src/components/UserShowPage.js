import React, { Component } from 'react';
import { User } from '../lib/requests';
import ErrorPage from './ErrorPage';
import LoadingPage from './LoadingPage';
import BarGraph from './BarGraph';
import moment from 'moment';

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
    
    let allAnswers = [];
    if (answers.length > 0) {

      // Need to parse array, add blank entries for days that were skipped
      allAnswers[0] = answers[0];

      for (let i=1; i<answers.length; i++) {
        const next = moment(answers[i].date);
        const prev = moment(answers[i-1].date);
        const diff = next.diff(prev, 'days');
        
        for (let j=1; j<diff; j++) {
          allAnswers.push({
            date: prev.add(j, 'days'),
            autonomy: 0,
            complexity: 0,
            reward: 0
          });
        }

        allAnswers.push(answers[i]);
      }

      // Only show the last NUM_DAYS
      const NUM_DAYS = 81;
      allAnswers = allAnswers.slice(-NUM_DAYS);

      // If less than 30 days, add upcoming days
      const upcoming = NUM_DAYS-allAnswers.length;
      for (let i=1; i<=upcoming; i++) {

        const prev = moment(allAnswers[allAnswers.length-1].date);
        allAnswers.push({
          date: prev.add(1, 'days'),
          autonomy: 0,
          complexity: 0,
          reward: 0
        });   
      }

    }

    // Pass daily results to each graph
    const dates = allAnswers.map(answer => moment(answer.date).format('ddd MMM D'));
    const autonomy = allAnswers.map(answer => answer.autonomy);
    const complexity = allAnswers.map(answer => answer.complexity);
    const reward = allAnswers.map(answer => answer.reward);

    return (
      <div className="uk-container">
        <header className="uk-margin-large-top uk-margin-large-bottom">
          <h1 className="uk-heading-primary">{user_name}</h1>
        </header>
        <main>
          <p>{team_name}</p>

          <BarGraph 
            xAxis={dates} 
            yAxis={autonomy} 
            id="autonomy" 
            color="rgb(255,184,76,1.0)"
          />
          <BarGraph 
            xAxis={dates} 
            yAxis={complexity} 
            id="complexity" 
            color="rgb(144,217,108,1.0)"
          />
          <BarGraph 
            xAxis={dates} 
            yAxis={reward} 
            id="reward" 
            color="rgb(191,96,172,1.0)"
          />

        </main>
      </div>
    );
  }
}

export default UserShowPage;
