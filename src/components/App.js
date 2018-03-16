import React, { Component } from 'react';
import './App.css';

import AddToSlack from './AddToSlack';
import SignInWithSlack from './SignInWithSlack';
import TeamIndexPage from './TeamIndexPage';
import TeamShowPage from './TeamShowPage';
import UserShowPage from './UserShowPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">shokubot</h1>
        </header>
        <p className="App-intro">
          Welcome to shokubot
        </p>

        <AddToSlack />
        <SignInWithSlack />
        <TeamIndexPage />
        <TeamShowPage />
        <UserShowPage />

      </div>
    );
  }
}

export default App;
