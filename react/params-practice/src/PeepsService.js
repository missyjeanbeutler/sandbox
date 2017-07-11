import axios from 'axios';

export function getPeople(num) {
  return axios.get('http://swapi.co/api/people/?page=' + num)
}

export function getPerson(num) {
  return axios.get('http://swapi.co/api/people/' + num + '/')
}
