import React from 'react';
import AddToSlack from './AddToSlack';
import SignInWithSlack from './SignInWithSlack';
import './HomePage.css';

function HomePage () {

  return (
    <div className="uk-container uk-padding-large uk-text-center">
      <header className="uk-margin-large-top uk-margin-large-bottom">
        <h1 className="uk-heading-primary">shokubot</h1>
        <p className="uk-text-lead">
          Track your team's wellness with just three simple questions
        </p>
        <p>
          Know if your team members (and you too!) feel rewarded, and if they have enough autonomy and complexity in their work
        </p>
        <div id="slack-buttons" className="uk-flex uk-flex-between uk-margin-large-top uk-margin-large-bottom">
          <AddToSlack />
          <SignInWithSlack />
        </div>
      </header>
    </div>
  );

}

export default HomePage;