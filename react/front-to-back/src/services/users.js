import axios from 'axios';

export function getUsers() {
  return axios.get('/api/getAll').then(res => {
    return res.data;
  })
}

export function getDetails(id) {
  return axios.get(`/api/getUser/${id}`).then(user => {
    return user.data;
  })
}

export function addUser(user) {
  return axios.post('/api/addUser', user).then(res => {
    return res.data;
  })
}