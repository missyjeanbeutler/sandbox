import axios from 'axios';

export function loginUser(user) {
  let { username, password } = user;
  return axios.get(`http://localhost:3005/users?username=${username}&password=${password}`)
    .then(response => response.data[0])
}

export function addNewUser(user) {
  return axios.post('http://localhost:3005/users', user)
    .then(response => response.data)
}

// export function addNewFav(fav) {
//   return axios.post('http://localhost:3005/users/', { favorites: fav })
//   .then(response => response.data)
// }