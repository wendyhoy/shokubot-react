import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import TeamShowPage from './TeamShowPage';
import UserShowPage from './UserShowPage';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/teams" component={TeamShowPage}/>
          <Route path="/users" component={UserShowPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
