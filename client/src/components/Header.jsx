import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './header.css';

import { useStore } from '../store';
import { useMutation, gql } from '@apollo/client';

const Header = () => {
  const { state, dispatch } = useStore();
  const navigate = useNavigate();

  const handleLogoutUser = () => {
    // Add logic to handle logout
  };

  return (
    <header>
      <nav class='bg-white px-4 lg:px-6 py-4 border-b border-gray-300'>
        <div class='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <a
            href='/'
            style={{ textDecoration: 'none' }}
            class='flex items-center no-underline'
          >
            <h1 class='text-3xl font-bold text-slate-950'>City Review</h1>
          </a>
          <div class='flex items-center lg:order-2'>
            <NavLink
              to='#'
              style={{ textDecoration: 'none' }}
              className='text-slate-950 font-lg font-bold rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2'
            >
              Log in
            </NavLink>
            <NavLink
              to='#'
              style={{ textDecoration: 'none' }}
              className='text-white bg-blue-700 hover:bg-blue-800 font-lg font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5'
            >
              Write A Review
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

{
  /* <header className='row justify-between align-center'>
<h3>City Reviewer</h3>

<h1 className='text-3xl font-bold underline'>Hello world!</h1>

<nav className='row align-center'>
  {state.user ? (
    <>
      <p className='text-rose-200'>Welcome, {state.user.username}</p>
      <NavLink to='/'>Home</NavLink>
      <NavLink className='nav-btn' to='/dashboard'>
        Dashboard
      </NavLink>
      <NavLink className='nav-btn' to='/writeareview'>
        Write a Review
      </NavLink>
      <button className='nav-btn' onClick={handleLogoutUser}>
        Log Out
      </button>
    </>
  ) : (
    <>
      <NavLink className='nav-btn' to='/login'>
        Login
      </NavLink>
    </>
  )}
</nav>
</header> */
}
