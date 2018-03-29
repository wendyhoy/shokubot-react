import React, { Component } from 'react';
import { Token } from '../lib/requests';
import jwtDecode from 'jwt-decode';

class SigningInPage extends Component {

  componentDidMount () {

    const query = new URLSearchParams(this.props.location.search);
    const verificationCode = query.get('id');
    const { onSignIn } = this.props;
  
    Token
      .create({
        code: verificationCode
      })
      .then(data => {      
        const { jwt } = data;
        const payload = jwtDecode(jwt);
        const { user_id } = payload;

        localStorage.setItem('jwt', jwt);
        onSignIn();

        this.props.history.push(`/users/${user_id}`);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render () {

    return (
      <div className="uk-container">
        <header className="uk-margin-large-top uk-margin-large-bottom">
          <div className="uk-position-center" uk-spinner=""></div>
        </header>
      </div>
    );
  }
}

export default SigningInPage;
