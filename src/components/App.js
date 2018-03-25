import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import TeamShowPage from './TeamShowPage';
import UserShowPage from './UserShowPage';
import SigningInPage from './SigningInPage';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/teams/:id" component={TeamShowPage}/>
          <Route path="/users/:id" component={UserShowPage}/>
          <Route path="/signing_in" component={SigningInPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
