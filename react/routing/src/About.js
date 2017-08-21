import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';

export default function About(props) {
  return (
    <div>
  <HashRouter>
    <div className='navContainer'>
      <NavLink to='/about/team' activeClassName='activeNav' className='nav'>Team</NavLink>
      <NavLink to='/about/company' activeClassName='activeNav' className='nav'>Company</NavLink>
    </div>
  </HashRouter>
      {props.children}
    </div>
  )
}