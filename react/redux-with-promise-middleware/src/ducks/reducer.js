import { loginUser, addNewUser } from '../services/userService';

const initialState = {
  user: {
    name: '',
    age: '',
    email: '',
    favorites: []
  }
} 

const ADD_USER = 'ADD_USER';
const ADD_USER_PENDING = 'ADD_USER_PENDING';
const ADD_USER_FULFILLED = 'ADD_USER_FULFILLED';
const ADD_FAV = 'ADD_FAV';
const LOGIN = 'LOGIN';
const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_FULFILLED = 'LOGIN_FULFILLED';


export default function reducer(state=initialState, action) {
  switch(action.type) {
    case ADD_USER_PENDING:
      return state;
    case ADD_USER_FULFILLED:
      console.log(action.payload)
      let { name, age, email } = action.payload;
      let favs = [...state.user.favorites];
      return Object.assign({}, state, { user: { name, age, email, favorites: favs } });
    case ADD_FAV:
      let newFavs = [...state.user.favorites, action.payload];
      let user = Object.assign({}, state.user, { favorites: newFavs });
      return Object.assign({}, state, { user })
    case LOGIN_PENDING:
      return state;
    case LOGIN_FULFILLED:
      return Object.assign({}, { user: action.payload })
    default:
      return state;
  }
}

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: addNewUser(user)
  }
}

export function addFav(fav) {
  return {
    type: ADD_FAV,
    payload: fav
  }
}

export function login(user) {
  return {
    type: LOGIN,
    payload: loginUser(user)
  }
}
