import React, { Component } from 'react';
import { Token } from '../lib/requests';
import jwtDecode from 'jwt-decode';

class SigningInPage extends Component {

  componentDidMount () {

    const query = new URLSearchParams(this.props.location.search);
    const verificationCode = query.get('id');
  
    Token
      .create({
        code: verificationCode
      })
      .then(data => {
        const { jwt } = data;
        const payload = jwtDecode(jwt);
        const { user_id } = payload;

        localStorage.setItem('jwt', jwt);
        this.props.history.push(`/users/${user_id}`);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render () {

    return (
      <div className="uk-container">
        <h1>Signing in...</h1>
      </div>
    );
  }
}

export default SigningInPage;
