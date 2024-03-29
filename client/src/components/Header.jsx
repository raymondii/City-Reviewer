import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './header.css';

import { useStore } from '../store';
import { useMutation, gql } from '@apollo/client';
import { LOGOUT_USER } from '../graphql/mutations';

const Header = () => {
  const { state, setState } = useStore();
  const navigate = useNavigate();

  const [logoutUser] = useMutation(LOGOUT_USER, {
    update(cache) {
      cache.evict({ fieldName: 'getUserNotes' });
    },
  });

  const handleLogoutUser = async () => {
    // Add logic to handle logout
    await logoutUser();

    setState({
      ...state,
      user: null,
    });

    navigate('/');
  };

  return (
    <header>
      <nav className='bg-white px-4 lg:px-6 py-4 border-b border-gray-300'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>

          <div className='flex'>

            <img src="../public/assets/airplane_black_logo.png" alt="" className='w-24 h-24' />
            <a
              href='/'
              style={{ textDecoration: 'none' }}
              className='flex items-center no-underline'
            >
              <h1 className='text-3xl font-bold text-slate-950'>City Review</h1>
            </a>

          </div>

          <div className='flex items-center'>
            {state.user ? (
              <>
                <NavLink
                  to='/dashboard'
                  style={{ textDecoration: 'none' }}
                  className='text-slate-950 font-lg font-bold rounded-lg text-base py-2 lg:py-2.5 mr-6'
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to='/myreviews'
                  style={{ textDecoration: 'none' }}
                  className='text-slate-950 font-lg font-bold rounded-lg text-base py-2 lg:py-2.5 mr-6'
                >
                  My Reviews
                </NavLink>

                <NavLink
                  onClick={handleLogoutUser}
                  style={{ textDecoration: 'none' }}
                  className='text-slate-950 font-lg font-bold rounded-lg text-base py-2 lg:py-2.5 mr-6'
                >
                  Log Out
                </NavLink>
                <NavLink
                  to='/writeareview'
                  style={{ textDecoration: 'none' }}
                  className='text-white bg-teal-700 hover:bg-teal-500 font-lg font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5'
                >
                  Write A Review
                </NavLink>
              </>
            ) : (
              <>
                {' '}
                <NavLink
                  to='/dashboard'
                  style={{ textDecoration: 'none' }}
                  className='text-slate-950 font-lg font-bold hover:text-blue-700 rounded-lg text-base py-2 lg:py-2.5 mr-6'
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to='/auth'
                  style={{ textDecoration: 'none' }}
                  className='text-slate-950 font-lg font-bold hover:text-teal-500 rounded-lg text-base py-2 lg:py-2.5 mr-6'
                >
                  Log in
                </NavLink>
                <NavLink
                  to='/writeareview'
                  style={{ textDecoration: 'none' }}
                  className='text-white bg-teal-700 hover:bg-teal-500 font-lg font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5'
                >
                  Write A Review
                </NavLink>
              </>
            )}
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
