import React, { Component } from 'react';
import { Team } from '../lib/requests';
import ErrorPage from './ErrorPage';
import LoadingPage from './LoadingPage';
import BarGraph from './BarGraph';
import DonutGraph from './DonutGraph';
import moment from 'moment';

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

    let allAnswers = [];
    let automonySummary = 0;
    let complexitySummary = 0;
    let rewardSummary = 0;
    let totalAnswers = 0;

    if (answers.length > 0) {

      // Save the last cumulative average
      automonySummary = answers[answers.length-1].autonomy;
      complexitySummary = answers[answers.length-1].complexity;
      rewardSummary = answers[answers.length-1].reward;
      totalAnswers = answers[answers.length-1].total_count;

      // Need to parse array, add blank entries for days that were skipped
      allAnswers[0] = answers[0];

      for (let i=1; i<answers.length; i++) {
        const next = moment(answers[i].date);
        const prev = moment(answers[i-1].date);
        const diff = next.diff(prev, 'days');
        
        for (let j=1; j<diff; j++) {
          const yesterday = moment(allAnswers[allAnswers.length-1].date);
          allAnswers.push({
            date: yesterday.add(1, 'days'),
            autonomy: 0,
            complexity: 0,
            reward: 0,
            daily_count: 0,
            total_count: 0
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
          reward: 0,
          daily_count: 0,
          total_count: 0          
        });   
      }

    }

    // Pass daily results to each graph
    const dates = allAnswers.map(answer => moment(answer.date).format('ddd MMM D'));
    const autonomy = allAnswers.map(answer => answer.autonomy);
    const complexity = allAnswers.map(answer => answer.complexity);
    const reward = allAnswers.map(answer => answer.reward);
    const dailyCounts = allAnswers.map(answer => answer.daily_count);

    return (
      <div className="uk-container uk-padding-large">
        <header className="uk-margin-medium-bottom">
          <h1 className="uk-heading-primary">my team
            <span className="uk-margin-small-left uk-text-lead uk-text-muted">{team_name} | {totalAnswers} total answers</span>
          </h1>
        </header>
        <main>

          <div className="uk-child-width-1-3 uk-grid-medium uk-margin-large-bottom" uk-grid="">              
            <div>
              <DonutGraph 
                percentage={automonySummary} 
                id="autonomy-summary" 
                color="rgb(255,194,102,1.0)"
                label="autonomy"
              />
            </div>
            <div>
              <DonutGraph 
                percentage={complexitySummary} 
                id="complexity-summary" 
                color="rgb(178,242,145,1.0)"
                label="complexity"
              />
            </div>
            <div>
              <DonutGraph 
                percentage={rewardSummary} 
                id="reward-summary" 
                color="rgb(242,145,225,1.0)"
                label="reward"
              />
            </div>
          </div>

          <h2 className="uk-heading-line"><span>autonomy</span></h2>
          <BarGraph 
            xAxis={dates} 
            yAxis={autonomy} 
            counts={dailyCounts}
            id="autonomy" 
            color="rgb(255,194,102,1.0)"
          />

          <h2 className="uk-heading-line"><span>complexity</span></h2>
          <BarGraph 
            xAxis={dates} 
            yAxis={complexity} 
            counts={dailyCounts}
            id="complexity" 
            color="rgb(178,242,145,1.0)"
          />

          <h2 className="uk-heading-line"><span>reward</span></h2>
          <BarGraph 
            xAxis={dates} 
            yAxis={reward} 
            counts={dailyCounts}
            id="reward" 
            color="rgb(242,145,225,1.0)"
          />

        </main>
      </div>
    );
  }
}

export default TeamShowPage;
