import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar (props) {

  const { user, onSignOut } = props;

  const handleSignOut = event => {
    event.preventDefault();
    onSignOut();
  };

  return (
    <nav className="uk-navbar-container uk-light" uk-navbar="">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li>
            <NavLink className="uk-navbar-item uk-logo" exact to="/">
              <img src="/images/logo-64.png" id="logo" className="uk-margin-small-right" alt="shokubot" />
              shokubot
            </NavLink>
          </li>
        </ul>
      </div>

      {
        user ?
          <div className="uk-navbar-right">
            <span id="navbar-greeting">hi, {user.user_name}</span>
            <ul className="uk-navbar-nav">
              <li><NavLink className="uk-navbar-item" exact to={`/users/${user.user_id}`}>My Profile</NavLink></li>
              <li><NavLink className="uk-navbar-item" exact to={`/teams/${user.team_id}`}>My Team</NavLink></li>
              <li><a className="uk-navbar-item" onClick={handleSignOut}>Sign Out</a></li>
            </ul>        
          </div>
          : 
          <span></span>
      }
    </nav>
  );
}

export default NavBar;