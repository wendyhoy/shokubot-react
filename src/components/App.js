import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import HomePage from './HomePage';
import TeamShowPage from './TeamShowPage';
import UserShowPage from './UserShowPage';
import SigningInPage from './SigningInPage';
import ErrorPage from './ErrorPage';
import AuthRoute from './AuthRoute';
import NavBar from './NavBar';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      user: null
    }

    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentWillMount () {
    this.signIn();
  }

  signIn () {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      const payload = jwtDecode(jwt);
      this.setState({
        user: payload
      });
    }
  }

  signOut () {  
    localStorage.removeItem('jwt');

    this.setState({
      user: null
    });
  }

  isSignedIn () {
    return this.state.user !== null; 
  }

  render () {

    const { user } = this.state;

    const notFoundError = {
      json: {
        type: "Not Found"
      },
      status: 404
    };

    return (
      <Router>
        <div>
          <NavBar user={user} onSignOut={this.signOut} />
          <Switch>
            <Route exact path="/" component={HomePage} />

            <AuthRoute 
              path="/teams/:id" 
              isAuthenticated={this.isSignedIn()}
              component={TeamShowPage} 
            />

            <AuthRoute 
              path="/users/:id" 
              isAuthenticated={this.isSignedIn()}
              component={UserShowPage} 
            />

            <Route 
              path="/signing_in" 
              render={
                props => <SigningInPage { ...props } onSignIn={this.signIn} />
              }
            />

            <Route 
              render={
                props => <ErrorPage error={notFoundError} />
              } 
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
