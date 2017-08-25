import React from 'react';
import { NavLink } from 'react-router-dom';
// import Home from './Home.js';

export default function About(props) {
  return (
    <div>
      <div className='navContainer'>
        <NavLink to='/about/team' activeClassName='activeNav' className='nav'>Team</NavLink>
        <NavLink to='/about/company' activeClassName='activeNav' className='nav'>Company</NavLink>
        {/* <Route exact to='/home' component={Home} /> */}
        {/* Will show regardless because it's not inside of a router */}
      </div>
      {props.children}
    </div>
  )
}