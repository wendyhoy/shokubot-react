const DOMAIN = process.env.REACT_APP_DOMAIN;
const API_PREFIX = '/api/v1';
const BASE_URL = `${DOMAIN}${API_PREFIX}`;

function getJWT() {
  return localStorage.getItem('jwt');
}

const Token = {

  create (params) {
    return fetch(
      `${BASE_URL}/tokens`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params)
      }
    )
      .then(res => res.json());
  }

}

const Team = {

  all () {
    return fetch(`${BASE_URL}/teams`)
      .then(res => res.json());
  },

  findById (id) {
    return fetch(`${BASE_URL}/teams/${id}`)
      .then(res => res.json());
  }

}

const User = {

  findById (id) {
    return fetch(`${BASE_URL}/users/${id}`)
      .then(res => res.json());
  }

}

export { Token, Team, User };
