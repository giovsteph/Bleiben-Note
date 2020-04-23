import React from 'react'
import { NavLink } from 'react-router-dom';

export const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/create'>New Note</NavLink></li>
      <li><NavLink to='/'>Logout</NavLink></li>
      <li><NavLink to='/'className='btn btn-floating pink lighten-1'>GP</NavLink></li>
      
    </ul>
  )
}
