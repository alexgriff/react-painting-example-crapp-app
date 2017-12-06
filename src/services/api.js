const API_ROOT = `http://localhost:3001/api/v1`;

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
};

const get = url => {
  const token = localStorage.getItem('token');
  return fetch(url, {
    headers: { Authorization: token }
  }).then(res => res.json());
};

const getPaintings = () => {
  return get(`${API_ROOT}/paintings/`);
};

const login = data => {
  return fetch(`${API_ROOT}/login/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return get(`${API_ROOT}/current_user`);
};

export const api = {
  auth: {
    login,
    getCurrentUser
  },
  paintings: {
    getPaintings
  }
};
