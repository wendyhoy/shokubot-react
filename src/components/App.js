import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import TeamShowPage from './TeamShowPage';
import UserShowPage from './UserShowPage';
import SigningInPage from './SigningInPage';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/teams/:id" component={TeamShowPage}/>
            <Route path="/users/:id" component={UserShowPage}/>
            <Route path="/signing_in" component={SigningInPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
