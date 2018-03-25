import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar () {
  return(
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

      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li><NavLink className="uk-navbar-item" exact to={`/users/44`}>My Profile</NavLink></li>
          <li><NavLink className="uk-navbar-item" exact to={`/teams/14`}>My Team</NavLink></li>
        </ul>        
      </div>
    </nav>
  );
}

export default NavBar;