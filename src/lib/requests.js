const DOMAIN = 'https://f101fc2f.ngrok.io';
const API_PREFIX = '/api/v1';
const BASE_URL = `${DOMAIN}${API_PREFIX}`;

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

export { Team, User };
